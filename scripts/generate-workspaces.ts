import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { basename, dirname, join, relative } from "node:path";

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
	license?: string;
	repository?: string;
	homepage?: string;
	authors?: string[];
	keywords?: string[];
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
	scripts?: Record<string, string>;
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
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

		// Simple key = "value" or key = { version = "..." }
		const simple = trimmed.match(/^([a-zA-Z0-9_-]+)\s*=\s*"([^"]+)"/);
		if (simple) {
			result[simple[1]] = simple[2];
			continue;
		}

		// key = { version = "...", ... }
		const table = trimmed.match(/^([a-zA-Z0-9_-]+)\s*=\s*\{([^}]+)\}/);
		if (table) {
			const inner = table[2];
			const versionMatch = inner.match(/version\s*=\s*"([^"]+)"/);
			if (versionMatch) {
				result[table[1]] = versionMatch[1];
			} else {
				result[table[1]] = "{ ... }";
			}
			continue;
		}

		// workspace = true style (no value needed)
		const flag = trimmed.match(/^([a-zA-Z0-9_-]+)\s*=\s*true/);
		if (flag) {
			result[flag[1]] = "true";
		}
	}
	return result;
}

function parseCargo(text: string): CargoInfo {
	const name = extractCargoValue(text, "name") ?? "";
	const description = extractCargoValue(text, "description") ?? "";
	const version = extractCargoValue(text, "version");
	const edition = extractCargoValue(text, "edition");
	const license = extractCargoValue(text, "license");
	const repository = extractCargoValue(text, "repository");
	const homepage = extractCargoValue(text, "homepage");
	const authors = extractCargoList(text, "authors");
	const keywords = extractCargoList(text, "keywords");

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

	return {
		name,
		description,
		version,
		edition,
		license,
		repository,
		homepage,
		authors,
		keywords,
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
			scripts: json.scripts,
			dependencies: json.dependencies,
			devDependencies: json.devDependencies,
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

async function generateDoc(
	workspace: Workspace,
	workspaceDir: string,
	info?: CargoInfo | NpmInfo,
): Promise<string> {
	const lines: string[] = [];
	lines.push(`# ${workspace.label}`);
	lines.push("");

	const metadataRows: string[][] = [
		["Type", workspace.type.toUpperCase()],
		["Category", workspace.category],
		["Path", `\`${workspace.path}\``],
	];

	const commandRows: string[][] = [];

	if (isCargoInfo(info)) {
		const cargo = info;
		if (cargo.version) metadataRows.push(["Version", `\`${cargo.version}\``]);
		if (cargo.edition) metadataRows.push(["Edition", `\`${cargo.edition}\``]);
		if (cargo.license) metadataRows.push(["License", `\`${cargo.license}\``]);
		if (cargo.repository)
			metadataRows.push(["Repository", `<${cargo.repository}>`]);
		if (cargo.homepage) metadataRows.push(["Homepage", `<${cargo.homepage}>`]);
		if (cargo.authors?.length)
			metadataRows.push(["Authors", cargo.authors.join(", ")]);
		if (cargo.keywords?.length)
			metadataRows.push(["Keywords", cargo.keywords.join(", ")]);

		const isRoot = workspaceDir === ".";
		commandRows.push([
			"Build",
			`\`\`\`bash\ncargo build${isRoot ? "" : ` -p ${cargo.name}`}\n\`\`\``,
		]);
		commandRows.push([
			"Test",
			`\`\`\`bash\ncargo test${isRoot ? "" : ` -p ${cargo.name}`}\n\`\`\``,
		]);
		if (!isRoot) {
			commandRows.push([
				"Run",
				`\`\`\`bash\ncargo run -p ${cargo.name}\n\`\`\``,
			]);
		}
	} else if (isNpmInfo(info)) {
		const npm = info;
		if (npm.version) metadataRows.push(["Version", `\`${npm.version}\``]);
		if (npm.license) metadataRows.push(["License", `\`${npm.license}\``]);
		const repoUrl = normalizeRepoUrl(npm.repository);
		if (repoUrl) metadataRows.push(["Repository", `<${repoUrl}>`]);
		if (npm.homepage) metadataRows.push(["Homepage", `<${npm.homepage}>`]);
		if (npm.keywords?.length)
			metadataRows.push(["Keywords", npm.keywords.join(", ")]);

		commandRows.push(["Install", `\`\`\`bash\nbun install\n\`\`\``]);
		if (npm.scripts) {
			if (npm.scripts.build)
				commandRows.push(["Build", `\`\`\`bash\nbun run build\n\`\`\``]);
			if (npm.scripts.dev)
				commandRows.push(["Develop", `\`\`\`bash\nbun run dev\n\`\`\``]);
			if (npm.scripts.test)
				commandRows.push(["Test", `\`\`\`bash\nbun run test\n\`\`\``]);
		}
	}

	lines.push("## Metadata");
	lines.push("");
	lines.push(table(["Field", "Value"], metadataRows));
	lines.push("");

	lines.push("## Description");
	lines.push("");
	lines.push(workspace.description || "No description available.");
	lines.push("");

	if (commandRows.length > 0) {
		lines.push("## Quick Start");
		lines.push("");
		for (const [label, cmd] of commandRows) {
			lines.push(`### ${label}`);
			lines.push("");
			lines.push(cmd);
			lines.push("");
		}
	}

	if (isNpmInfo(info) && info.scripts) {
		const npm = info;
		const scripts = Object.entries(npm.scripts ?? {});
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

	const deps: [string, string][] = [];
	if (isNpmInfo(info) && info.dependencies) {
		for (const [k, v] of Object.entries(info.dependencies)) {
			deps.push([k, v]);
		}
	}
	if (isCargoInfo(info)) {
		for (const d of info.dependencies) {
			deps.push([d.name, d.workspace ? "workspace" : (d.version ?? "*")]);
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
			devDeps.push([d.name, d.workspace ? "workspace" : (d.version ?? "*")]);
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

	return lines.join("\n");
}

async function main() {
	const workspaces: Workspace[] = [];

	// Ensure docs dir exists
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
				const info = parseCargo(text);
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
					const doc = await generateDoc(workspace, dir, info);
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
					const doc = await generateDoc(workspace, dir, info);
					await writeFile(join(docsDir, `${workspace.id}.md`), doc, "utf-8");
				}
			}
		}
	}

	// Root Cargo
	const rootCargoText = await readFile(join(repoRoot, "Cargo.toml"), "utf-8");
	const rootInfo = parseCargo(rootCargoText);
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
	const rootCargoDoc = await generateDoc(rootCargoWorkspace, ".", rootInfo);
	await writeFile(
		join(docsDir, `${rootCargoWorkspace.id}.md`),
		rootCargoDoc,
		"utf-8",
	);

	// Root package.json
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

	// Generate docs.ts
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
