# wrikka-lsp

## Overview

LSP integration - completion, diagnostics, and go-to-definition

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Tools |
| Path | `packages/lib/tools/lsp/Cargo.toml` |
| Keywords | lsp, language-server, completion, diagnostics, ide |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/application`
- 📁 `src/domain`
- 📁 `src/infrastructure`
- 📄 `src/lib.rs`
- 📁 `src/lsp`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📁 `tests`
- 📁 `tests/integration`
- 📄 `tests/mod.rs`
- 📁 `tests/unit`
- 📄 `TODO.md`

## Source Files

- `src/adapters/cli/mod.rs`
- `src/adapters/mod.rs`
- `src/adapters/rest/mod.rs`
- `src/application/commands/mod.rs`
- `src/application/mod.rs`
- `src/application/ports/lsp_client.rs`
- `src/application/ports/mod.rs`
- `src/application/queries/mod.rs`
- `src/application/use_cases/completion.rs`
- `src/application/use_cases/mod.rs`
- `src/domain/collections/completion_list.rs`
- `src/domain/collections/diagnostic_collection.rs`
- `src/domain/collections/mod.rs`
- `src/domain/collections/symbol_collection.rs`
- `src/domain/entities/diagnostic.rs`
- `src/domain/entities/document_symbol.rs`
- `src/domain/entities/mod.rs`
- `src/domain/entities/workspace_symbol.rs`
- `src/domain/mod.rs`
- `src/domain/value_objects/completion_item.rs`
- `src/domain/value_objects/diagnostic_severity.rs`
- `src/domain/value_objects/location.rs`
- `src/domain/value_objects/mod.rs`
- `src/domain/value_objects/position.rs`
- `src/domain/value_objects/range.rs`
- `src/domain/value_objects/symbol_kind.rs`
- `src/infrastructure/lsp_client_impl.rs`
- `src/infrastructure/lsp_client_registry.rs`
- `src/infrastructure/mod.rs`
- `src/lib.rs`
- `src/lsp/mod.rs`
- `src/presentation/cli/mod.rs`
- `src/presentation/events/default_handler.rs`
- `src/presentation/events/event_dispatcher.rs`
- `src/presentation/events/event_handler.rs`
- `src/presentation/events/event_tests.rs`
- `src/presentation/events/event_types.rs`
- `src/presentation/events/mod.rs`
- `src/presentation/http/mod.rs`
- `src/presentation/mod.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-lsp
```

### Test

```bash
cargo test -p wrikka-lsp
```

### Run

```bash
cargo run -p wrikka-lsp
```

### Lint

```bash
cargo clippy -p wrikka-lsp
```

### Documentation

```bash
cargo doc -p wrikka-lsp --no-deps
```

## README

# Wrikka LSP

## Why

LSP integration crate สำหรับ completion, diagnostics, และ go-to-definition ที่ใช้ Clean Architecture

## Key Concept

LSP integration พร้อม:
- **Completion** - Code completion
- **Diagnostics** - Error diagnostics
- **Go-to-Definition** - Navigate to definitions
- **Go-to-References** - Find all references
- **Hover** - Documentation hover
- **Rename** - Symbol renaming
- **Document Symbols** - Outline view
- **Workspace Symbols** - Search symbols

## Architecture

Package นี้ใช้ Clean Architecture ประกอบด้วย 5 layers:

### Domain Layer
- **Entities**: Core business objects (Diagnostic, DocumentSymbol, WorkspaceSymbol)
- **Value Objects**: Immutable values (Position, Range, CompletionItem, Location, etc.)
- **Collections**: Aggregations (CompletionList, DiagnosticCollection, SymbolCollection)

### Application Layer
- **Ports**: Interfaces for LSP operations (LspClient trait)
- **Use Cases**: Business logic orchestration
- **Commands**: Command objects for write operations
- **Queries**: Query objects for read operations

### Adapters Layer
- **CLI**: Command-line interface
- **REST**: REST API interface

### Infrastructure Layer
- **LspClientImpl**: Concrete implementation of LspClient with JSON-RPC communication
- **LspClientRegistry**: Registry for managing LSP clients per language

### Shared Layer
- **Utils**: Cross-layer utilities
- **Constants**: Common constants

## Features

| Features | Description | Status |
|----------|-------------|---------|
| 💡 Completion | Code completion | 🚧 Port defined |
| 🔍 Diagnostics | Error diagnostics | 🚧 Port defined |
| 📖 Go-to-Definition | Navigate to definitions | 🚧 Port defined |
| 🔗 Go-to-References | Find all references | 🚧 Port defined |
| 💬 Hover | Documentation hover | 🚧 Port defined |
| ✏️ Rename | Symbol renaming | 🚧 Port defined |
| 📋 Document Symbols | Outline view | 🚧 Port defined |
| 🔍 Workspace Symbols | Search symbols | 🚧 Port defined |
| 🏗️ Clean Architecture | 5-layer architecture | ✅ Implemented |
| 📡 JSON-RPC | LSP protocol communication | ✅ Implemented |

## Built With

- **Rust** - Programming language หลัก
- **Tokio** - Async runtime
- **Serde** - Serialization/Deserialization
- **Tracing** - Structured logging
- **Async-trait** - Async trait support

## Getting Started

### Prerequisites

- Rust 1.70+ ขึ้นไป
- Cargo package manager

### Installation

เพิ่ม dependency ใน `Cargo.toml`:

```toml
[dependencies]
wrikka-lsp = { workspace = true }
```

## Usage

```rust
use wrikka_lsp::{LspClientImpl, LspClient};
use wrikka_lsp::domain::value_objects::Position;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut client = LspClientImpl::new("my-client".to_string());
    
    // Initialize the client
    client.initialize("file:///path/to/workspace").await?;
    
    // Get completions
    let position = Position { line: 0, column: 0 };
    let completions = client.completion("file:///path/to/file.rs", position).await?;
    
    // Shutdown
    client.shutdown().await?;
    
    Ok(())
}
```

## Configuration

ตั้งค่าผ่าน environment variables:

```env
LSP_ENABLED=true
LSP_PORT=4389
```

## API Reference

### Domain Layer
- `CompletionItem` - Completion item with kind, detail, documentation
- `Diagnostic` - Code diagnostic with severity, range, message
- `Location` - File location with URI and range
- `Position` - Line and column position
- `Range` - Start and end position range
- `CompletionList` - Collection of completion items
- `DiagnosticCollection` - Collection of diagnostics with filtering

### Application Layer
- `LspClient` - Port interface for LSP operations
- `LspError` - Error type for LSP operations
- `LspResult<T>` - Result type for LSP operations

### Infrastructure Layer
- `LspClientImpl` - Concrete implementation with JSON-RPC
- `LspClientRegistry` - Registry for managing multiple LSP clients

## Comparison with Competitors

| Feature | wrikka-lsp | tower-lsp | lsp-client-rs |
|---------|-----------|-----------|---------------|
| Clean Architecture | ✅ | ❌ | ❌ |
| Domain Layer | ✅ | ❌ | ❌ |
| Port-based Design | ✅ | ❌ | ❌ |
| Async | ✅ | ✅ | ✅ |
| JSON-RPC | ✅ | ✅ | ✅ |
| TCP Connection | 🚧 | ✅ | ✅ |
| Unix Socket | 🚧 | ✅ | ✅ |
| Stdio | 🚧 | ✅ | ❌ |

## Development Status

### ✅ Completed
- Clean architecture structure (5 layers)
- Domain layer with entities, value objects, collections
- Application layer with ports
- Infrastructure layer with LspClientImpl
- JSON-RPC communication framework

### 🚧 In Progress
- LSP client implementation (stub methods ready)
- Connection handling (TCP, Unix, Stdio)
- Message serialization/deserialization

### ❌ TODO
- Use cases layer implementation
- Adapters layer implementation (CLI, REST)
- Shared utilities and constants
- Unit and integration tests
- Examples and documentation
- Error handling improvements
- Logging and tracing integration

## License

MIT
