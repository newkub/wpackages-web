# wrikka-storage

## Overview

Storage abstractions with Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Infra |
| Path | `packages/infra/storage/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |
| Homepage | <https://github.com/wrikka/wpackages> |
| Authors | Wrikka Team |
| Keywords | storage, s3, filesystem, bucket |

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
- `src/domain/errors.rs`
- `src/domain/events/bucket_events.rs`
- `src/domain/events/mod.rs`
- `src/domain/events/object_events.rs`
- `src/domain/lib.rs`
- `src/domain/mod.rs`
- `src/domain/models/entities.rs`
- `src/domain/models/mod.rs`
- `src/domain/models/value_objects.rs`
- `src/domain/operations/bucket_operations.rs`
- `src/domain/operations/mod.rs`
- `src/domain/operations/object_operations.rs`
- `src/domain/validators/bucket_validators.rs`
- `src/domain/validators/mod.rs`
- `src/domain/validators/object_validators.rs`
- `src/infrastructure/adapters/mod.rs`
- `src/infrastructure/entities/mod.rs`
- `src/infrastructure/entities/storage_bucket.rs`
- `src/infrastructure/entities/storage_object.rs`
- `src/infrastructure/mod.rs`
- `src/lib.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-storage
```

### Test

```bash
cargo test -p wrikka-storage
```

### Run

```bash
cargo run -p wrikka-storage
```

### Lint

```bash
cargo clippy -p wrikka-storage
```

### Documentation

```bash
cargo doc -p wrikka-storage --no-deps
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
- Source: <https://github.com/wrikka/wpackages/blob/main/packages/infra/storage/Cargo.toml>
