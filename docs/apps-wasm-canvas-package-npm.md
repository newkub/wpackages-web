# @wrikka/wwhiteboard

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | WASM Apps |
| Path | `apps/wasm/canvas/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |

## Description

Whiteboard application with Rust WASM and SolidJS

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
| lint | `biome check` |
| format | `biome check --write` |
| test | `vitest run` |
| verify | `bun run lint && bun run typecheck && bun run test` |
| ci | `bun run verify && bun run build` |
| clean | `cargo clean` |
| format:check | `cargo fmt -- --check` |
| lint:fix | `cargo clippy --fix` |
| test:unit | `cargo test --lib` |
| test:integration | `cargo test --test integration` |
| test:e2e | `cargo test --features e2e` |
| verify:full | `cargo check && cargo clippy && cargo test --lib && cargo test --test integration && cargo test --features e2e && cargo build --release` |
| ci:full | `bun run verify:full` |

## README

# Wrikka Canvas

Canvas-based visual application workspace with Clean Architecture - Modern collaborative canvas platform.

## Why

| Problem | Solution |
|---------|----------|
| **Single-purpose design tools** that limit creative workflows | **Modular canvas platform** supporting multiple use cases and extensions |
| **Poor architecture** making maintenance and testing difficult | **Clean Architecture** with clear separation of concerns and testable code |
| **Limited collaboration** features in existing tools | **Real-time collaboration** with persistent storage and version history |
| **Manual design processes** lacking intelligent assistance | **AI-powered design assistance** for smart suggestions and automation |

## When

| <center>![icon](https://api.iconify.design/mdi:draw.svg?color=%234CAF50&width=16)</center> | Use Case | Description |
|---------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:palette.svg?color=%232196F3&width=16)</center> | **Digital Design** | Create UI/UX designs, wireframes, and prototypes |
| <center>![icon](https://api.iconify.design/mdi:chart-mindmap.svg?color=%23FF9800&width=16)</center> | **Mind Mapping** | Visual brainstorming and knowledge organization |
| <center>![icon](https://api.iconify.design/mdi:account-group.svg?color=%239C27B0&width=16)</center> | **Collaborative Work** | Real-time team collaboration on visual projects |
| <center>![icon](https://api.iconify.design/mdi:presentation.svg?color=%23E91E63&width=16)</center> | **Presentations** | Create and deliver visual presentations |

## Key Concept

| <center>![icon](https://api.iconify.design/mdi:architecture.svg?color=%234CAF50&width=16)</center> | Concept | Mental Model |
|---------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:layers.svg?color=%232196F3&width=16)</center> | **Clean Architecture** | Domain → Application → Infrastructure → Adapters layers |
| <center>![icon](https://api.iconify.design/mdi:grid.svg?color=%23FF9800&width=16)</center> | **Canvas Grid System** | Infinite canvas with coordinate-based positioning |
| <center>![icon](https://api.iconify.design/mdi:database.svg?color=%239C27B0&width=16)</center> | **Persistent Storage** | SQLite-based storage with automatic versioning |
| <center>![icon](https://api.iconify.design/mdi:brain.svg?color=%23E91E63&width=16)</center> | **AI Enhancement** | Context-aware design suggestions and automation |

## Principle ( Why + Rules )

| Icon | Principle | Rule |
|-------|-----------|------|
| <center>![purity](https://api.iconify.design/mdi:water.svg?color=%230ea5e9&width=16)</center> | Domain Purity | Domain layer must contain only pure functions - no IO, no state mutation, no external dependencies |
| <center>![separation](https://api.iconify.design/mdi:call-split.svg?color=%23e11d48&width=16)</center> | Separation of Concerns | Each layer has single responsibility: Domain (business logic), Application (orchestration), Adapters (side effects), Presentation (entry points) |
| <center>![dependency-inversion](https://api.iconify.design/mdi:arrow-u-down-left.svg?color=%2385430d&width=16)</center> | Dependency Inversion | Depend on abstractions (traits), not concretions - define ports in domain, implement adapters |
| <center>![immutability](https://api.iconify.design/mdi:lock.svg?color=%230f172a&width=16)</center> | Immutability | Prefer immutable data structures and pure transformations over mutable state |
| <center>![composition](https://api.iconify.design/mdi:merge.svg?color=%23663399&width=16)</center> | Composition over Inheritance | Compose small, focused functions and modules instead of deep inheritance hierarchies |

## Features

| <center>![icon](https://api.iconify.design/mdi:draw.svg?color=%234CAF50&width=16)</center> | Feature | Description | Benefit |
|---------|----------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:vector-square.svg?color=%232196F3&width=16)</center> | **Canvas Core** | High-performance rendering and interaction system | Smooth, responsive canvas experience |
| <center>![icon](https://api.iconify.design/mdi:database.svg?color=%23FF9800&width=16)</center> | **Persistent Storage** | SQLite-based storage with version history | Never lose work with automatic backups |
| <center>![icon](https://api.iconify.design/mdi:robot.svg?color=%239C27B0&width=16)</center> | **AI Integration** | AI-powered design assistance and suggestions | Smart design recommendations |
| <center>![icon](https://api.iconify.design/mdi:sync.svg?color=%23E91E63&width=16)</center> | **Real-time Collaboration** | Multi-user editing with conflict resolution | Work together seamlessly |
| <center>![icon](https://api.iconify.design/mdi:palette.svg?color=%234CAF50&width=16)</center> | **Rich Drawing Tools** | Pens, shapes, text, and advanced drawing tools | Express creativity with professional tools |
| <center>![icon](https://api.iconify.design/mdi:layers-outline.svg?color=%232196F3&width=16)</center> | **Layer Management** | Organize elements with layers and groups | Complex designs made manageable |
| <center>![icon](https://api.iconify.design/mdi:history.svg?color=%23FF9800&width=16)</center> | **Version History** | Track changes and restore previous versions | Experiment without fear |
| <center>![icon](https://api.iconify.design/mdi:export.svg?color=%239C27B0&width=16)</center> | **Export Options** | Export to PNG, SVG, PDF, and other formats | Share work in any format needed |
| <center>![icon](https://api.iconify.design/mdi:puzzle.svg?color=%23E91E63&width=16)</center> | **Plugin System** | Extensible architecture for custom tools | Tailor the platform to specific needs |
| <center>![icon](https://api.iconify.design/mdi:theme-light-dark.svg?color=%234CAF50&width=16)</center> | **Theme Support** | Light and dark themes with customization | Work comfortably in any environment |
| <center>![icon](https://api.iconify.design/mdi:keyboard.svg?color=%232196F3&width=16)</center> | **Keyboard Shortcuts** | Comprehensive keyboard navigation | Work efficiently with power-user features |
| <center>![icon](https://api.iconify.design/mdi:gesture.svg?color=%23FF9800&width=16)</center> | **Touch Support** | Native touch and stylus support | Natural interaction on tablets |

## Installation

```bash
# Install from source
cargo install --path packages/canvas/native-rust

