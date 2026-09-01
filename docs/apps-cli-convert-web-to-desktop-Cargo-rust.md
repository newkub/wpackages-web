# wrikka-convert-web-to-desktop

## Overview

CLI tool to convert web applications to desktop using Tauri + WebView

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | CLI Apps |
| Path | `apps/cli/convert-web-to-desktop/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |
| Authors | Veerapong <veerapong@example.com> |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `docs`
- 📄 `docs/architecture-diagram.md`
- 📄 `docs/cli.md`
- 📄 `docs/comparison.md`
- 📄 `docs/features.md`
- 📁 `examples`
- 📄 `examples/README.md`
- 📄 `examples/test-google.ps1`
- 📄 `examples/test-google.sh`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/application`
- 📄 `src/container.rs`
- 📁 `src/domain`
- 📄 `src/handlers.rs`
- 📁 `src/infrastructure`
- 📁 `src/interactive`
- 📄 `src/lib.rs`
- 📄 `src/main.rs`

## Source Files

- `src/adapters/controllers/cli.rs`
- `src/adapters/controllers/mod.rs`
- `src/adapters/mod.rs`
- `src/application/mod.rs`
- `src/application/ports/mod.rs`
- `src/application/ports/repositories.rs`
- `src/application/ports/services.rs`
- `src/application/types/commands.rs`
- `src/application/types/mod.rs`
- `src/application/use_cases/mod.rs`
- `src/container.rs`
- `src/domain/constants/defaults.rs`
- `src/domain/constants/limits.rs`
- `src/domain/constants/mod.rs`
- `src/domain/events/build_events.rs`
- `src/domain/events/mod.rs`
- `src/domain/events/project_events.rs`
- `src/domain/functions/bundle_id_generator.rs`
- `src/domain/functions/config_helpers.rs`
- `src/domain/functions/mod.rs`
- `src/domain/functions/url_validation.rs`
- `src/domain/mod.rs`
- `src/domain/services/mod.rs`
- `src/domain/types/entities.rs`
- `src/domain/types/mod.rs`
- `src/domain/value_objects/bundle_identifier.rs`
- `src/domain/value_objects/mod.rs`
- `src/domain/value_objects/security_policy.rs`
- `src/domain/value_objects/window_dimensions.rs`
- `src/handlers.rs`
- `src/infrastructure/file_system/file_repository.rs`
- `src/infrastructure/file_system/memory_repository.rs`
- `src/infrastructure/file_system/mod.rs`
- `src/infrastructure/icon/mod.rs`
- `src/infrastructure/mod.rs`
- `src/infrastructure/tauri/mod.rs`
- `src/infrastructure/tauri/webview_service/mod.rs`
- `src/infrastructure/tauri/webview_service/service.rs`
- `src/infrastructure/tauri/webview_service/tests.rs`
- `src/infrastructure/tauri/webview_service/types.rs`

## Binaries

- `wrikka-convert-web-to-desktop`
- `wrikka-convert-web`

## Quick Start

### Build

```bash
cargo build -p wrikka-convert-web-to-desktop
```

### Test

```bash
cargo test -p wrikka-convert-web-to-desktop
```

### Run

```bash
cargo run -p wrikka-convert-web-to-desktop --bin wrikka-convert-web-to-desktop
```
```bash
cargo run -p wrikka-convert-web-to-desktop --bin wrikka-convert-web
```

### Lint

```bash
cargo clippy -p wrikka-convert-web-to-desktop
```

### Documentation

