# wrikka-cli-builder

- **Type:** RUST
- **Category:** Tools
- **Path:** `packages/lib/tools/cli-builder/Cargo.toml`

## Description

A clean architecture CLI builder library

## README

# cli-builder

> ![Status](https://img.shields.io/badge/status-in_development-red)

A Clean Architecture CLI application builder library for Rust with code generation, shell completions, and interactive prompts support.

[![Rust](https://img.shields.io/badge/Rust-1.70%2B-orange.svg)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                       cli-builder                               │
├──────────────┬──────────────────────────────────────────────────┤
│  adapters    │  CLI · REST · GraphQL controllers                │
├──────────────┼──────────────────────────────────────────────────┤
│  application │  Commands (CQRS) · Queries · Ports · Services    │
├──────────────┼──────────────────────────────────────────────────┤
│  domain      │  Entities · Value Objects · Events · Errors      │
├──────────────┼──────────────────────────────────────────────────┤
│  infra       │  Repositories (InMemory/File) · DI Container     │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  Kernel · Utils                                  │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   cli-builder = { git = "https://github.com/wrikka/wpackages", path = "packages/cli-builder" }
   ```

2. Use the library — `Rust`

   ```rust
   use cli_builder::infrastructure::di::DiContainer;
   use cli_builder::application::dto::CreateApplicationRequest;

   #[tokio::main]
   async fn main() -> Result<(), Box<dyn std::error::Error>> {
       let container = DiContainer::new();
       let orchestrator = container.orchestrator();

       let request = CreateApplicationRequest {
           name: "my-tool".to_string(),
           version: "1.0.0".to_string(),
           description: Some("A useful CLI tool".to_string()),
           author: Some("Developer".to_string()),
           metadata: None,
       };

       let app = orchestrator.create_application(request).await?;
       println!("Created application: {} (ID: {})", app.name, app.id);
       Ok(())
   }
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%231976d2&width=16) | Clean Architecture | 5-layer domain-driven design with strict dependency rules |
| ![icon](https://api.iconify.design/mdi:call-split.svg?color=%23388e3c&width=16) | CQRS Pattern | Separate commands (write) and queries (read) operations |
| ![icon](https://api.iconify.design/mdi:code-braces.svg?color=%23f57c00&width=16) | Code Generation | Generate Rust (clap), TypeScript (commander), Python (argparse) |
| ![icon](https://api.iconify.design/mdi:console.svg?color=%237b1fa2&width=16) | Shell Completions | Generate bash, zsh, fish, PowerShell completion scripts |
| ![icon](https://api.iconify.design/mdi:file-document.svg?color=%23c2185b&width=16) | Man Page Generation | Auto-generate man page documentation |
| ![icon](https://api.iconify.design/mdi:form-select.svg?color=%230097a7&width=16) | Interactive Prompts | Generate select, multi_select, input, confirm, password prompts |
| ![icon](https://api.iconify.design/mdi:progress-check.svg?color=%2300796b&width=16) | Progress Indicators | Generate progress bars, spinners, multi-progress displays |
| ![icon](https://api.iconify.design/mdi:import.svg?color=%23ffa000&width=16) | Config Import | Import CLI definitions from YAML, TOML, or JSON files |
| ![icon](https://api.iconify.design/mdi:database.svg?color=%23303f9f&width=16) | Multiple Repositories | In-memory and file-based repository implementations |

## Usage

### Usage via CLI

```bash
# Create a new CLI application
cli-builder create-app my-app 1.0.0 "My first CLI application"

# List applications
cli-builder list-apps --limit 20

# Add a command
cli-builder add-command <APP_ID> hello "Say hello" handle_hello

# Generate code
cli-builder generate <APP_ID> rust lib

# Generate shell completions
cli-builder completion <APP_ID> bash

# Generate man page
cli-builder man-page <APP_ID> 1

# Import from config file
cli-builder import-config ./my-app.yaml

# Generate interactive prompts
cli-builder generate-prompts <APP_ID> select

# Generate progress indicators
cli-builder generate-progress <APP_ID> bar

# Show application details
cli-builder show my-app
```

### Usage via SDK — Generate Rust CLI Code

```rust
use cli_builder::infrastructure::di::DiContainer;
use cli_builder::application::dto::GenerateCodeRequest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let container = DiContainer::new();
    let orchestrator = container.orchestrator();

    let app_id = uuid::Uuid::parse_str("550e8400-e29b-41d4-a716-446655440000")?;
    let request = GenerateCodeRequest {
        application_id: app_id,
        target_language: "rust".to_string(),
        output_format: "bin".to_string(),
    };

    let response = orchestrator.generate_code(request).await?;
    println!("Generated {} code:", response.language);
    println!("{}", response.code);
    Ok(())
}
```

### Usage via SDK — Shell Completions

```rust
use cli_builder::infrastructure::di::DiContainer;
use cli_builder::application::dto::{GenerateCompletionRequest, ShellType};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let container = DiContainer::new();
    let orchestrator = container.orchestrator();

    let request = GenerateCompletionRequest {
        application_id: uuid::Uuid::parse_str("550e8400-e29b-41d4-a716-446655440000")?,
        shell: ShellType::Bash,
    };

    let response = orchestrator.generate_completion(request).await?;
    std::fs::write(&response.file_name, response.script)?;
    println!("Saved {} completion to {}", response.shell, response.file_name);
    Ok(())
}
```

### Usage via SDK — File-Based Persistence

```rust
use cli_builder::infrastructure::di::DiContainer;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let container = DiContainer::with_file_storage("./data");
    let orchestrator = container.orchestrator();
    // All operations persist to ./data directory as JSON files
    Ok(())
}
```

## License

MIT License - See [LICENSE](./LICENSE)
