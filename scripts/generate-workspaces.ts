import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { basename, dirname, extname, join, relative, sep } from "node:path";

const repoRoot = "../../..";
const scanRoots = ["apps", "packages"];
const outFile = "src/workspaces.ts";
const docsDir = "docs";
const docsOutFile = "src/docs.ts";

interface Workspace {
	id: string;
	label: string;
	category: string;
	description: string;
	path: string;
	type: "rust" | "npm";
}

interface CargoInfo {
	name: string;
	description: string;
	version?: string;
	edition?: string;
	rustVersion?: string;
	license?: string;
	repository?: string;
	homepage?: string;
	authors?: string[];
	keywords?: string[];
	members?: string[];
	binaries?: string[];
	features?: Record<string, string[]>;
	dependencies: { name: string; version?: string; workspace?: boolean }[];
	devDependencies: { name: string; version?: string; workspace?: boolean }[];
}

interface NpmInfo {
	name: string;
	description: string;
	version?: string;
	license?: string;
	repository?: string | { type: string; url: string };
	homepage?: string;
	keywords?: string[];
	main?: string;
	module?: string;
	types?: string;
	bin?: Record<string, string>;
	files?: string[];
	workspaces?: string[];
	engines?: Record<string, string>;
	scripts?: Record<string, string>;
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
	optionalDependencies?: Record<string, string>;
}

function isCargoInfo(info: CargoInfo | NpmInfo | undefined): info is CargoInfo {
	return info !== undefined && Array.isArray(info.dependencies);
}

function isNpmInfo(info: CargoInfo | NpmInfo | undefined): info is NpmInfo {
	return info !== undefined && !isCargoInfo(info);
}

const excludedDirs = new Set([
	"node_modules",
	"dist",
	"target",
	".git",
	".devin",
	".github",
]);

const sourceExts = new Set([".rs", ".ts", ".tsx", ".js", ".jsx"]);

async function* walk(dir: string, root: string): AsyncGenerator<string> {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (excludedDirs.has(entry.name)) continue;
		const full = join(dir, entry.name);
		if (entry.isDirectory()) {
			yield* walk(full, root);
		} else if (entry.isFile()) {
			yield full;
		}
	}
}

function inferCategory(relDir: string): string {
	const parts = relDir.replace(/\\/g, "/").split("/");
	if (parts[0] === "apps" && parts.length >= 2) {
		const area = parts[1];
		if (area === "cli") return "CLI Apps";
		if (area === "desktop") return "Desktop Apps";
		if (area === "tui") return "TUI Apps";
		if (area === "wasm") return "WASM Apps";
		if (area === "web") return "Web Apps";
		return `${area[0].toUpperCase() + area.slice(1)} Apps`;
	}
	if (parts[0] === "packages" && parts.length >= 2) {
		const domain = parts[1];
		if (domain === "domain") return "Domain";
		if (domain === "infra") return "Infra";
		if (domain === "lib" && parts.length >= 3) {
			const lib = parts[2];
			if (lib === "foundation") return "Foundation";
			if (lib === "tools") return "Tools";
			if (lib === "tui") return "TUI Lib";
			if (lib === "ratatui-ui") return "TUI Lib";
			return "Libraries";
		}
		return domain[0].toUpperCase() + domain.slice(1);
	}
	return "Other";
}

