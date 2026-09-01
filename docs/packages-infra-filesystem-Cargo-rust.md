# wrikka-filesystem

## Overview

Filesystem utilities and operations with Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Infra |
| Path | `packages/infra/filesystem/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |
| Homepage | <https://github.com/wrikka/wpackages> |
| Authors | Wrikka Team |
| Keywords | filesystem, file, directory, path |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `src`
- 📁 `src/application`
- 📁 `src/domain`
- 📁 `src/infrastructure`
- 📄 `src/lib.rs`

## Source Files

- `src/application/mod.rs`
- `src/application/services/mod.rs`
- `src/domain/events/directory_events.rs`
- `src/domain/events/file_events.rs`
- `src/domain/events/mod.rs`
- `src/domain/mod.rs`
- `src/domain/models/entities.rs`
- `src/domain/models/mod.rs`
- `src/domain/models/value_objects.rs`
- `src/domain/operations/directory_operations.rs`
- `src/domain/operations/file_operations.rs`
- `src/domain/operations/mod.rs`
- `src/domain/validators/directory_validators.rs`
- `src/domain/validators/file_validators.rs`
- `src/domain/validators/mod.rs`
- `src/infrastructure/adapters/mod.rs`
- `src/infrastructure/mod.rs`
- `src/lib.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-filesystem
```

### Test

```bash
cargo test -p wrikka-filesystem
```

### Run

```bash
cargo run -p wrikka-filesystem
```

### Lint

```bash
cargo clippy -p wrikka-filesystem
```

### Documentation

```bash
cargo doc -p wrikka-filesystem --no-deps
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
- Source: <https://github.com/wrikka/wpackages/blob/main/packages/infra/filesystem/Cargo.toml>
