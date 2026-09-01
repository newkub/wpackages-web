# @wrikka/rust-template-engine

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Tools |
| Path | `packages/lib/tools/template-engine/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |

## Description

Template engine with Clean Architecture

## Quick Start

### Install

```bash
bun install
```

### Build

```bash
bun run build
```

### Develop

```bash
bun run dev
```

### Test

```bash
bun run test
```

## Scripts

| Script | Command |
| --- | --- |
| dev | `bun run src/index.ts` |
| build | `bun build` |
| typecheck | `tsc --noEmit` |
| lint | `biome lint` |
| lint:fix | `biome lint --write` |
| format | `biome format --write` |
| test | `vitest run` |
| verify | `bun run lint && bun run typecheck && bun run test` |
| ci | `bun run verify && bun run build` |
| clean | `cargo clean` |

## README

# Wrikka Template Engine

General-purpose template engine for project generation with Clean Architecture and multiple backend support.

## Why

| Problem | Solution |
|---------|----------|
| **Limited template engines** with inconsistent syntax and features | **Multi-backend engine** supporting Handlebars and Tera with unified API |
| **Manual code generation** that is error-prone and repetitive | **Automated scaffolding** with validation and error handling |
| **Poor template organization** making reuse difficult | **Structured template management** with file system operations |
| **Slow template rendering** blocking development workflows | **Async processing** for non-blocking template generation |

## When

| <center>![icon](https://api.iconify.design/mdi:file-document-outline.svg?color=%234CAF50&width=16)</center> | Use Case | Description |
|---------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:code.svg?color=%232196F3&width=16)</center> | **Code Generation** | Generate boilerplate code and project scaffolding |
| <center>![icon](https://api.iconify.design/mdi:file-code-outline.svg?color=%23FF9800&width=16)</center> | **Configuration Files** | Create config files from templates with variables |
| <center>![icon](https://api.iconify.design/mdi:text-box-outline.svg?color=%239C27B0&width=16)</center> | **Documentation** | Generate documentation from templates |
| <center>![icon](https://api.iconify.design/mdi:folder-outline.svg?color=%23E91E63&width=16)</center> | **Project Templates** | Create entire project structures from templates |

## Key Concept

| <center>![icon](https://api.iconify.design/mdi:architecture.svg?color=%234CAF50&width=16)</center> | Concept | Mental Model |
|---------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:layers.svg?color=%232196F3&width=16)</center> | **Clean Architecture** | Domain → Application → Infrastructure → Adapters layers |
| <center>![icon](https://api.iconify.design/mdi:puzzle.svg?color=%23FF9800&width=16)</center> | **Template Backends** | Pluggable rendering engines (Handlebars, Tera) |
| <center>![icon](https://api.iconify.design/mdi:folder-tree.svg?color=%239C27B0&width=16)</center> | **Template Trees** | Hierarchical template organization and inheritance |
| <center>![icon](https://api.iconify.design/mdi:validation.svg?color=%23E91E63&width=16)</center> | **Variable Validation** | Ensure template variables are properly defined |

## Principles

| <center>![icon](https://api.iconify.design/mdi:shield.svg?color=%234CAF50&width=16)</center> | Principle | Rule |
|---------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:extension.svg?color=%232196F3&width=16)</center> | **Backend Agnostic** | Same API works with different template engines |
| <center>![icon](https://api.iconify.design/mdi:sync.svg?color=%23FF9800&width=16)</center> | **Async First** | Non-blocking template rendering for better performance |
| <center>![icon](https://api.iconify.design/mdi:security.svg?color=%239C27B0&width=16)</center> | **Safe by Default** | Input validation and secure template processing |
| <center>![icon](https://api.iconify.design/mdi:folder-multiple.svg?color=%23E91E63&width=16)</center> | **Template Organization** | Structured template management with inheritance |

## Features

| <center>![icon](https://api.iconify.design/mdi:file-document-outline.svg?color=%234CAF50&width=16)</center> | Feature | Description | Benefit |
|---------|----------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:code-braces.svg?color=%232196F3&width=16)</center> | **Handlebars Engine** | Logic-less templates with helpers | Simple, secure template syntax |
| <center>![icon](https://api.iconify.design/mdi:code-json.svg?color=%23FF9800&width=16)</center> | **Tera Engine** | Jinja2-like templating with complex logic | Powerful template features |
| <center>![icon](https://api.iconify.design/mdi:folder-tree.svg?color=%239C27B0&width=16)</center> | **Template Inheritance** | Extend and override base templates | Reduce template duplication |
| <center>![icon](https://api.iconify.design/mdi:file-find.svg?color=%23E91E63&width=16)</center> | **File System Operations** | Walk directories and glob patterns | Process template collections |
| <center>![icon](https://api.iconify.design/mdi:validation.svg?color=%234CAF50&width=16)</center> | **Variable Validation** | Regex-based validation and type checking | Prevent template errors |
| <center>![icon](https://api.iconify.design/mdi:sync.svg?color=%232196F3&width=16)</center> | **Async Processing** | Non-blocking template rendering | Better performance for large projects |
| <center>![icon](https://api.iconify.design/mdi:cache.svg?color=%23FF9800&width=16)</center> | **Template Caching** | Cache compiled templates for faster rendering | Improve rendering speed |
| <center>![icon](https://api.iconify.design/mdi:bug.svg?color=%239C27B0&width=16)</center> | **Error Recovery** | Graceful handling of template errors | Better debugging experience |
| <center>![icon](https://api.iconify.design/mdi:test-tube.svg?color=%23E91E63&width=16)</center> | **Testable Architecture** | Clean Architecture with mockable dependencies | Easy unit testing |
| <center>![icon](https://api.iconify.design/mdi:format-text.svg?color=%234CAF50&width=16)</center> | **Custom Helpers** | Extensible helper functions for templates | Add domain-specific functionality |
| <center>![icon](https://api.iconify.design/mdi:folder-zip.svg?color=%232196F3&width=16)</center> | **Template Packages** | Bundle templates as reusable packages | Share template collections |

## Installation

```bash
# Install from source
cargo install --path packages/data/template-engine

