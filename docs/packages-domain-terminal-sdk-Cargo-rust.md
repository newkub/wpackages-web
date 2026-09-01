# wrikka-terminal-sdk

## Overview

Shared terminal SDK - core domain logic, ports, and adapters for terminal applications

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Domain |
| Path | `packages/domain/terminal-sdk/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |
| Homepage | <https://github.com/wrikka/wpackages> |
| Authors | Wrikka Team |
| Keywords | terminal, sdk, pty, tui, cross-platform |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📁 `src/modules`
- 📄 `src/pty.rs`
- 📁 `src/shared`

## Source Files

- `src/adapters/buffer/mod.rs`
- `src/adapters/config/mod.rs`
- `src/adapters/mock_repositories.rs`
- `src/adapters/mod.rs`
- `src/adapters/process/mod.rs`
- `src/adapters/session/mod.rs`
- `src/lib.rs`
- `src/modules/buffer/application/mod.rs`
- `src/modules/buffer/application/usecases/mod.rs`
- `src/modules/buffer/domain/events/mod.rs`
- `src/modules/buffer/domain/mod.rs`
- `src/modules/buffer/domain/models/buffer.rs`
- `src/modules/buffer/domain/models/cell.rs`
- `src/modules/buffer/domain/models/mod.rs`
- `src/modules/buffer/domain/operations/buffer_ops.rs`
- `src/modules/buffer/domain/operations/mod.rs`
- `src/modules/buffer/domain/validators/mod.rs`
- `src/modules/buffer/index.rs`
- `src/modules/buffer/mod.rs`
- `src/modules/buffer/ports/mod.rs`
- `src/modules/buffer/types/mod.rs`
- `src/modules/config/application/mod.rs`
- `src/modules/config/application/usecases/mod.rs`
- `src/modules/config/domain/mod.rs`
- `src/modules/config/domain/models/config.rs`
- `src/modules/config/domain/models/mod.rs`
- `src/modules/config/domain/operations/mod.rs`
- `src/modules/config/domain/validators/mod.rs`
- `src/modules/config/index.rs`
- `src/modules/config/mod.rs`
- `src/modules/config/ports/mod.rs`
- `src/modules/config/types/mod.rs`
- `src/modules/mod.rs`
- `src/modules/process/application/mod.rs`
- `src/modules/process/application/usecases/mod.rs`
- `src/modules/process/domain/mod.rs`
- `src/modules/process/domain/models/mod.rs`
- `src/modules/process/domain/models/process.rs`
- `src/modules/process/domain/operations/mod.rs`
- `src/modules/process/domain/validators/mod.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-terminal-sdk
```

### Test

```bash
cargo test -p wrikka-terminal-sdk
```

### Run

```bash
cargo run -p wrikka-terminal-sdk
```

### Lint

```bash
cargo clippy -p wrikka-terminal-sdk
```

### Documentation

```bash
cargo doc -p wrikka-terminal-sdk --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/wrikka/wpackages>
- Homepage: <https://github.com/wrikka/wpackages>
- Source: <https://github.com/wrikka/wpackages/blob/main/packages/domain/terminal-sdk/Cargo.toml>
