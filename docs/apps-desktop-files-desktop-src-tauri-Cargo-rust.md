# wrikka-files-desktop

## Overview

Wrikka Desktop Explorer — custom-column, agent-driven file explorer

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Desktop Apps |
| Path | `apps/desktop/files-desktop/src-tauri/Cargo.toml` |

## Directory Structure

- 📄 `build.rs`
- 📁 `capabilities`
- 📄 `capabilities/default.json`
- 📄 `Cargo.toml`
- 📁 `gen`
- 📁 `gen/schemas`
- 📁 `icons`
- 📄 `icons/128x128.png`
- 📄 `icons/128x128@2x.png`
- 📄 `icons/32x32.png`
- 📄 `icons/icon.icns`
- 📄 `icons/icon.ico`
- 📄 `icons/icon.png`
- 📄 `icons/Square107x107Logo.png`
- 📄 `icons/Square142x142Logo.png`
- 📄 `icons/Square150x150Logo.png`
- 📄 `icons/Square284x284Logo.png`
- 📄 `icons/Square30x30Logo.png`
- 📄 `icons/Square310x310Logo.png`
- 📄 `icons/Square44x44Logo.png`
- 📄 `icons/Square71x71Logo.png`
- 📄 `icons/Square89x89Logo.png`
- 📄 `icons/StoreLogo.png`
- 📁 `src`
- 📁 `src/commands`
- 📄 `src/lib.rs`
- 📄 `src/main.rs`
- 📄 `src/models.rs`
- 📁 `src/services`
- 📄 `tauri.conf.json`

## Source Files

- `src/commands/ai.rs`
- `src/commands/common.rs`
- `src/commands/file.rs`
- `src/commands/git.rs`
- `src/commands/github.rs`
- `src/commands/mod.rs`
- `src/commands/system.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/models.rs`
- `src/services/agent.rs`
- `src/services/cache.rs`
- `src/services/columns.rs`
- `src/services/file.rs`
- `src/services/git.rs`
- `src/services/mapping.rs`
- `src/services/mod.rs`
- `src/services/state.rs`

## Binaries

- `wrikka-files-desktop`

## Quick Start

### Build

```bash
cargo build -p wrikka-files-desktop
```

### Test

```bash
cargo test -p wrikka-files-desktop
```

### Run

```bash
cargo run -p wrikka-files-desktop
```

### Lint

```bash
cargo clippy -p wrikka-files-desktop
```

### Documentation

```bash
cargo doc -p wrikka-files-desktop --no-deps
```

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.
