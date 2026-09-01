# @wrikka/files-desktop

- **Type:** NPM
- **Category:** Desktop Apps
- **Path:** `apps/desktop/files-desktop/package.json`

## Description

Wrikka Desktop Explorer — custom-column, agent-driven file explorer

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