function makeId(rel: string, type: "rust" | "npm"): string {
	const clean = rel
		.replace(/\\/g, "-")
		.replace(/\//g, "-")
		.replace(/\.\w+$/, "");
	return `${clean}-${type}`;
}

function safeIdentifier(id: string): string {
	return id.replace(/[^a-zA-Z0-9_$]/g, "_");
}

function escapeCell(text: string): string {
	return text.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function table(headers: string[], rows: string[][]): string {
	if (rows.length === 0) return "";
	const headerLine = `| ${headers.map(escapeCell).join(" | ")} |`;
	const separator = `| ${headers.map(() => "---").join(" | ")} |`;
	const body = rows
		.map((row) => `| ${row.map(escapeCell).join(" | ")} |`)
		.join("\n");
	return [headerLine, separator, body].join("\n");
}

function normalizeRepoUrl(repo: unknown): string | undefined {
	if (!repo) return undefined;
	if (typeof repo === "string") return repo;
	if (typeof repo === "object" && repo && "url" in repo) {
		return (repo as { url: string }).url;
	}
	return undefined;
}

function extractCargoValue(text: string, key: string): string | undefined {
	const regex = new RegExp(`^\\s*${key}\\s*=\\s*"([^"]+)"`, "m");
	const match = text.match(regex);
	return match?.[1];
}

function extractCargoList(text: string, key: string): string[] | undefined {
	const regex = new RegExp(`^\\s*${key}\\s*=\\s*\\[([^\\]]*)\\]`, "m");
	const match = text.match(regex);
	if (!match) return undefined;
	return match[1]
		.split(",")
		.map((s) => s.trim().replace(/^["']|["']$/g, ""))
		.filter(Boolean);
}

function extractCargoSection(
	text: string,
	section: string,
): Record<string, string> {
	const result: Record<string, string> = {};
	const regex = new RegExp(`\\[${section}\\]([^\\[]*)`, "m");
	const match = text.match(regex);
	if (!match) return result;

	const lines = match[1].split("\n");
	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith("#")) continue;

		const simple = trimmed.match(/^([a-zA-Z0-9_-]+)\\s*=\\s*"([^"]+)"/);
		if (simple) {
			result[simple[1]] = simple[2];
			continue;
		}

		const table = trimmed.match(/^([a-zA-Z0-9_-]+)\\s*=\\s*\\{([^}]+)\\}/);
		if (table) {
			const inner = table[2];
			const versionMatch = inner.match(/version\\s*=\\s*"([^"]+)"/);
			if (versionMatch) {
				result[table[1]] = versionMatch[1];
			} else {
				result[table[1]] = "{ ... }";
			}
			continue;
		}

		const flag = trimmed.match(/^([a-zA-Z0-9_-]+)\\s*=\\s*true/);
		if (flag) {
			result[flag[1]] = "true";
		}
	}
	return result;
}

