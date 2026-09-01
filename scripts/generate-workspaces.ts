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

function cargoNameAndDesc(text: string): { name: string; description: string } {
	const nameMatch = text.match(/^\s*name\s*=\s*"([^"]+)"/m);
	const descMatch = text.match(/^\s*description\s*=\s*"([^"]+)"/m);
	return {
		name: nameMatch?.[1] ?? "",
		description: descMatch?.[1] ?? "",
	};
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
): Promise<string> {
	const lines: string[] = [];
	lines.push(`# ${workspace.label}`);
	lines.push("");
	lines.push(`- **Type:** ${workspace.type.toUpperCase()}`);
	lines.push(`- **Category:** ${workspace.category}`);
	lines.push(`- **Path:** \`${workspace.path}\``);
	lines.push("");

	const readme = await tryReadReadme(join(repoRoot, workspaceDir, "README.md"));

	lines.push("## Description");
	lines.push("");
	lines.push(workspace.description || "No description available.");
	lines.push("");

	if (readme?.trim()) {
		lines.push("## README");
		lines.push("");
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
				const info = cargoNameAndDesc(text);
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
					const doc = await generateDoc(workspace, dir);
					await writeFile(join(docsDir, `${workspace.id}.md`), doc, "utf-8");
				}
			} else if (name === "package.json") {
				const text = await readFile(file, "utf-8");
				try {
					const json = JSON.parse(text);
					if (json.name) {
						const workspace: Workspace = {
							id: makeId(rel, "npm"),
							label: json.name,
							category: inferCategory(dir),
							description:
								json.description || `${json.name} npm workspace at ${rel}`,
							path: rel,
							type: "npm",
						};
						workspaces.push(workspace);
						const doc = await generateDoc(workspace, dir);
						await writeFile(join(docsDir, `${workspace.id}.md`), doc, "utf-8");
					}
				} catch {
					// ignore malformed
				}
			}
		}
	}

	// Root Cargo
	const rootCargo = await readFile(join(repoRoot, "Cargo.toml"), "utf-8");
	const rootInfo = cargoNameAndDesc(rootCargo);
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
	const rootCargoDoc = await generateDoc(rootCargoWorkspace, ".");
	await writeFile(
		join(docsDir, `${rootCargoWorkspace.id}.md`),
		rootCargoDoc,
		"utf-8",
	);

	// Root package.json
	const rootPkg = JSON.parse(
		await readFile(join(repoRoot, "package.json"), "utf-8"),
	);
	const rootPkgWorkspace: Workspace = {
		id: "root-package-json",
		label: rootPkg.name,
		category: "Root",
		description: rootPkg.description || "npm workspace root for rust-packages",
		path: "package.json",
		type: "npm",
	};
	workspaces.unshift(rootPkgWorkspace);
	const rootPkgDoc = await generateDoc(rootPkgWorkspace, ".");
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
