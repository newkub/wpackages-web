# wrikka-code-metrics

## Overview

Code analysis metrics and quality measures

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Tools |
| Path | `packages/lib/tools/code-metrics/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `src`
- 📁 `src/infrastructure`
- 📄 `src/lib.rs`
- 📁 `src/modules`

## Source Files

- `src/infrastructure/entities/analysis_result_entity.rs`
- `src/infrastructure/entities/code_file_entity.rs`
- `src/infrastructure/entities/mod.rs`
- `src/infrastructure/mod.rs`
- `src/lib.rs`
- `src/modules/code_metrics/application/analyzers/base_analyzer.rs`
- `src/modules/code_metrics/application/analyzers/complexity_analyzer.rs`
- `src/modules/code_metrics/application/analyzers/duplication_analyzer.rs`
- `src/modules/code_metrics/application/analyzers/mod.rs`
- `src/modules/code_metrics/application/metrics/loc_calculator.rs`
- `src/modules/code_metrics/application/metrics/mod.rs`
- `src/modules/code_metrics/application/mod.rs`
- `src/modules/code_metrics/application/ports/ast_parser.rs`
- `src/modules/code_metrics/application/ports/file_scanner.rs`
- `src/modules/code_metrics/application/ports/mod.rs`
- `src/modules/code_metrics/domain/entities/analysis_result.rs`
- `src/modules/code_metrics/domain/entities/code_file.rs`
- `src/modules/code_metrics/domain/entities/metric.rs`
- `src/modules/code_metrics/domain/entities/mod.rs`
- `src/modules/code_metrics/domain/interfaces/analyzer.rs`
- `src/modules/code_metrics/domain/interfaces/metric_calculator.rs`
- `src/modules/code_metrics/domain/interfaces/mod.rs`
- `src/modules/code_metrics/domain/mod.rs`
- `src/modules/code_metrics/domain/value_objects/file_path.rs`
- `src/modules/code_metrics/domain/value_objects/mod.rs`
- `src/modules/code_metrics/infrastructure/mod.rs`
- `src/modules/code_metrics/infrastructure/parsers/mod.rs`
- `src/modules/code_metrics/infrastructure/parsers/tree_sitter_parser.rs`
- `src/modules/code_metrics/infrastructure/scanners/gitignore_scanner.rs`
- `src/modules/code_metrics/infrastructure/scanners/mod.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-code-metrics
```

### Test

```bash
cargo test -p wrikka-code-metrics
```

### Run

```bash
cargo run -p wrikka-code-metrics
```

### Lint

```bash
cargo clippy -p wrikka-code-metrics
```

### Documentation

```bash
cargo doc -p wrikka-code-metrics --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.
