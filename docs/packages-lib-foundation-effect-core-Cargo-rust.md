# wrikka-foundation-effect-core

## Overview

Core effect system - pure types, cancellation, composition

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Foundation |
| Path | `packages/lib/foundation/effect-core/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `src`
- 📁 `src/application`
- 📁 `src/domain`
- 📄 `src/lib.rs`
- 📁 `src/shared`

## Source Files

- `src/application/mod.rs`
- `src/application/use_cases/batch.rs`
- `src/application/use_cases/cache.rs`
- `src/application/use_cases/composition.rs`
- `src/application/use_cases/configuration.rs`
- `src/application/use_cases/execution.rs`
- `src/application/use_cases/manage.rs`
- `src/application/use_cases/mod.rs`
- `src/application/use_cases/monitor.rs`
- `src/application/use_cases/retry.rs`
- `src/domain/errors/error_classifications.rs`
- `src/domain/errors/error_context.rs`
- `src/domain/errors/error_metrics.rs`
- `src/domain/errors/error_types.rs`
- `src/domain/errors/mod.rs`
- `src/domain/mod.rs`
- `src/domain/modules/batch/mod.rs`
- `src/domain/modules/batch/models.rs`
- `src/domain/modules/batch/operations.rs`
- `src/domain/modules/batch/validators/batch_validators.rs`
- `src/domain/modules/batch/validators/dependency_validators.rs`
- `src/domain/modules/batch/validators/execution_validators.rs`
- `src/domain/modules/batch/validators/mod.rs`
- `src/domain/modules/batch/validators/parallel_validators.rs`
- `src/domain/modules/batch/validators/resource_validators.rs`
- `src/domain/modules/batch/validators/strategy_validators.rs`
- `src/domain/modules/batch.rs`
- `src/domain/modules/composition/mod.rs`
- `src/domain/modules/composition/models.rs`
- `src/domain/modules/composition/operations.rs`
- `src/domain/modules/composition/validators.rs`
- `src/domain/modules/composition.rs`
- `src/domain/modules/effect/mod.rs`
- `src/domain/modules/effect/models.rs`
- `src/domain/modules/effect/operations.rs`
- `src/domain/modules/effect/validators.rs`
- `src/domain/modules/effect.rs`
- `src/domain/modules/execution/mod.rs`
- `src/domain/modules/execution/models/error_handling.rs`
- `src/domain/modules/execution/models/execution_context.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-foundation-effect-core
```

### Test

```bash
cargo test -p wrikka-foundation-effect-core
```

### Run

```bash
cargo run -p wrikka-foundation-effect-core
```

### Lint

```bash
cargo clippy -p wrikka-foundation-effect-core
```

### Documentation

```bash
cargo doc -p wrikka-foundation-effect-core --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.
