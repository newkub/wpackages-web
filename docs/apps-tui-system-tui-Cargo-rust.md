# system-tui

## Overview

System monitor TUI app with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/system-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/newkub/system-tui> |
| Homepage | <https://github.com/newkub/system-tui> |
| Authors | Wrikka Team |
| Keywords | tui, system, monitor, metrics |

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
- `src/adapters/sysinfo_adapter.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/modules/mod.rs`
- `src/modules/system/application/mod.rs`
- `src/modules/system/application/usecase.rs`
- `src/modules/system/domain/mod.rs`
- `src/modules/system/domain/models/metric.rs`
- `src/modules/system/domain/models/mod.rs`
- `src/modules/system/domain/operations/metric.rs`
- `src/modules/system/domain/operations/mod.rs`
- `src/modules/system/mod.rs`
- `src/presentation/mod.rs`
- `src/presentation/tui/app.rs`
- `src/presentation/tui/mod.rs`
- `src/shared/kernel/errors.rs`
- `src/shared/kernel/mod.rs`
- `src/shared/kernel/types.rs`
- `src/shared/mod.rs`

## Binaries

- `system-tui`

## Quick Start

### Build

```bash
cargo build -p system-tui
```

### Test

```bash
cargo test -p system-tui
```

### Run

```bash
cargo run -p system-tui
```

### Lint

```bash
cargo clippy -p system-tui
```

### Documentation

```bash
cargo doc -p system-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/newkub/system-tui>
- Homepage: <https://github.com/newkub/system-tui>
- Source: <https://github.com/newkub/system-tui/blob/main/apps/tui/system-tui/Cargo.toml>
