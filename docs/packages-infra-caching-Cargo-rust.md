# wrikka-caching

## Overview

High-performance concurrent caching with KV cache compression

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Infra |
| Path | `packages/infra/caching/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |
| Homepage | <https://github.com/wrikka/wpackages> |
| Authors | Wrikka Team |
| Keywords | caching, concurrent, quantization, compression |

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
- `src/domain/events/mod.rs`
- `src/domain/mod.rs`
- `src/domain/models/entities.rs`
- `src/domain/models/mod.rs`
- `src/domain/models/value_objects.rs`
- `src/domain/operations/mod.rs`
- `src/domain/validators/mod.rs`
- `src/infrastructure/adapters/mod.rs`
- `src/infrastructure/mod.rs`
- `src/lib.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-caching
```

### Test

```bash
cargo test -p wrikka-caching
```

### Run

```bash
cargo run -p wrikka-caching
```

### Lint

```bash
cargo clippy -p wrikka-caching
```

### Documentation

```bash
cargo doc -p wrikka-caching --no-deps
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
- Source: <https://github.com/wrikka/wpackages/blob/main/packages/infra/caching/Cargo.toml>
