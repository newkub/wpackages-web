# wrikka-foundation-effect-http

## Overview

HTTP effect executor

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Foundation |
| Path | `packages/lib/foundation/effect-http/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/infrastructure`
- 📄 `src/lib.rs`

## Source Files

- `src/adapters/http_executor.rs`
- `src/adapters/mod.rs`
- `src/infrastructure/caching/mod.rs`
- `src/infrastructure/config/mod.rs`
- `src/infrastructure/executors/database.rs`
- `src/infrastructure/executors/http.rs`
- `src/infrastructure/executors/mod.rs`
- `src/infrastructure/executors/registry.rs`
- `src/infrastructure/logging/mod.rs`
- `src/infrastructure/metrics/mod.rs`
- `src/infrastructure/mod.rs`
- `src/infrastructure/repositories/batch_repository.rs`
- `src/infrastructure/repositories/configuration_repository.rs`
- `src/infrastructure/repositories/metrics_repository.rs`
- `src/infrastructure/repositories/mod.rs`
- `src/infrastructure/repositories/result_repository.rs`
- `src/lib.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-foundation-effect-http
```

### Test

```bash
cargo test -p wrikka-foundation-effect-http
```

### Run

```bash
cargo run -p wrikka-foundation-effect-http
```

### Lint

```bash
cargo clippy -p wrikka-foundation-effect-http
```

### Documentation

```bash
cargo doc -p wrikka-foundation-effect-http --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.