```bash
cargo doc -p wrikka-convert-web-to-desktop --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-convert-web-to-desktop

CLI tool to convert web applications to desktop using Tauri + WebView — one-command packaging with frameless, transparent, and cross-platform support.

![Rust](https://img.shields.io/badge/Rust-edition_2021-1976d2)
![Tauri](https://img.shields.io/badge/Tauri-1.0-0097a7)
![Handlebars](https://img.shields.io/badge/Handlebars-4.5-00796b)

```text
┌──────────────────────────────────────────────────────────┐
│  wrikka-convert-web                                      │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  CLI (clap)  ·  Interactive Mode  ·  Library API   │  │
│  └───────────────────────┬────────────────────────────┘  │
│                          ▼                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Create   │  │ List     │  │ Build    │  │ Run      │  │
│  │ Project  │  │ Projects │  │ Desktop  │  │ Dev Mode │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                          ▼                                │
│          ┌──────────────────────────────┐                 │
│          │  Tauri + WebView (wry)       │                 │
│          │  Handlebars Templates        │                 │
│          │  Favicon Auto-Download       │                 │
│          └──────────────────────────────┘                 │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Build — `cargo build` the CLI
   ```bash
   cargo build --release
   ```
2. Create A Project — specify name and URL
   ```bash
   wrikka-convert-web create --name "My App" --url "https://example.com"
   ```
3. Build Desktop App — package for target platform
   ```bash
   wrikka-convert-web build --id "<project-id>" --output ./dist
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:rocket.svg?color=%231976d2&width=16) | One-Command Packaging | Turn any webpage into a desktop app with a single command |
| ![icon](https://api.iconify.design/mdi:download.svg?color=%230097a7&width=16) | Auto Favicon Download | Automatically download favicon from website for app icons |
| ![icon](https://api.iconify.design/mdi:window-maximize.svg?color=%23f57c00&width=16) | Frameless Window | Support windows without title bar for modern UI design |
| ![icon](https://api.iconify.design/mdi:window-shutter.svg?color=%237b1fa2&width=16) | Transparent Window | Support transparent windows for custom styling |
| ![icon](https://api.iconify.design/mdi:human.svg?color=%23c2185b&width=16) | Interactive Mode | Guided project setup for users unfamiliar with CLI |
| ![icon](https://api.iconify.design/mdi:folder-multiple.svg?color=%23388e3c&width=16) | Project Management | Create, list, get, update, and delete web projects |
| ![icon](https://api.iconify.design/mdi:hammer.svg?color=%2300796b&width=16) | Build & Run | Build desktop apps and run in development mode |
| ![icon](https://api.iconify.design/mdi:monitor-multiple.svg?color=%23ffa000&width=16) | Cross-Platform | Support Windows, macOS, and Linux targets |

## Usage

### Usage via CLI

```bash
# Create a new project
wrikka-convert-web create --name "My App" --url "https://example.com"

# List all projects
wrikka-convert-web list

# Build desktop app
wrikka-convert-web build --id "<project-id>" --platform all

# Run in development mode
wrikka-convert-web run --id "<project-id>" --devtools

# Interactive mode
wrikka-convert-web interactive
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ wrikka-convert-web create --name "ChatGPT" \          │
│      --url "https://chat.openai.com" --width 1200        │
│  Project created: ChatGPT (id: a1b2c3d4-...)             │
│  URL: https://chat.openai.com  Size: 1200x800            │
│                                                          │
│  $ wrikka-convert-web build --id a1b2c3d4 --platform all │
│  Building for: windows, macos, linux                     │
│  Output: ./dist                                          │
│  Build completed!                                        │
│                                                          │
│  $ wrikka-convert-web run --id a1b2c3d4 --devtools       │
│  Opening desktop app in dev mode ...                     │
│  DevTools: enabled                                       │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `create` | Create a new web project | `name`, `url`, `title`, `width`, `height`, `frameless`, `transparent` | `1200x800` |
| `list` | List all projects | `limit`, `offset`, `name` | `limit=10` |
| `build` | Build desktop application | `id`, `output`, `platform`, `bundle_id`, `version`, `icon` | `all`, `1.0.0` |
| `run` | Run in development mode | `id`, `devtools` | — |
| `interactive` | Guided project setup | — | — |

## Links

- Repository: <https://github.com/wrikka/wpackages>
- Source: <https://github.com/wrikka/wpackages/blob/main/apps/cli/convert-web-to-desktop/Cargo.toml>