# Add as dependency
cargo add wrikka-template-engine --path packages/data/template-engine

# With specific engine
cargo add wrikka-template-engine --path packages/data/template-engine --features handlebars-engine
```

## Usage

### Method 1: Usage via Programmatic API

```rust
use wrikka_template_engine::{
    domain::entities::{Template, RenderContext},
    application::use_cases::RenderTemplateUseCase,
    domain::value_objects::Engine,
};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Create template
    let template = Template::new(
        "Hello, {{name}}! You have {{count}} messages.",
        Engine::Handlebars,
    );
    
    // Create context
    let mut context = RenderContext::new();
    context.insert("name", "World");
    context.insert("count", 42);
    
    // Render template
    let use_case = RenderTemplateUseCase::new();
    let result = use_case.execute(template, context).await?;
    
    println!("Rendered: {}", result.output);
    
    Ok(())
}
```

### Method 2: Usage via CLI

```bash
# Render a single template
wrikka-template-engine render template.md --data data.json --output result.md

# Process template directory
wrikka-template-engine process ./templates --data ./data --output ./generated

# Validate templates
wrikka-template-engine validate ./templates --strict

# Create new template
wrikka-template-engine init --type handlebars --name my-template
```

## Configuration

```toml
[template]
default_engine = "handlebars"
strict_mode = false
auto_escape = true

[cache]
enabled = true
max_size = "100MB"
ttl = 3600

[validation]
strict_variables = false
required_variables = []
type_checking = true

[helpers]
custom_helpers_path = "./helpers"
builtin_helpers = true
```

## Reference

### Domain Types

| Type | Description |
|------|-------------|
| `Template` | Template with content and engine type |
| `RenderContext` | Variable context for template rendering |
| `RenderResult` | Rendered output with metadata |
| `TemplateError` | Validation and rendering errors |
| `TemplateEngine` | Core engine trait for backends |
| `Engine` | Supported engine types (Handlebars, Tera) |

### Template Engines

| Engine | Syntax | Features | Use Case |
|--------|--------|----------|----------|
| **Handlebars** | `{{var}}`, `{{#if}}` | Logic-less, secure helpers | Simple templates, user input |
| **Tera** | `{{var}}`, `{% if %}` | Complex logic, filters | Advanced templates, code generation |

### Architecture Layers

1. **Domain Layer**: Template entities and rendering context
2. **Application Layer**: Template rendering use cases
3. **Infrastructure Layer**: Template engine implementations
4. **Adapters Layer**: CLI and file system interfaces

### Dependencies

Key external dependencies:
- **Handlebars**: handlebars-rust for logic-less templates
- **Tera**: tera for Jinja2-like templating
- **File System**: walkdir for directory traversal
- **Glob**: glob pattern matching for file selection
- **Async Runtime**: Tokio for non-blocking operations

## License

MIT License - See LICENSE.md for details.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request
