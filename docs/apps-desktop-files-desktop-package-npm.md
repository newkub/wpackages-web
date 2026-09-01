# @wrikka/files-desktop

## Overview

Wrikka Desktop Explorer — custom-column, agent-driven file explorer

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Desktop Apps |
| Path | `apps/desktop/files-desktop/package.json` |
| Version | `0.1.0` |
| License | `MIT` |

## Directory Structure

- 📄 `index.html`
- 📄 `moon.yml`
- 📄 `package.json`
- 📁 `public`
- 📄 `public/tauri.svg`
- 📄 `public/vite.svg`
- 📄 `README.md`
- 📁 `src`
- 📄 `src/App.css`
- 📄 `src/App.tsx`
- 📁 `src/assets`
- 📁 `src/components`
- 📄 `src/index.tsx`
- 📁 `src/stores`
- 📄 `src/style.css`
- 📄 `src/types.ts`
- 📄 `src/uno.d.ts`
- 📁 `src/utils`
- 📄 `src/utils.ts`
- 📄 `src/vite-env.d.ts`
- 📁 `src-tauri`
- 📄 `src-tauri/build.rs`
- 📁 `src-tauri/capabilities`
- 📄 `src-tauri/Cargo.toml`
- 📁 `src-tauri/gen`
- 📁 `src-tauri/icons`
- 📁 `src-tauri/src`
- 📄 `src-tauri/tauri.conf.json`
- 📄 `tsconfig.json`
- 📄 `tsconfig.node.json`

## Source Files

- `src/App.tsx`
- `src/components/ActionBar.tsx`
- `src/components/ColumnEditor.tsx`
- `src/components/ContextMenu.tsx`
- `src/components/ErrorToast.tsx`
- `src/components/FileTable.tsx`
- `src/components/FileTableHeader.tsx`
- `src/components/FileTableRow.tsx`
- `src/components/GitHubPanel.tsx`
- `src/components/GitHubRepoView.tsx`
- `src/components/HomeView.tsx`
- `src/components/PinButton.tsx`
- `src/components/PreviewPane.tsx`
- `src/components/Settings.tsx`
- `src/components/Sidebar.tsx`
- `src/components/SidebarCloud.tsx`
- `src/components/SidebarDrives.tsx`
- `src/components/SidebarFilters.tsx`
- `src/components/StatusBar.tsx`
- `src/components/TabBar.tsx`
- `src/components/Toolbar.tsx`
- `src/index.tsx`
- `src/stores/ai.ts`
- `src/stores/context-menu.ts`
- `src/stores/explorer/columns.ts`
- `src/stores/explorer/file-ops.ts`
- `src/stores/explorer/index.ts`
- `src/stores/explorer/navigation.ts`
- `src/stores/explorer/preview.ts`
- `src/stores/explorer/search.ts`
- `src/stores/explorer/selection.ts`
- `src/stores/explorer/store.ts`
- `src/stores/github.ts`
- `src/stores/settings.ts`
- `src/stores/sidebar.ts`
- `src/stores/tabs.ts`
- `src/stores/theme.ts`
- `src/types.ts`
- `src/uno.d.ts`
- `src/utils/cloud.ts`

## Quick Start

### Install

```bash
bun install
```

### Build

```bash
bun run build
```

### Develop

```bash
bun run dev
```

### Lint

```bash
bun run lint
```

## Scripts

| Script | Command |
| --- | --- |
| start | `vite` |
| dev | `vite` |
| build | `vite build` |
| serve | `vite preview` |
| tauri | `tauri` |
| typecheck | `tsc --noEmit` |
| lint | `oxlint .` |
| format | `biome format .` |

## Dependencies

| Name | Version |
| --- | --- |
| @iconify-json/mdi | `^1.2.3` |
| @tanstack/solid-virtual | `^3.13.37` |
| @tauri-apps/api | `^2.11.1` |
| @tauri-apps/plugin-dialog | `^2.7.3` |
| @tauri-apps/plugin-opener | `^2.5.5` |
| @tauri-apps/plugin-store | `^2.4.4` |
| @unocss/preset-icons | `66.6.8` |
| @unocss/preset-wind | `^0.65.4` |
| @unocss/transformer-directives | `66.6.8` |
| @unocss/vite | `66.6.8` |
| dompurify | `^3.4.14` |
| highlight.js | `^11.12.0` |
| marked | `^18.0.11` |
| solid-js | `^1.9.15` |
| unocss | `66.6.8` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @tauri-apps/cli | `^2.11.4` |
| @types/dompurify | `^3.2.0` |
| @unocss/preset-wind4 | `66.6.8` |
| @unocss/transformer-variant-group | `66.6.8` |
| oxlint | `^1.80.0` |
| typescript | `~5.6.3` |
| vite | `^6.4.3` |
| vite-plugin-solid | `^2.11.14` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# Wrikka Desktop Explorer