# Build the workspace
cargo build --release --workspace

# Run tests
cargo test --workspace
```

## Usage

### Method 1: Usage via CLI

```bash
# Start the canvas server
wcanvas-native-rust serve

# Create a new canvas
wcanvas-native-rust create "My Design"

# List existing canvases
wcanvas-native-rust list

# Open a specific canvas
wcanvas-native-rust open <canvas-id>

# Export canvas to file
wcanvas-native-rust export <canvas-id> --format png --output design.png
```

### Method 2: Usage via Programmatic API

```rust
use wcanvas_native_rust::{
    modules::canvas_core::domain::entities::Canvas,
    modules::storage::infrastructure::SqliteStorage,
    presentation::server::CanvasServer,
};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Initialize storage
    let storage = SqliteStorage::new("./data/canvas.db").await?;
    
    // Create a new canvas
    let canvas = Canvas::new("My Design", 1920, 1080);
    let canvas_id = storage.save_canvas(&canvas).await?;
    
    // Start the server
    let server = CanvasServer::new(storage);
    server.serve("127.0.0.1:3000").await?;
    
    Ok(())
}
```

## Configuration

Configuration is managed through TOML files:

```toml
[canvas]
width = 1920
height = 1080
background = "#ffffff"
grid_enabled = true
grid_size = 20

[storage]
path = "./data"
auto_save = true
auto_save_interval = 60
max_versions = 100

[ai]
enabled = true
api_key = "your-openai-api-key"
model = "gpt-4o-mini"
suggestions_enabled = true

[server]
host = "127.0.0.1"
port = 3000
cors_enabled = true

[collaboration]
real_time_enabled = true
max_users = 50
conflict_resolution = "last-write-wins"
```

## Reference

### Architecture Layers

1. **Domain Layer**: Core business logic (Canvas, Shape, Layer entities)
2. **Application Layer**: Use cases and orchestration (CanvasUseCase, ShapeUseCase)
3. **Infrastructure Layer**: External services (SqliteStorage, AIProvider)
4. **Adapters Layer**: External interfaces (HTTP API, WebSocket handlers)

### Module Structure

```
src/
├── adapters/           # HTTP API, WebSocket handlers
├── modules/           # Core business modules
│   ├── canvas_core/   # Canvas rendering and interaction
│   ├── storage/       # SQLite storage infrastructure
│   └── ai/           # AI-powered design assistance
├── presentation/      # CLI and server interfaces
└── lib.rs            # Library exports and configuration
```

### Dependencies

Key external dependencies:
- **Async Runtime**: Tokio for async operations
- **Database**: Rusqlite for SQLite storage
- **HTTP Server**: Axum for REST API
- **AI Integration**: Reqwest for OpenAI API calls
- **Math**: Ultraviolet for vector operations
- **Serialization**: Serde for JSON/TOML handling

## License

MIT License - See LICENSE.md for details.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request
