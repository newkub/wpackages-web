# @wrikka/terminal

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Desktop Apps |
| Path | `apps/desktop/terminal-desktop/package.json` |
| Version | `0.1.0` |

## Description

Wrikka Terminal - GPU-accelerated terminal emulator

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

## Scripts

| Script | Command |
| --- | --- |
| dev | `bunx --bun vite` |
| build | `tsc && bunx --bun vite build` |
| preview | `bunx --bun vite preview` |
| tauri | `tauri` |
| tauri:dev | `tauri dev` |
| tauri:build | `scripts\tauri-build.cmd` |
| typecheck:rs | `cargo check` |
| lint:rs | `cargo clippy -- -D warnings` |
| format:rs | `cargo fmt` |
| test:rs | `cargo test` |
| tui | `cargo run --bin wrikka-terminal-tui` |
| tui:build | `cargo build --bin wrikka-terminal-tui` |
| verify:rs | `cargo clippy -p wrikka-terminal -- -D warnings && cargo test -p wrikka-terminal` |
| clean:rs | `cargo clean` |

## Dependencies

| Name | Version |
| --- | --- |
| @tauri-apps/api | `^2.2.0` |
| @tauri-apps/plugin-shell | `^2.2.0` |
| @tauri-apps/plugin-store | `^2.2.0` |
| @tauri-apps/plugin-clipboard-manager | `^2.2.0` |
| solid-js | `^1.9.5` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @tauri-apps/cli | `^2.5.0` |
| @types/node | `^22.13.0` |
| typescript | `^5.7.3` |
| vite | `^6.0.11` |
| vite-plugin-solid | `^2.11.2` |

## README

# Terminal Desktop

A high-performance terminal emulator built with Rust, following Clean Architecture principles.

## Why

| Problem | Solution |
|---------|----------|
| Terminal emulators lack modern performance with GPU acceleration and clean architecture | Wrikka Terminal combines modern performance with GPU acceleration and clean architecture for maintainability and testability |
| Existing terminals lack feature parity with popular terminal emulators | Feature parity with popular terminals ensures familiar and complete functionality |
| Runtime errors plague terminal emulators due to lack of type safety | Type-safe async operations using Rust's powerful type system eliminates runtime errors |
| Hard to extend terminal emulators with custom features due to poor architecture | Extensible design with plugin system for custom features and future-proof architecture |
| Lack of comprehensive testing makes terminal emulators unreliable | Comprehensive testing with mock implementations ensures production-ready code |

## Key Concept ( What + Mental Model)

