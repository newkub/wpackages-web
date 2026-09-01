# api-tui

## Overview

API client TUI app with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/api-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/newkub/api-tui> |
| Homepage | <https://github.com/newkub/api-tui> |
| Authors | Wrikka Team |
| Keywords | tui, api, client, http |

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

- `src/adapters/http_client.rs`
- `src/adapters/mod.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/modules/api/application/mod.rs`
- `src/modules/api/application/usecase.rs`
- `src/modules/api/domain/mod.rs`
- `src/modules/api/domain/models/mod.rs`
- `src/modules/api/domain/models/request.rs`
- `src/modules/api/domain/operations/mod.rs`
- `src/modules/api/domain/operations/request.rs`
- `src/modules/api/mod.rs`
- `src/modules/mod.rs`
- `src/presentation/mod.rs`
- `src/presentation/tui/app.rs`
- `src/presentation/tui/mod.rs`
- `src/shared/kernel/errors.rs`
- `src/shared/kernel/mod.rs`
- `src/shared/kernel/types.rs`
- `src/shared/mod.rs`

## Binaries

- `api-tui`

## Quick Start

### Build

```bash
cargo build -p api-tui
```

### Test

```bash
cargo test -p api-tui
```

### Run

```bash
cargo run -p api-tui
```

### Lint

```bash
cargo clippy -p api-tui
```

### Documentation

```bash
cargo doc -p api-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/newkub/api-tui>
- Homepage: <https://github.com/newkub/api-tui>
- Source: <https://github.com/newkub/api-tui/blob/main/apps/tui/api-tui/Cargo.toml>
