# wrikka-rules-engine

## Overview

Flexible and customizable rules engine for code analysis, linting, and rewriting - Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Tools |
| Path | `packages/lib/tools/rules-engine/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |
| Homepage | <https://github.com/wrikka/wpackages> |
| Authors | wrikka contributors |
| Keywords | rules, linter, code-analysis, ast, clean-architecture |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `examples`
- 📄 `examples/basic_usage.rs`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📁 `src/modules`
- 📁 `src/shared`
- 📁 `tests`
- 📄 `tests/domain_tests.rs`
- 📄 `tests/integration_test.rs`
- 📄 `tests/integration_tests.rs`
- 📄 `TODO.md`

## Source Files

- `src/adapters/cli/main.rs`
- `src/adapters/cli/mod.rs`
- `src/adapters/entities/mod.rs`
- `src/adapters/entities/rule_entity.rs`
- `src/adapters/infrastructure/file_scanner.rs`
- `src/adapters/infrastructure/json_report_generator.rs`
- `src/adapters/infrastructure/markdown_report_generator.rs`
- `src/adapters/infrastructure/mod.rs`
- `src/adapters/infrastructure/yaml_rule_loader.rs`
- `src/adapters/lib/convenience.rs`
- `src/adapters/lib/mod.rs`
- `src/adapters/lib/rules_engine.rs`
- `src/adapters/mod.rs`
- `src/lib.rs`
- `src/modules/mod.rs`
- `src/modules/rules/application/mod.rs`
- `src/modules/rules/application/use_cases/evaluate_rules.rs`
- `src/modules/rules/application/use_cases/generate_report.rs`
- `src/modules/rules/application/use_cases/load_rules.rs`
- `src/modules/rules/application/use_cases/mod.rs`
- `src/modules/rules/domain/mod.rs`
- `src/modules/rules/domain/models/location.rs`
- `src/modules/rules/domain/models/match_result.rs`
- `src/modules/rules/domain/models/mod.rs`
- `src/modules/rules/domain/models/pattern.rs`
- `src/modules/rules/domain/models/rule.rs`
- `src/modules/rules/domain/models/severity.rs`
- `src/modules/rules/domain/operations/mod.rs`
- `src/modules/rules/domain/operations/pattern_matching.rs`
- `src/modules/rules/domain/operations/rule_evaluation.rs`
- `src/modules/rules/domain/operations/rule_validation.rs`
- `src/modules/rules/mod.rs`
- `src/modules/rules/ports/mod.rs`
- `src/modules/rules/ports/report_generator.rs`
- `src/modules/rules/ports/rule_evaluator.rs`
- `src/modules/rules/ports/rule_loader.rs`
- `src/modules/rules/types/mod.rs`
- `src/shared/constants/mod.rs`
- `src/shared/kernel/error.rs`
- `src/shared/kernel/mod.rs`

## Binaries

- `rules-engine`

## Quick Start

### Build

```bash
cargo build -p wrikka-rules-engine
```

### Test

```bash
cargo test -p wrikka-rules-engine
```

### Run

```bash
cargo run -p wrikka-rules-engine
```

### Lint

```bash
cargo clippy -p wrikka-rules-engine
```

### Documentation

```bash
cargo doc -p wrikka-rules-engine --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

# Rules Engine