function extractCargoMembers(text: string): string[] | undefined {
	const regex = new RegExp(`^\\s*members\\s*=\\s*\\[([^\\]]*)\\]`, "m");
	const match = text.match(regex);
	if (!match) return undefined;
	return match[1]
		.split(",")
		.map((s) => s.trim().replace(/^["']|["']$/g, ""))
		.filter(Boolean);
}

function extractCargoFeatures(
	text: string,
): Record<string, string[]> | undefined {
	const result: Record<string, string[]> = {};
	const regex = new RegExp(`\\[features\\]([^\\[]*)`);
	const match = text.match(regex);
	if (!match) return undefined;
	const lines = match[1].split("\n");
	const featureRegex = new RegExp(`^([a-zA-Z0-9_-]+)\\s*=\\s*\\[([^\\]]*)\\]`);
	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith("#")) continue;
		const feature = trimmed.match(featureRegex);
		if (feature) {
			const name = feature[1];
			const deps = feature[2]
				.split(",")
				.map((s) => s.trim().replace(/^["']|["']$/g, ""))
				.filter(Boolean);
			result[name] = deps;
		}
	}
	return Object.keys(result).length > 0 ? result : undefined;
}

async function detectCargoBinaries(
	workspaceDir: string,
	text: string,
	info: CargoInfo,
): Promise<string[]> {
	const bins: string[] = [];
	const mainPath = join(repoRoot, workspaceDir, "src", "main.rs");
	try {
		const s = await stat(mainPath);
		if (s.isFile()) bins.push(info.name);
	} catch {
		// ignore
	}
	const binDir = join(repoRoot, workspaceDir, "src", "bin");
	try {
		const entries = await readdir(binDir, { withFileTypes: true });
		for (const entry of entries) {
			if (entry.isFile() && entry.name.endsWith(".rs")) {
				bins.push(entry.name.replace(/\.rs$/, ""));
			}
		}
	} catch {
		// ignore
	}
	const inlineBinRegex = new RegExp(
		`\\[\\[bin\\]\\][\\s\\S]*?^\\s*name\\s*=\\s*"([^"]+)"`,
		"gm",
	);
	for (const m of text.matchAll(inlineBinRegex)) {
		if (!bins.includes(m[1])) bins.push(m[1]);
	}
	return bins;
}

async function listDirectory(
	baseDir: string,
	dir: string,
	maxDepth = 2,
	currentDepth = 0,
): Promise<{ path: string; isDir: boolean }[]> {
	const results: { path: string; isDir: boolean }[] = [];
	try {
		const entries = await readdir(dir, { withFileTypes: true });
		for (const entry of entries) {
			if (excludedDirs.has(entry.name)) continue;
			if (entry.name.startsWith(".")) continue;
			const full = join(dir, entry.name);
			const rel = relative(baseDir, full).replace(/\\/g, "/");
			results.push({ path: rel, isDir: entry.isDirectory() });
			if (entry.isDirectory() && currentDepth < maxDepth) {
				results.push(
					...(await listDirectory(baseDir, full, maxDepth, currentDepth + 1)),
				);
			}
		}
	} catch {
		// ignore
	}
	return results;
}

async function listSourceFiles(
	baseDir: string,
	dir: string,
	limit = 30,
): Promise<string[]> {
	const files: string[] = [];
	try {
		const entries = await readdir(dir, { withFileTypes: true });
		for (const entry of entries) {
			if (entry.isDirectory()) {
				files.push(
					...(await listSourceFiles(
						baseDir,
						join(dir, entry.name),
						limit - files.length,
					)),
				);
			} else if (entry.isFile() && sourceExts.has(extname(entry.name))) {
				files.push(
					relative(baseDir, join(dir, entry.name)).replace(/\\/g, "/"),
				);
			}
			if (files.length >= limit) break;
		}
	} catch {
		// ignore
	}
	return files.slice(0, limit);
}

async function parseCargo(
	text: string,
	workspaceDir: string,
): Promise<CargoInfo> {
	const name = extractCargoValue(text, "name") ?? "";
	const description = extractCargoValue(text, "description") ?? "";
	const version = extractCargoValue(text, "version");
	const edition = extractCargoValue(text, "edition");
	const rustVersion = extractCargoValue(text, "rust-version");
	const license = extractCargoValue(text, "license");
	const repository = extractCargoValue(text, "repository");
	const homepage = extractCargoValue(text, "homepage");
	const authors = extractCargoList(text, "authors");
	const keywords = extractCargoList(text, "keywords");
	const members = extractCargoMembers(text);
	const features = extractCargoFeatures(text);

	const depSection = extractCargoSection(text, "dependencies");
	const devDepSection = extractCargoSection(text, "dev-dependencies");

	const dependencies: CargoInfo["dependencies"] = Object.entries(
		depSection,
	).map(([k, v]) => ({
		name: k,
		version: v === "true" ? undefined : v,
		workspace: v === "true" || v === "{ ... }",
	}));
	const devDependencies: CargoInfo["devDependencies"] = Object.entries(
		devDepSection,
	).map(([k, v]) => ({
		name: k,
		version: v === "true" ? undefined : v,
		workspace: v === "true" || v === "{ ... }",
	}));

	const binaries = await detectCargoBinaries(workspaceDir, text, {
		name,
		description,
		dependencies,
		devDependencies,
	});

	return {
		name,
		description,
		version,
		edition,
		rustVersion,
		license,
		repository,
		homepage,
		authors,
		keywords,
		members,
		binaries,
		features,
		dependencies,
		devDependencies,
	};
}

function parsePackageJson(text: string): NpmInfo | undefined {
	try {
		const json = JSON.parse(text);
		if (!json.name) return undefined;
		return {
			name: json.name,
			description: json.description ?? "",
			version: json.version,
			license: json.license,
			repository: json.repository,
			homepage: json.homepage,
			keywords: json.keywords,
			main: json.main,
			module: json.module,
			types: json.types,
			bin: json.bin,
			files: json.files,
			workspaces: json.workspaces,
			engines: json.engines,
			scripts: json.scripts,
			dependencies: json.dependencies,
			devDependencies: json.devDependencies,
			peerDependencies: json.peerDependencies,
			optionalDependencies: json.optionalDependencies,
		};
	} catch {
		return undefined;
	}
}

async function tryReadReadme(path: string): Promise<string | undefined> {
	try {
		return await readFile(path, "utf-8");
	} catch {
		return undefined;
	}
}

async function generateDoc(
	workspace: Workspace,
	workspaceDir: string,
	info?: CargoInfo | NpmInfo,
	allWorkspaces?: Workspace[],
): Promise<string> {
	const lines: string[] = [];
	lines.push(`# ${workspace.label}`);
	lines.push("");

	const repoUrl = isCargoInfo(info)
		? info.repository
		: isNpmInfo(info)
			? normalizeRepoUrl(info.repository)
			: undefined;

	const homepageUrl = isCargoInfo(info)
		? info.homepage
		: isNpmInfo(info)
			? info.homepage
			: undefined;

	lines.push("## Overview");
	lines.push("");
	lines.push(
		workspace.description || info?.description || "No description available.",
	);
	lines.push("");

	const metadataRows: string[][] = [
		["Type", workspace.type.toUpperCase()],
		["Category", workspace.category],
		["Path", `\`${workspace.path}\``],
	];

	if (isCargoInfo(info)) {
		if (info.version) metadataRows.push(["Version", `\`${info.version}\``]);
		if (info.edition) metadataRows.push(["Edition", `\`${info.edition}\``]);
		if (info.rustVersion)
			metadataRows.push(["Rust Version", `\`>= ${info.rustVersion}\``]);
		if (info.license) metadataRows.push(["License", `\`${info.license}\``]);
		if (repoUrl) metadataRows.push(["Repository", `<${repoUrl}>`]);
		if (homepageUrl) metadataRows.push(["Homepage", `<${homepageUrl}>`]);
		if (info.authors?.length)
			metadataRows.push(["Authors", info.authors.join(", ")]);
		if (info.keywords?.length)
			metadataRows.push(["Keywords", info.keywords.join(", ")]);
	} else if (isNpmInfo(info)) {
		if (info.version) metadataRows.push(["Version", `\`${info.version}\``]);
		if (info.license) metadataRows.push(["License", `\`${info.license}\``]);
		if (repoUrl) metadataRows.push(["Repository", `<${repoUrl}>`]);
		if (homepageUrl) metadataRows.push(["Homepage", `<${homepageUrl}>`]);
		if (info.keywords?.length)
			metadataRows.push(["Keywords", info.keywords.join(", ")]);
		if (info.main) metadataRows.push(["Main", `\`${info.main}\``]);
		if (info.module) metadataRows.push(["Module", `\`${info.module}\``]);
		if (info.types) metadataRows.push(["Types", `\`${info.types}\``]);
	}

	lines.push("## Metadata");
	lines.push("");
	lines.push(table(["Field", "Value"], metadataRows));
	lines.push("");

	const absDir = join(repoRoot, workspaceDir);

	const topEntries = await listDirectory(absDir, absDir, 1);
	if (topEntries.length > 0) {
		lines.push("## Directory Structure");
		lines.push("");
		for (const entry of topEntries.slice(0, 30)) {
			lines.push(`- ${entry.isDir ? "📁" : "📄"} \`${entry.path}\``);
		}
		lines.push("");
	}

	const srcDir = join(absDir, "src");
	const sourceFiles = await listSourceFiles(absDir, srcDir, 40);
	if (sourceFiles.length > 0) {
		lines.push("## Source Files");
		lines.push("");
		for (const f of sourceFiles) {
			lines.push(`- \`${f}\``);
		}
		lines.push("");
	}

	if (isCargoInfo(info)) {
		if (info.members && info.members.length > 0) {
			lines.push("## Workspace Members");
			lines.push("");
			for (const m of info.members) {
				lines.push(`- \`${m}\``);
			}
			lines.push("");
		}

		if (info.binaries.length > 0) {
			lines.push("## Binaries");
			lines.push("");
			for (const b of info.binaries) {
				lines.push(`- \`${b}\``);
			}
			lines.push("");
		}

		if (info.features && Object.keys(info.features).length > 0) {
			lines.push("## Features");
			lines.push("");
			for (const [name, deps] of Object.entries(info.features)) {
				const depList =
					deps.length > 0 ? deps.map((d) => `\`${d}\``).join(", ") : "default";
				lines.push(`- \`${name}\`: ${depList}`);
			}
			lines.push("");
		}
	}

	if (isNpmInfo(info) && info.workspaces && info.workspaces.length > 0) {
		lines.push("## Workspace Members");
		lines.push("");
		for (const w of info.workspaces) {
			lines.push(`- \`${w}\``);
		}
		lines.push("");
	}

	lines.push("## Quick Start");
	lines.push("");

	if (isCargoInfo(info)) {
		const isRoot = workspaceDir === ".";
		const pkg = isRoot ? "" : ` -p ${info.name}`;
		lines.push(`### Build`);
		lines.push("");
		lines.push(`\`\`\`bash\ncargo build${pkg}\n\`\`\``);
		lines.push("");
		lines.push(`### Test`);
		lines.push("");
		lines.push(`\`\`\`bash\ncargo test${pkg}\n\`\`\``);
		lines.push("");
		if (!isRoot) {
			lines.push(`### Run`);
			lines.push("");
			if (info.binaries.length === 1) {
				lines.push(`\`\`\`bash\ncargo run -p ${info.name}\n\`\`\``);
			} else if (info.binaries.length > 1) {
				for (const b of info.binaries) {
					lines.push(
						`\`\`\`bash\ncargo run -p ${info.name} --bin ${b}\n\`\`\``,
					);
				}
			} else {
				lines.push(`\`\`\`bash\ncargo run -p ${info.name}\n\`\`\``);
			}
			lines.push("");
			lines.push(`### Lint`);
			lines.push("");
			lines.push(`\`\`\`bash\ncargo clippy${pkg}\n\`\`\``);
			lines.push("");
			lines.push(`### Documentation`);
			lines.push("");
			lines.push(`\`\`\`bash\ncargo doc${pkg} --no-deps\n\`\`\``);
			lines.push("");
		}
	} else if (isNpmInfo(info)) {
		lines.push(`### Install`);
		lines.push("");
		lines.push(`\`\`\`bash\nbun install\n\`\`\``);
		lines.push("");
		if (info.scripts?.build) {
			lines.push(`### Build`);
			lines.push("");
			lines.push(`\`\`\`bash\nbun run build\n\`\`\``);
			lines.push("");
		}
		if (info.scripts?.dev) {
			lines.push(`### Develop`);
			lines.push("");
			lines.push(`\`\`\`bash\nbun run dev\n\`\`\``);
			lines.push("");
		}
		if (info.scripts?.test) {
			lines.push(`### Test`);
			lines.push("");
			lines.push(`\`\`\`bash\nbun run test\n\`\`\``);
			lines.push("");
		}
		if (info.scripts?.lint) {
			lines.push(`### Lint`);
			lines.push("");
			lines.push(`\`\`\`bash\nbun run lint\n\`\`\``);
			lines.push("");
		}
		if (info.scripts?.preview) {
			lines.push(`### Preview`);
			lines.push("");
			lines.push(`\`\`\`bash\nbun run preview\n\`\`\``);
			lines.push("");
		}
		if (info.scripts?.deploy) {
			lines.push(`### Deploy`);
			lines.push("");
			lines.push(`\`\`\`bash\nbun run deploy\n\`\`\``);
			lines.push("");
		}
	}

	if (isNpmInfo(info) && info.scripts) {
		const scripts = Object.entries(info.scripts);
		if (scripts.length > 0) {
			lines.push("## Scripts");
			lines.push("");
			lines.push(
				table(
					["Script", "Command"],
					scripts.map(([k, v]) => [k, `\`${v}\``]),
				),
			);
			lines.push("");
		}
	}

	if (isNpmInfo(info) && info.bin) {
		const bins = Object.entries(info.bin);
		if (bins.length > 0) {
			lines.push("## Binaries");
			lines.push("");
			for (const [k, v] of bins) {
				lines.push(`- \`${k}\`: \`${v}\``);
			}
			lines.push("");
		}
	}

	const deps: [string, string][] = [];
	if (isNpmInfo(info) && info.dependencies) {
		for (const [k, v] of Object.entries(info.dependencies)) {
			deps.push([k, v]);
		}
	}
	if (isCargoInfo(info)) {
		for (const d of info.dependencies) {
			const version = d.workspace ? "workspace" : (d.version ?? "*");
			deps.push([d.name, version]);
		}
	}
	if (deps.length > 0) {
		lines.push("## Dependencies");
		lines.push("");
		lines.push(
			table(
				["Name", "Version"],
				deps.map(([k, v]) => [k, `\`${v}\``]),
			),
		);
		lines.push("");
	}

	const devDeps: [string, string][] = [];
	if (isNpmInfo(info) && info.devDependencies) {
		for (const [k, v] of Object.entries(info.devDependencies)) {
			devDeps.push([k, v]);
		}
	}
	if (isCargoInfo(info)) {
		for (const d of info.devDependencies) {
			const version = d.workspace ? "workspace" : (d.version ?? "*");
			devDeps.push([d.name, version]);
		}
	}
	if (devDeps.length > 0) {
		lines.push("## Dev Dependencies");
		lines.push("");
		lines.push(
			table(
				["Name", "Version"],
				devDeps.map(([k, v]) => [k, `\`${v}\``]),
			),
		);
		lines.push("");
	}

	if (
		isNpmInfo(info) &&
		info.peerDependencies &&
		Object.keys(info.peerDependencies).length > 0
	) {
		lines.push("## Peer Dependencies");
		lines.push("");
		lines.push(
			table(
				["Name", "Version"],
				Object.entries(info.peerDependencies).map(([k, v]) => [k, `\`${v}\``]),
			),
		);
		lines.push("");
	}

	if (isNpmInfo(info) && info.engines) {
		lines.push("## Environment");
		lines.push("");
		lines.push(
			table(
				["Runtime", "Version"],
				Object.entries(info.engines).map(([k, v]) => [k, `\`${v}\``]),
			),
		);
		lines.push("");
	}

	if (isCargoInfo(info) && (info.rustVersion || info.edition)) {
		lines.push("## Environment");
		lines.push("");
		const envRows: string[][] = [];
		if (info.edition) envRows.push(["Edition", `\`${info.edition}\``]);
		if (info.rustVersion)
			envRows.push(["Rust Version", `\`>= ${info.rustVersion}\``]);
		lines.push(table(["Field", "Value"], envRows));
		lines.push("");
	}

	const readme = await tryReadReadme(join(repoRoot, workspaceDir, "README.md"));

	lines.push("## README");
	lines.push("");
	if (readme?.trim()) {
		lines.push(readme.trim());
		lines.push("");
	} else {
		lines.push(
			"> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.",
		);
		lines.push("");
	}

	if (repoUrl || homepageUrl) {
		lines.push("## Links");
		lines.push("");
		if (repoUrl) lines.push(`- Repository: <${repoUrl}>`);
		if (homepageUrl) lines.push(`- Homepage: <${homepageUrl}>`);
		const sourceLink = repoUrl
			? `${repoUrl}/blob/main/${workspace.path}`
			: undefined;
		if (sourceLink) lines.push(`- Source: <${sourceLink}>`);
		lines.push("");
	}

	return lines.join("\n");
}

async function main() {
	const workspaces: Workspace[] = [];

	await mkdir(docsDir, { recursive: true });

	for (const scanRoot of scanRoots) {
		const rootDir = join(repoRoot, scanRoot);
		try {
			await stat(rootDir);
		} catch {
			continue;
		}
		for await (const file of walk(rootDir, repoRoot)) {
			const rel = relative(repoRoot, file).replace(/\\/g, "/");
			const dir = dirname(rel);
			const name = basename(file);
			if (name === "Cargo.toml") {
				const text = await readFile(file, "utf-8");
				const info = await parseCargo(text, dir);
				if (info.name) {
					const workspace: Workspace = {
						id: makeId(rel, "rust"),
						label: info.name,
						category: inferCategory(dir),
						description:
							info.description || `${info.name} Rust workspace at ${rel}`,
						path: rel,
						type: "rust",
					};
					workspaces.push(workspace);
					const doc = await generateDoc(workspace, dir, info, workspaces);
					await writeFile(join(docsDir, `${workspace.id}.md`), doc, "utf-8");
				}
			} else if (name === "package.json") {
				const text = await readFile(file, "utf-8");
				const info = parsePackageJson(text);
				if (info) {
					const workspace: Workspace = {
						id: makeId(rel, "npm"),
						label: info.name,
						category: inferCategory(dir),
						description:
							info.description || `${info.name} npm workspace at ${rel}`,
						path: rel,
						type: "npm",
					};
					workspaces.push(workspace);
					const doc = await generateDoc(workspace, dir, info, workspaces);
					await writeFile(join(docsDir, `${workspace.id}.md`), doc, "utf-8");
				}
			}
		}
	}

	const rootCargoText = await readFile(join(repoRoot, "Cargo.toml"), "utf-8");
	const rootInfo = await parseCargo(rootCargoText, ".");
	const rootCargoWorkspace: Workspace = {
		id: "root-cargo",
		label: rootInfo.name || "rust-packages",
		category: "Root",
		description:
			rootInfo.description || "Cargo workspace root for rust-packages",
		path: "Cargo.toml",
		type: "rust",
	};
	workspaces.unshift(rootCargoWorkspace);
	const rootCargoDoc = await generateDoc(
		rootCargoWorkspace,
		".",
		rootInfo,
		workspaces,
	);
	await writeFile(
		join(docsDir, `${rootCargoWorkspace.id}.md`),
		rootCargoDoc,
		"utf-8",
	);

	const rootPkg = parsePackageJson(
		await readFile(join(repoRoot, "package.json"), "utf-8"),
	);
	const rootPkgWorkspace: Workspace = {
		id: "root-package-json",
		label: rootPkg?.name ?? "@wrikka/rust-packages",
		category: "Root",
		description: rootPkg?.description ?? "npm workspace root for rust-packages",
		path: "package.json",
		type: "npm",
	};
	workspaces.unshift(rootPkgWorkspace);
	const rootPkgDoc = await generateDoc(
		rootPkgWorkspace,
		".",
		rootPkg ?? undefined,
		workspaces,
	);
	await writeFile(
		join(docsDir, `${rootPkgWorkspace.id}.md`),
		rootPkgDoc,
		"utf-8",
	);

	const output = `export interface Workspace {
  id: string;
  label: string;
  category: string;
  description: string;
  path: string;
  type: "rust" | "npm";
}

export const workspaces: Workspace[] = ${JSON.stringify(workspaces, null, 2)};

export const categories = Array.from(new Set(workspaces.map((w) => w.category))).sort();
`;
	await writeFile(outFile, output, "utf-8");
	console.log(`Generated ${outFile} with ${workspaces.length} workspaces`);

	const imports: string[] = [];
	const mapEntries: string[] = [];

	for (let i = 0; i < workspaces.length; i++) {
		const w = workspaces[i];
		const ident = `doc_${i}`;
		imports.push(
			`import ${safeIdentifier(ident)} from "../docs/${w.id}.md?raw";`,
		);
		mapEntries.push(`  "${w.id}": ${safeIdentifier(ident)},`);
	}

	const docsOutput = `${imports.join("\n")}

export const docs: Record<string, string> = {
${mapEntries.join("\n")}
};
`;
	await writeFile(docsOutFile, docsOutput, "utf-8");
	console.log(`Generated ${docsOutFile} with ${workspaces.length} docs`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
