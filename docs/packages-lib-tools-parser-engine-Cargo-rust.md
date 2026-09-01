# wrikka-parser-engine

## Overview

Advanced parser utilities with multiple language support and Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Tools |
| Path | `packages/lib/tools/parser-engine/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |

## Directory Structure

- 📄 `biome.jsonc`
- 📄 `Cargo.toml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/application`
- 📁 `src/domain`
- 📁 `src/infrastructure`
- 📁 `src/interface`
- 📄 `src/lib.rs`
- 📄 `src/lib_core.rs`
- 📄 `src/lib_parser.rs`
- 📄 `src/lib_tests.rs`

## Source Files

- `src/application/errors/mod.rs`
- `src/application/mod.rs`
- `src/application/services/coordination/types.rs`
- `src/application/services/coordination.rs`
- `src/application/services/mod.rs`
- `src/application/services/orchestration.rs`
- `src/application/services/workflow.rs`
- `src/application/services/workflow_context.rs`
- `src/application/services/workflow_manager.rs`
- `src/application/services/workflow_step_executor.rs`
- `src/application/services/workflow_types.rs`
- `src/application/types/commands.rs`
- `src/application/types/dtos/metadata.rs`
- `src/application/types/dtos/module.rs`
- `src/application/types/dtos.rs`
- `src/application/types/mod.rs`
- `src/application/types/queries.rs`
- `src/application/types/responses.rs`
- `src/application/use_cases/analyze_code.rs`
- `src/application/use_cases/extract_dependencies.rs`
- `src/application/use_cases/extract_dependencies_core.rs`
- `src/application/use_cases/extract_dependencies_types.rs`
- `src/application/use_cases/generate_code.rs`
- `src/application/use_cases/mod.rs`
- `src/application/use_cases/parse_file.rs`
- `src/application/use_cases/transform_ast.rs`
- `src/domain/errors/mod.rs`
- `src/domain/interfaces/mod.rs`
- `src/domain/mod.rs`
- `src/domain/services/mod.rs`
- `src/domain/types/ast.rs`
- `src/domain/types/dependency.rs`
- `src/domain/types/entities.rs`
- `src/domain/types/language.rs`
- `src/domain/types/mod.rs`
- `src/domain/types/module.rs`
- `src/domain/types/position.rs`
- `src/domain/types/token.rs`
- `src/domain/types/value_objects/ast_query.rs`
- `src/domain/types/value_objects/file_path.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-parser-engine
```

### Test

```bash
cargo test -p wrikka-parser-engine
```

### Run

```bash
cargo run -p wrikka-parser-engine
```

### Lint

```bash
cargo clippy -p wrikka-parser-engine
```

### Documentation

```bash
cargo doc -p wrikka-parser-engine --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

# wrikka-parser-engine

