import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { basename, dirname, join, relative } from "node:path";

const repoRoot = "../../..";
const scanRoots = ["apps", "packages"];
const outFile = "src/workspaces.ts";

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

async function main() {
	const workspaces: Workspace[] = [];
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
					workspaces.push({
						id: makeId(rel, "rust"),
						label: info.name,
						category: inferCategory(dir),
						description:
							info.description || `${info.name} Rust workspace at ${rel}`,
						path: rel,
						type: "rust",
					});
				}
			} else if (name === "package.json") {
				const text = await readFile(file, "utf-8");
				try {
					const json = JSON.parse(text);
					if (json.name) {
						workspaces.push({
							id: makeId(rel, "npm"),
							label: json.name,
							category: inferCategory(dir),
							description:
								json.description || `${json.name} npm workspace at ${rel}`,
							path: rel,
							type: "npm",
						});
					}
				} catch {
					// ignore malformed
				}
			}
		}
	}

	// Add root manifests
	const rootCargo = await readFile(join(repoRoot, "Cargo.toml"), "utf-8");
	const rootInfo = cargoNameAndDesc(rootCargo);
	workspaces.unshift({
		id: "root-cargo",
		label: rootInfo.name || "rust-packages",
		category: "Root",
		description:
			rootInfo.description || "Cargo workspace root for rust-packages",
		path: "Cargo.toml",
		type: "rust",
	});

	const rootPkg = JSON.parse(
		await readFile(join(repoRoot, "package.json"), "utf-8"),
	);
	workspaces.unshift({
		id: "root-package-json",
		label: rootPkg.name,
		category: "Root",
		description: rootPkg.description || "npm workspace root for rust-packages",
		path: "package.json",
		type: "npm",
	});

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
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
