# database-tui

## Overview

Database explorer TUI app with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/database-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/newkub/database-tui> |
| Homepage | <https://github.com/newkub/database-tui> |
| Authors | Wrikka Team |
| Keywords | tui, database, sql, explorer |

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

- `src/adapters/db.rs`
- `src/adapters/mod.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/modules/database/application/mod.rs`
- `src/modules/database/application/usecase.rs`
- `src/modules/database/domain/mod.rs`
- `src/modules/database/domain/models/mod.rs`
- `src/modules/database/domain/models/query.rs`
- `src/modules/database/domain/operations/mod.rs`
- `src/modules/database/domain/operations/query.rs`
- `src/modules/database/mod.rs`
- `src/modules/mod.rs`
- `src/presentation/mod.rs`
- `src/presentation/tui/app.rs`
- `src/presentation/tui/mod.rs`
- `src/shared/kernel/errors.rs`
- `src/shared/kernel/mod.rs`
- `src/shared/kernel/types.rs`
- `src/shared/mod.rs`

## Binaries

- `database-tui`

## Quick Start

### Build

```bash
cargo build -p database-tui
```

### Test

```bash
cargo test -p database-tui
```

### Run

```bash
cargo run -p database-tui
```

### Lint

```bash
cargo clippy -p database-tui
```

### Documentation

```bash
cargo doc -p database-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/newkub/database-tui>
- Homepage: <https://github.com/newkub/database-tui>
- Source: <https://github.com/newkub/database-tui/blob/main/apps/tui/database-tui/Cargo.toml>
