# terminal-tui

## Overview

Terminal emulator TUI app with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/terminal-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/newkub/terminal-tui> |
| Homepage | <https://github.com/newkub/terminal-tui> |
| Authors | Wrikka Team |
| Keywords | tui, terminal, emulator, cli |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `moon.yml`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📄 `src/main.rs`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`

## Source Files

- `src/adapters/mod.rs`
- `src/adapters/pty.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/modules/mod.rs`
- `src/modules/terminal/application/mod.rs`
- `src/modules/terminal/application/usecase.rs`
- `src/modules/terminal/domain/mod.rs`
- `src/modules/terminal/domain/models/command.rs`
- `src/modules/terminal/domain/models/mod.rs`
- `src/modules/terminal/domain/operations/command.rs`
- `src/modules/terminal/domain/operations/mod.rs`
- `src/modules/terminal/mod.rs`
- `src/presentation/mod.rs`
- `src/presentation/tui/app.rs`
- `src/presentation/tui/mod.rs`
- `src/shared/kernel/errors.rs`
- `src/shared/kernel/mod.rs`
- `src/shared/kernel/types.rs`
- `src/shared/mod.rs`

## Binaries

- `terminal-tui`

## Quick Start

### Build

```bash
cargo build -p terminal-tui
```

### Test

```bash
cargo test -p terminal-tui
```

### Run

```bash
cargo run -p terminal-tui
```

### Lint

```bash
cargo clippy -p terminal-tui
```

### Documentation

```bash
cargo doc -p terminal-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/newkub/terminal-tui>
- Homepage: <https://github.com/newkub/terminal-tui>
- Source: <https://github.com/newkub/terminal-tui/blob/main/apps/tui/terminal-tui/Cargo.toml>
