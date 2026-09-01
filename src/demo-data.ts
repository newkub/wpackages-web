export const commands = [
	{ id: "open", label: "Open file" },
	{ id: "save", label: "Save all" },
	{ id: "quit", label: "Quit" },
	{ id: "toggle", label: "Toggle sidebar" },
];

export const fuzzyItems = [
	{ id: "1", label: "src/components/App.tsx" },
	{ id: "2", label: "src/components/Panel.tsx" },
	{ id: "3", label: "src/theme.css" },
	{ id: "4", label: "package.json" },
];

export const autocompleteOptions = [
	{ label: "append", value: "append", kind: "fn" },
	{ label: "capacity", value: "capacity", kind: "prop" },
	{ label: "clear", value: "clear", kind: "fn" },
	{ label: "len", value: "len", kind: "prop" },
];

export const fileTree = [
	{
		name: "src",
		type: "dir" as const,
		children: [
			{ name: "App.tsx", type: "file" as const },
			{ name: "theme.css", type: "file" as const },
			{
				name: "components",
				type: "dir" as const,
				children: [
					{ name: "Panel.tsx", type: "file" as const },
					{ name: "List.tsx", type: "file" as const },
				],
			},
		],
	},
	{ name: "package.json", type: "file" as const },
];

export const fileList = [
	{
		name: "Cargo.toml",
		type: "file" as const,
		size: "1.2 KB",
		modified: "2026-08-30",
		permissions: "rw-r--r--",
		gitStatus: "M" as const,
	},
	{
		name: "src",
		type: "dir" as const,
		size: "—",
		modified: "2026-08-31",
		permissions: "rwxr-xr-x",
		gitStatus: "A" as const,
	},
	{
		name: "README.md",
		type: "file" as const,
		size: "4.5 KB",
		modified: "2026-08-29",
		permissions: "rw-r--r--",
		gitStatus: "U" as const,
	},
];

export const sampleDiff = `diff --git a/src/App.tsx b/src/App.tsx
index 1a2b3c4..5d6e7f8 100644
--- a/src/App.tsx
+++ b/src/App.tsx
@@ -10,6 +10,9 @@
 import { Panel } from "./components/Panel";
 import { Text } from "./components/Text";
+import { CommandPalette } from "./components/CommandPalette";
+
 function App() {
   const [active, setActive] = createSignal("panel");
+  const [open, setOpen] = createSignal(false);
   return (`;

export const sampleMarkdown = `# ratatui-ui

A **SolidJS** design system for _terminal-style_ web apps.

## Features

- Keyboard-driven widgets
- Dark theme with CSS variables
- *Accessible* by default

1. Install
2. Import
3. Build`;

export const sampleTerminal = `[\x1b[32mok\x1b[0m] loaded theme.css
[\x1b[33mwarn\x1b[0m] build is out of date
[\x1b[1;34minfo\x1b[0m] running vite\n\x1b[38;5;208mdev server\x1b[0m ready at \x1b[4mhttp://localhost:5173\x1b[0m\n\x1b[2;3mcompleted in 120ms\x1b[0m`;

export const sampleCode = `function App() {\n  const [active, setActive] = createSignal("panel");\n  return <div class="rt-app">...</div>;\n}`;

export const helpBindings = [
	{ key: "j / ↓", desc: "Move down" },
	{ key: "k / ↑", desc: "Move up" },
	{ key: "Enter", desc: "Select" },
	{ key: "Esc", desc: "Close" },
	{ key: "?", desc: "Help" },
];
