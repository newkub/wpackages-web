# wcanvas-native-rust

- **Type:** RUST
- **Category:** WASM Apps
- **Path:** `apps/wasm/canvas/native-rust/Cargo.toml`

## Description

Native Rust implementation for wcanvas with storage, AI, and canvas core features

## README

# wcanvas-native-rust

Native Rust implementation for wcanvas with storage, AI, and canvas core features.

## Why

### Problem
Building canvas-based visual applications requires handling complex state management, real-time collaboration, and AI-powered features. Existing solutions often lack proper architecture, making maintenance and scaling difficult.

### Solution
wcanvas-native-rust provides a production-ready canvas platform built with Clean Architecture principles, offering:
- Type-safe domain modeling with Rust
- Async-first design with Tokio
- Real-time collaboration via WebSocket
- AI-powered design features
- SQLite persistence with migrations
- Modular, testable architecture

## When

| Icon | Use Case | Description |
|------|----------|-------------|
| 🎨 | Building Design Tools | Canvas-based applications like Figma, Sketch, or Miro |
| 🤝 | Real-time Collaboration | Multi-user editing with WebSocket sync |
| 🧠 | AI-Powered Features | Auto-layout, generative fill, design assistance |
| 💾 | Persistent Storage | SQLite-based canvas and shape persistence |
| 🖥️ | CLI Applications | Command-line tools for canvas operations |

## Key Concept

| Icon | Concept | Mental Model |
|------|---------|-------------|
| 🏗️ | Clean Architecture | Domain → Application → Adapters → Presentation layers |
| 📦 | Feature Modules | Vertical slice architecture: canvas, shapes, ai, collaboration |
| 🔌 | Ports & Adapters | Domain interfaces (ports) implemented by external adapters |
| 🎯 | Domain-Driven Design | Business logic lives in pure domain layer |
| ⚡ | Async-First | All operations use Tokio async/await |

## Principle

| Icon | Principle | Rule |
|------|-----------|------|
| 🎯 | Domain Purity | Domain layer has zero dependencies (100% pure) |
| 🔄 | Application Orchestration | Application layer coordinates domain logic and adapters |
| 🔌 | Adapter Isolation | Adapters handle all side effects (I/O, external APIs) |
| 🧪 | Testability | Pure domain logic is easily testable without infrastructure |
| 📐 | Type Safety | Leverage Rust's type system for compile-time guarantees |

## Features

| Icon | Feature | Description | Benefit |
|------|---------|-------------|---------|
| 🎨 | Canvas Core | Canvas, layer, and viewport management | Centralized canvas state |
| 🔷 | Shape System | Rectangle, circle, line, text shapes with operations | Rich shape manipulation |
| 💾 | SQLite Storage | Connection pooling, migrations, repository pattern | Reliable persistence |
| 🤖 | AI Integration | Auto-layout, generative fill, design assistant | AI-powered design workflows |
| 🌐 | HTTP API | REST endpoints with Axum framework | Easy integration |
| 🔌 | WebSocket | Real-time collaboration server | Multi-user editing |
| 🔌 | Plugin System | Hot-reloadable plugins | Extensible architecture |
| 🖥️ | CLI | Command-line interface with clap | Scriptable operations |

## Installation

Add this to your `Cargo.toml`:

```toml
[dependencies]
wcanvas-native-rust = { path = "apps/canvas/native-rust" }
```

## Usage

### Method 1: Usage via Programmatic API

```rust
use wcanvas_native_rust::{
    modules::canvas::{types::Bounds, application::usecases::CanvasManagement},
    modules::shapes::{types::{Rect, Color}, application::usecases::ShapeManagement},
};

// Create canvas
let bounds = Bounds::new(0.0, 0.0, 800.0, 600.0);
let canvas = canvas_management.create_canvas("My Canvas".to_string(), bounds).await?;

// Create shapes
let rect = Rect::new(10.0, 20.0, 100.0, 50.0);
let color = Color::rgb(255, 0, 0);
let shape = shape_management.create_rectangle(rect, color).await?;
```

### Method 2: Usage via CLI

```bash
# Create canvas
wcanvas create-canvas --name "My Canvas" --width 800 --height 600

# Add shape
wcanvas add-shape --type rectangle --x 10 --y 20 --width 100 --height 50 --color "#ff0000"

# Export canvas
wcanvas export --output canvas.svg
```

### Method 3: Usage via HTTP API

```bash
# Start server
wcanvas serve --port 3000

# Create canvas via REST
curl -X POST http://localhost:3000/api/canvases \
  -H "Content-Type: application/json" \
  -d '{"name": "My Canvas", "bounds": {"x": 0, "y": 0, "width": 800, "height": 600}}'
```

## Configuration

Configuration is handled through the adapters/config module:

```rust
use wcanvas_native_rust::adapters::config::Config;

let config = Config::from_file("config.toml")?;
```

## Development

### Build

```bash
cargo build
```

### Test

```bash
cargo test
```

### Lint

```bash
cargo clippy
```

### Format

```bash
cargo fmt
```

### Using Moon Tasks

```bash
# Build
moon run build

# Run tests
moon run test

# Verify (lint + typecheck + test)
moon run verify

# CI pipeline
moon run ci
```

## Architecture

The project follows Production FP Clean Architecture:

```
┌─────────────────────────────────────┐
│  Presentation (HTTP, CLI, WS)      │
├─────────────────────────────────────┤
│  Adapters (DB, HTTP, External)     │
├─────────────────────────────────────┤
│  Modules (Feature-based)            │
│  ├─ Canvas (Domain, App, Ports)    │
│  ├─ Storage (Domain, App, Ports)   │
│  ├─ AI (Domain, App, Ports)       │
│  ├─ Shapes (Domain, App, Ports)    │
│  ├─ Collaboration (Domain, App)     │
│  └─ Plugins (Domain, App)          │
├─────────────────────────────────────┤
│  Shared (Types, Utils, Errors)      │
└─────────────────────────────────────┘
```

### Module Structure

Each feature module follows vertical slice architecture:
- `types/`: Domain type aliases
- `domain/`: Pure business logic (models, operations, validators, events)
- `application/`: Orchestration layer (usecases, workflows, DTOs)
- `ports/`: Module-specific interfaces

## Reference

- [Clean Architecture Guide](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Rust Async Book](https://rust-lang.github.io/async-book/)
- [Tokio Documentation](https://tokio.rs/)
- [Axum Framework](https://github.com/tokio-rs/axum)

## License

MIT License - see LICENSE.md for details