| Icon | Concept | Mental Model |
|-------|---------|--------------|
| <center>![cross-platform](https://api.iconify.design/mdi:monitor-multiple.svg?color=%234285f4&width=16)</center> | Cross-Platform Support | Windows, macOS, Linux support for universal compatibility |
| <center>![clean-architecture](https://api.iconify.design/mdi:layers.svg?color=%2360a5fa&width=16)</center> | Clean Architecture | Separation of concerns with clear layers for maintainability and testability |
| <center>![type-safe-async](https://api.iconify.design/mdi:lightning-bolt.svg?color=%23ff6b35&width=16)</center> | Type-Safe Async Operations | Rust's type system for async ensures safe concurrent operations |
| <center>![comprehensive-testing](https://api.iconify.design/mdi:test-tube.svg?color=%234caf50&width=16)</center> | Comprehensive Testing | Mock implementations for reliability ensures production-ready code |
| <center>![extensible-design](https://api.iconify.design/mdi:puzzle.svg?color=%239c27b0&width=16)</center> | Extensible Design | Plugin system for custom features enables future-proof architecture |
| <center>![theme-support](https://api.iconify.design/mdi:palette.svg?color=%23e91e63&width=16)</center> | Theme Support | Dark/Light theme toggle for customizable appearance |
| <center>![session-management](https://api.iconify.design/mdi:database.svg?color=%23795548&width=16)</center> | Session Management | Persistent sessions across runs for easy work resumption |

## When

| Icon | Use Case | Description |
|-------|----------|-------------|
| <center>![terminal](https://api.iconify.design/mdi:console.svg?color=%2303a8f4&width=16)</center> | Terminal Emulation | Cross-platform terminal with GPU acceleration |
| <center>![development](https://api.iconify.design/mdi:code-braces.svg?color=%23795548&width=16)</center> | Development | Terminal emulator for development and testing |
| <center>![testing](https://api.iconify.design/mdi:test-tube.svg?color=%2303a8f4&width=16)</center> | Testing | Test terminal applications and scripts |
| <center>![automation](https://api.iconify.design/mdi:cog.svg?color=%236663ee&width=16)</center> | Automation | Automate terminal workflows and tasks |
| <center>![performance](https://api.iconify.design/mdi:speedometer.svg?color=%234caf50&width=16)</center> | Performance | High-performance terminal with modern features |

## Principle ( Why + Rules )

| Icon | Principle | Rule |
|-------|-----------|------|
| <center>![purity](https://api.iconify.design/mdi:water.svg?color=%230ea5e9&width=16)</center> | Domain Purity | Domain layer must contain only pure functions - no IO, no state mutation, no external dependencies |
| <center>![separation](https://api.iconify.design/mdi:call-split.svg?color=%23e11d48&width=16)</center> | Separation of Concerns | Each layer has single responsibility: Domain (business logic), Application (orchestration), Adapters (side effects), Presentation (entry points) |
| <center>![dependency-inversion](https://api.iconify.design/mdi:arrow-u-down-left.svg?color=%2385430d&width=16)</center> | Dependency Inversion | Depend on abstractions (traits), not concretions - define ports in domain, implement adapters |
| <center>![immutability](https://api.iconify.design/mdi:lock.svg?color=%230f172a&width=16)</center> | Immutability | Prefer immutable data structures and pure transformations over mutable state |
| <center>![composition](https://api.iconify.design/mdi:merge.svg?color=%23663399&width=16)</center> | Composition over Inheritance | Compose small, focused functions and modules instead of deep inheritance hierarchies |

## Features

| Icon | Feature | Description | Benefit |
|-------|---------|-------------|---------|
| <center>![cross-platform](https://api.iconify.design/mdi:monitor-multiple.svg?color=%234285f4&width=16)</center> | Cross-Platform Support | Windows, macOS, Linux support | Universal compatibility |
| <center>![clean-architecture](https://api.iconify.design/mdi:layers.svg?color=%2360a5fa&width=16)</center> | Clean Architecture | Separation of concerns with clear layers | Maintainable and testable |
| <center>![type-safe-async](https://api.iconify.design/mdi:lightning-bolt.svg?color=%23ff6b35&width=16)</center> | Type-Safe Async Operations | Rust's type system for async | Safe concurrent operations |
| <center>![comprehensive-testing](https://api.iconify.design/mdi:test-tube.svg?color=%234caf50&width=16)</center> | Comprehensive Testing | Mock implementations for reliability | Production-ready code |
| <center>![extensible-design](https://api.iconify.design/mdi:puzzle.svg?color=%239c27b0&width=16)</center> | Extensible Design | Plugin system for custom features | Future-proof architecture |
| <center>![theme-support](https://api.iconify.design/mdi:palette.svg?color=%23e91e63&width=16)</center> | Theme Support | Dark/Light theme toggle | Customizable appearance |
| <center>![session-management](https://api.iconify.design/mdi:database.svg?color=%23795548&width=16)</center> | Session Management | Persistent sessions across runs | Resume work easily |

## Installation

```toml
[dependencies]
wrikka-terminal = { path = "../apps/terminal" }
```

## Usage

### Method 1: Usage via CLI

```bash
# Install dependencies
cargo build --release

# Run terminal
cargo run --release
```

#### CLI Commands

```bash
# Start terminal with default configuration
wrikka-terminal

# Start with custom shell
wrikka-terminal --shell /bin/bash

# Start with specific working directory
wrikka-terminal --working-directory /path/to/dir

# Enable debug logging
wrikka-terminal --log-level debug
```

## Configuration

```toml
[terminal]
font_family = "JetBrains Mono"
font_size = 14
scrollback_size = 10000

[theme]
mode = "dark"
colors = ["#1e1e1e", "#d4d4d4", "#569cd6"]

[shell]
program = "/bin/bash"
args = ["--login"]
```

## Reference

### CLI Reference

| Name | Description | Benefit |
|------|-------------|---------|
| [--shell](src/interface/cli.rs) | Specify shell program | Custom shell support |
| [--working-directory](src/interface/cli.rs) | Set working directory | Start in specific directory |
| [--log-level](src/interface/cli.rs) | Set logging level | Debug control |
| [--config](src/interface/cli.rs) | Specify config file | Custom configuration |
| [InitializeTerminal::execute](src/application/use_cases/initialize_terminal.rs) | Initialize terminal session | Terminal setup |
| [ResizeTerminal::execute](src/application/use_cases/resize_terminal.rs) | Resize terminal session | Dynamic resizing |
| [HandleInput::execute](src/application/use_cases/handle_input.rs) | Handle input events | Input processing |
| [HandleOutput::execute](src/application/use_cases/handle_output.rs) | Handle output events | Output processing |

## License

MIT License - see [LICENSE](../../LICENSE) for details.
