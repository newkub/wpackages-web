# wrikka-terminal

## Overview

Wrikka Terminal - GUI Terminal Emulator with GPU-accelerated Rendering

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Desktop Apps |
| Path | `apps/desktop/terminal-desktop/src-tauri/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Authors | Wrikka Team |

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
- 📄 `icons/icon.ico`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/application`
- 📁 `src/bin`
- 📁 `src/domain`
- 📄 `src/lib.rs`
- 📄 `src/main.rs`
- 📁 `src/presentation`
- 📄 `tauri.conf.json`
- 📄 `tauri.windows.conf.json`

## Source Files

- `src/adapters/mod.rs`
- `src/adapters/plugin/mod.rs`
- `src/adapters/pty_terminal.rs`
- `src/application/mod.rs`
- `src/application/plugin.rs`
- `src/bin/tui.rs`
- `src/domain/mod.rs`
- `src/domain/plugin.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/presentation/cli/commands.rs`
- `src/presentation/cli/handlers.rs`
- `src/presentation/cli/mod.rs`
- `src/presentation/di.rs`
- `src/presentation/mod.rs`
- `src/presentation/tui/gpu/ansi/mod.rs`
- `src/presentation/tui/gpu/ansi/parser.rs`
- `src/presentation/tui/gpu/ansi/tests.rs`
- `src/presentation/tui/gpu/ansi/types.rs`
- `src/presentation/tui/gpu/features.rs`
- `src/presentation/tui/gpu/grid/layout.rs`
- `src/presentation/tui/gpu/grid/mod.rs`
- `src/presentation/tui/gpu/grid/tests.rs`
- `src/presentation/tui/gpu/grid/types.rs`
- `src/presentation/tui/gpu/mod.rs`
- `src/presentation/tui/gpu/performance/metrics.rs`
- `src/presentation/tui/gpu/performance/mod.rs`
- `src/presentation/tui/gpu/performance/tests.rs`
- `src/presentation/tui/gpu/performance/types.rs`
- `src/presentation/tui/gpu/pipeline/mod.rs`
- `src/presentation/tui/gpu/pipeline/render.rs`
- `src/presentation/tui/gpu/pipeline/tests.rs`
- `src/presentation/tui/gpu/pipeline/types.rs`
- `src/presentation/tui/gpu/renderer/impl_renderer.rs`
- `src/presentation/tui/gpu/renderer/mod.rs`
- `src/presentation/tui/gpu/renderer/tests.rs`
- `src/presentation/tui/gpu/renderer/types.rs`
- `src/presentation/tui/gpu/settings/defaults.rs`
- `src/presentation/tui/gpu/settings/loader.rs`
- `src/presentation/tui/gpu/settings/mod.rs`

## Binaries

- `wrikka-terminal`
- `tui`
- `wrikka-terminal-tui`

## Quick Start

### Build

```bash
cargo build -p wrikka-terminal
```

### Test

```bash
cargo test -p wrikka-terminal
```

### Run

```bash
cargo run -p wrikka-terminal --bin wrikka-terminal
```
```bash
cargo run -p wrikka-terminal --bin tui
```
```bash
cargo run -p wrikka-terminal --bin wrikka-terminal-tui
```

### Lint

```bash
cargo clippy -p wrikka-terminal
```

### Documentation

```bash
cargo doc -p wrikka-terminal --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.