> ![Status](https://img.shields.io/badge/status-in_development-red)

Multi-language AST parsing engine with Clean Architecture — parse JavaScript, TypeScript, Rust, JSON, TOML, YAML, and more into typed syntax trees with error recovery.

[![Rust](https://img.shields.io/badge/Rust-stable-orange.svg)](https://www.rust-lang.org/)

```text
wrikka-parser-engine
├── domain/              Pure entities & value objects
│   ├── types/           Language, AstNode, Token, Position, Module, Dependency
│   ├── errors/          ParserError, Result<T>
│   └── interfaces/      Parser trait, Generator trait
├── application/         Use cases & orchestration
│   ├── use_cases/       ParseFile, AnalyzeCode, ExtractDependencies, TransformAst, GenerateCode
│   ├── services/        Workflow manager, coordination, orchestration
│   └── types/           Commands, Queries, DTOs, Responses
├── infrastructure/      Parser & lexer backends
│   ├── parsers/         OxcParser (JS/TS), SynParser (Rust), JsonParser, TomlParser, factory
│   ├── lexers/          LogosLexer, FastTokenizer, GenericLexer, RustLexer, JavaScriptLexer
│   ├── generators/      RustGenerator, JavaScriptGenerator, JsonGenerator
│   ├── transformers/    Generic transformer, validator
│   └── storage/         FileReader
└── interface/           External-facing controllers & API types
    ├── controllers/     ParserController (parse, analyze, transform, generate)
    └── types/           API types, config types
```

## Get Started

1. Install Rust (stable)

   ```bash
   rustup default stable
   rustup component add rustfmt clippy
   ```

2. Add the dependency — `Cargo.toml`

   ```toml
   [dependencies]
   wrikka-parser-engine = { path = "packages/lib/tools/parser-engine" }
   ```

3. Import and parse a file — `Rust`

   ```rust
   use wrikka_parser_engine::{
       domain::types::Language,
       application::use_cases::ParseFileUseCase,
       application::types::commands::ParseFileCommand,
   };

   #[tokio::main]
   async fn main() -> anyhow::Result<()> {
       let use_case = ParseFileUseCase::new();
       let cmd = ParseFileCommand::new("example.js".into(), Language::JavaScript);
       let result = use_case.execute(cmd).await?;
       println!("AST nodes: {}", result.ast.node_count());
       Ok(())
   }
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:language-javascript.svg?color=%234CAF50&width=16) | JavaScript/TypeScript Parser | oxc-based parsing with full ES2024 support |
| ![icon](https://api.iconify.design/mdi:language-rust.svg?color=%232196F3&width=16) | Rust Parser | syn + proc-macro2 for complete Rust parsing including macros |
| ![icon](https://api.iconify.design/mdi:file-code-outline.svg?color=%23FF9800&width=16) | Config File Parsers | JSON, TOML parsing with typed output |
| ![icon](https://api.iconify.design/mdi:puzzle.svg?color=%239C27B0&width=16) | Parser Combinators | nom-based composable parser library for DSLs |
| ![icon](https://api.iconify.design/mdi:grammar.svg?color=%23E91E63&width=16) | Grammar-Based Parsing | pest for declarative grammar definitions |
| ![icon](https://api.iconify.design/mdi:flash.svg?color=%2300BCD4&width=16) | Fast Lexer | logos for high-performance tokenization |
| ![icon](https://api.iconify.design/mdi:tree-outline.svg?color=%23FFC107&width=16) | Green Trees | rowan for memory-efficient syntax tree representation |
| ![icon](https://api.iconify.design/mdi:sync.svg?color=%23673AB7&width=16) | Async Support | Built on Tokio for non-blocking parsing |
| ![icon](https://api.iconify.design/mdi:healing.svg?color=%23F44336&width=16) | Error Recovery | Continue parsing despite syntax errors |
| ![icon](https://api.iconify.design/mdi:map-marker.svg?color=%2300E676&width=16) | Source Mapping | Track source positions and spans for precise reporting |

## Usage

### Usage via SDK — Parse File

```rust
use wrikka_parser_engine::{
    domain::types::Language,
    application::use_cases::ParseFileUseCase,
    application::types::commands::ParseFileCommand,
};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let use_case = ParseFileUseCase::new();
    let cmd = ParseFileCommand::new("main.rs".into(), Language::Rust);
    let result = use_case.execute(cmd).await?;

    println!("Parsed {} nodes", result.ast.node_count());
    for error in &result.errors {
        println!("Error at {:?}", error.position);
    }
    Ok(())
}
```

### Usage via SDK — Extract Dependencies

```rust
use wrikka_parser_engine::{
    domain::types::Language,
    application::use_cases::ExtractDependenciesUseCase,
    application::types::commands::ParseFileCommand,
};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let use_case = ExtractDependenciesUseCase::new();
    let cmd = ParseFileCommand::new("app.ts".into(), Language::TypeScript);
    let deps = use_case.execute(cmd).await?;
    for dep in &deps {
        println!("Dependency: {}", dep.name);
    }
    Ok(())
}
```

### Usage via SDK — AST Transformation

```rust
use wrikka_parser_engine::{
    domain::types::Language,
    application::use_cases::TransformAstUseCase,
    application::types::commands::ParseFileCommand,
};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let use_case = TransformAstUseCase::new();
    let cmd = ParseFileCommand::new("code.js".into(), Language::JavaScript);
    let transformed = use_case.execute(cmd).await?;
    println!("Transformed output: {}", transformed);
    Ok(())
}
```