Custom-column, agent-driven file explorer — Tauri v2 + SolidJS with mtime-based directory caching and Ollama AI integration.

![Tauri](https://img.shields.io/badge/Tauri-v2-1976d2)
![SolidJS](https://img.shields.io/badge/SolidJS-1.9-0097a7)
![UnoCSS](https://img.shields.io/badge/UnoCSS-66-00796b)

```text
┌──────────────────────────────────────────────────────────┐
│  Wrikka Desktop Explorer                          1400x900│
├────────┬─────────────────────────────────────────────────┤
│Sidebar │  Name          Size    Modified   AI Column      │
│        │  ─────────────────────────────────────────────── │
│ 📁 Home│  Documents     4 KB    2h ago     "Project docs" │
│ 📁 Docs│  Downloads   128 MB    5h ago     "Installer"    │
│ 📁 Code│  Pictures    2.1 GB    1d ago     "Screenshots"  │
│ 📁 Musi│  Videos      5.4 GB    3d ago     "Tutorials"    │
│        │                                                 │
│        │  ┌─────────────────────────────────────────────┐ │
│        │  │  Preview: Documents/README.md              │ │
│        │  │  # Project Title                            │ │
│        │  │  Some preview text here ...                 │ │
│        │  └─────────────────────────────────────────────┘ │
├────────┴─────────────────────────────────────────────────┤
│  4 items  │  Sort: Name  │  View: Details  │  Agent: Ready │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install Dependencies — `bun install` for frontend
   ```bash
   bun install
   ```
2. Run Dev Mode — `bunx tauri dev` for full app
   ```bash
   bunx tauri dev
   ```
3. Build For Distribution — `bunx tauri build`
   ```bash
   bun run build
   bunx tauri build
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:folder-open.svg?color=%231976d2&width=16) | File Explorer | Browse directories with custom columns and mtime caching |
| ![icon](https://api.iconify.design/mdi:robot.svg?color=%230097a7&width=16) | AI Agent Columns | Ollama-powered agent columns for file metadata and insights |
| ![icon](https://api.iconify.design/mdi:file-eye.svg?color=%23f57c00&width=16) | File Preview | Inline preview for text, markdown, images, and code files |
| ![icon](https://api.iconify.design/mdi:git.svg?color=%237b1fa2&width=16) | Git Status | Repository status display and GitHub repo listing |
| ![icon](https://api.iconify.design/mdi:magnify.svg?color=%23c2185b&width=16) | Semantic Search | AI-powered semantic file search across directories |
| ![icon](https://api.iconify.design/mdi:file-multiple.svg?color=%23388e3c&width=16) | File Operations | Copy, move, rename, delete, and trash with Tauri dialogs |
| ![icon](https://api.iconify.design/mdi:console.svg?color=%2300796b&width=16) | Open Terminal | Launch terminal directly from the explorer |
| ![icon](https://api.iconify.design/mdi:harddisk.svg?color=%23ffa000&width=16) | Drive Listing | List available drives and system information |

## Usage

### Usage via Desktop

Open the Wrikka Desktop Explorer app. Use the sidebar to navigate directories. Click any file to see a preview in the bottom pane. Right-click files for operations (copy, move, rename, delete).

```text
┌──────────────────────────────────────────────────────────┐
│  Wrikka Desktop Explorer                          1400x900│
├────────┬─────────────────────────────────────────────────┤
│Sidebar │  Name          Size    Modified   AI Column      │
│        │  ─────────────────────────────────────────────── │
│ 📁 Home│  Documents     4 KB    2h ago     "Project docs" │
│ 📁 Docs│  Downloads   128 MB    5h ago     "Installer"    │
│ 📁 Code│  Pictures    2.1 GB    1d ago     "Screenshots"  │
│        │                                                 │
│        │  ┌─────────────────────────────────────────────┐ │
│        │  │  Preview: Documents/README.md              │ │
│        │  │  # Project Title                            │ │
│        │  │  Some preview text here ...                 │ │
│        │  └─────────────────────────────────────────────┘ │
├────────┴─────────────────────────────────────────────────┤
│  4 items  │  Sort: Name  │  View: Details  │  Agent: Ready │
└──────────────────────────────────────────────────────────┘
```

### Usage via CLI

```bash
# Development mode
bunx tauri dev

# Build for distribution
bunx tauri build

# Frontend only
bun run dev
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `bunx tauri dev` | Run app in development | — | `localhost:1422` |
| `bunx tauri build` | Build for distribution | `--target`, `--debug` | all targets |
| `bun run dev` | Run frontend only | — | `localhost:1422` |
| `bun run build` | Build frontend | — | `dist/` |