> ![Status](https://img.shields.io/badge/status-in_development-red)

A flexible and customizable rules engine for code analysis, linting, and rewriting with Clean Architecture principles.

[![Rust](https://img.shields.io/badge/Rust-1.70%2B-orange.svg)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                      rules-engine                               │
├──────────────┬──────────────────────────────────────────────────┤
│  modules     │  rules (domain/app/ports)                        │
├──────────────┼──────────────────────────────────────────────────┤
│  adapters    │  lib · infrastructure                            │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  types · utils · kernel (error handling)         │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   rules-engine = { path = "../packages/lib/tools/rules-engine" }
   ```

2. Create and evaluate a rule — `Rust`

   ```rust
   use rules_engine::{RulesEngine, Rule, Severity};

   #[tokio::main]
   async fn main() -> Result<(), Box<dyn std::error::Error>> {
       let rule = Rule::new(
           "no-console-log".to_string(),
           "javascript".to_string(),
           "Avoid console.log in production".to_string(),
       )
       .with_pattern("console.log".to_string())
       .with_severity(Severity::Warning);

       let engine = RulesEngine::new();
       let code = "console.log('hello');";
       let results = engine.evaluate(code, "test.js", &[rule]).await?;

       println!("Found {} issues", results.len());
       Ok(())
   }
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:pattern-checker.svg?color=%231976d2&width=16) | Pattern Matching | Text and regex pattern support |
| ![icon](https://api.iconify.design/mdi:file-document.svg?color=%23388e3c&width=16) | YAML Rules | Human-readable rule configuration |
| ![icon](https://api.iconify.design/mdi:language-php.svg?color=%23f57c00&width=16) | Multiple Languages | Language-agnostic rule engine |
| ![icon](https://api.iconify.design/mdi:chart-bar.svg?color=%237b1fa2&width=16) | Report Generation | JSON and Markdown reports |
| ![icon](https://api.iconify.design/mdi:sync.svg?color=%23c2185b&width=16) | Async Processing | Non-blocking evaluation |
| ![icon](https://api.iconify.design/mdi:folder-search.svg?color=%230097a7&width=16) | File Scanning | Directory and file discovery |
| ![icon](https://api.iconify.design/mdi:alert-circle.svg?color=%2300796b&width=16) | Error Handling | Comprehensive error types |

## Usage

### Usage via YAML Rules

```yaml
# rules/javascript.yaml
- id: no-console-log
  language: javascript
  message: Avoid console.log in production
  severity: warning
  pattern: console.log
  fix: Use logger instead

- id: prefer-const
  language: javascript
  message: Use const for variables that are not reassigned
  severity: info
  regex: '\blet\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*='
```

```rust
use rules_engine::{RulesEngine, load_rules_from_yaml};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let rules = load_rules_from_yaml("./rules").await?;
    let engine = RulesEngine::new();
    let results = engine.evaluate_file("src/main.js", &rules).await?;

    for result in results {
        println!("{}: {} at line {}", result.rule_id, result.message, result.location.line);
    }
    Ok(())
}
```

### Usage via Report Generation

```rust
use rules_engine::{RulesEngine, load_rules_from_yaml};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let engine = RulesEngine::new();
    let rules = load_rules_from_yaml("./rules").await?;
    let results = engine.evaluate_directory("./src", &rules).await?;

    let json_report = engine.generate_json_report(&results).await?;
    let markdown_report = engine.generate_markdown_report(&results).await?;

    tokio::fs::write("report.json", json_report).await?;
    tokio::fs::write("report.md", markdown_report).await?;
    Ok(())
}
```

### Usage via Custom Components

```rust
use rules_engine::{
    RulesEngine, RuleEvaluatorPort, RuleLoaderPort, ReportGeneratorPort,
    DefaultRuleEvaluator, YamlRuleLoader, JsonReportGenerator,
};

let engine = RulesEngine::with_components(
    Box::new(DefaultRuleEvaluator),
    Box::new(YamlRuleLoader),
    Box::new(JsonReportGenerator),
);
```

### Usage via File Scanning

```rust
use rules_engine::FileScanner;

let scanner = FileScanner::new()
    .with_exclude_patterns(vec!["**/node_modules/**".to_string()])
    .with_include_patterns(vec!["**/*.js".to_string(), "**/*.ts".to_string()]);

let files = scanner.scan_directory("./src").await?;
let contents = scanner.read_files(&files).await?;
```

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/wrikka/wpackages>
- Homepage: <https://github.com/wrikka/wpackages>
- Source: <https://github.com/wrikka/wpackages/blob/main/packages/lib/tools/rules-engine/Cargo.toml>
