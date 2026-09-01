# agent-computer

- **Type:** RUST
- **Category:** CLI Apps
- **Path:** `apps/cli/agent-computer/Cargo.toml`

## Description

Main orchestration for computer automation with Clean Architecture

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# agent-computer

Main orchestration for computer automation with Clean Architecture — coordinates keyboard, mouse, and screen interactions across Windows, Linux, and macOS.

![Rust](https://img.shields.io/badge/Rust-1.75%2B-1976d2)
![enigo](https://img.shields.io/badge/enigo-0.2--rc2-0097a7)
![clap](https://img.shields.io/badge/clap-4.6-00796b)

```text
┌──────────────────────────────────────────────────────────┐
│  agent-computer                                          │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  CLI (clap)  ·  TUI (ratatui)  ·  Library API     │  │
│  └───────────────────────┬────────────────────────────┘  │
│                          ▼                                │
│  ┌───────────────┐  ┌───────────────┐  ┌──────────────┐  │
│  │  Keyboard     │  │  Mouse        │  │  Screen      │  │
│  │  (enigo)      │  │  (enigo)      │  │  (screenshots)│  │
│  └───────────────┘  └───────────────┘  └──────────────┘  │
│                          ▼                                │
│          ┌──────────────────────────────┐                 │
│          │  System Info (sysinfo)       │                 │
│          │  Config (figment + ENV)      │                 │
│          └──────────────────────────────┘                 │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Build — `cargo build` the project
   ```bash
   cargo build --release
   cargo run --release
   ```
2. Run With Config — optional TOML or environment variables
   ```bash
   cargo run --release -- --config Config.toml
   export AGENT_TIMEOUT=60
   ```
3. Verify — run tests and benchmarks
   ```bash
   cargo test
   cargo clippy --all-targets --all-features
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:robot.svg?color=%231976d2&width=16) | Computer Orchestration | Unified coordination for keyboard, mouse, and screen |
| ![icon](https://api.iconify.design/mdi:keyboard.svg?color=%230097a7&width=16) | Keyboard & Mouse Control | Programmatic input via enigo with cross-platform support |
| ![icon](https://api.iconify.design/mdi:monitor.svg?color=%23f57c00&width=16) | Screen Capture | Screenshot and analyze screen content with screenshots crate |
| ![icon](https://api.iconify.design/mdi:chart-line.svg?color=%237b1fa2&width=16) | System Monitoring | Real-time system metrics via sysinfo |
| ![icon](https://api.iconify.design/mdi:cog.svg?color=%23c2185b&width=16) | Configuration | Flexible TOML and environment variable configuration |
| ![icon](https://api.iconify.design/mdi:test-tube.svg?color=%23388e3c&width=16) | Comprehensive Testing | Unit, integration, and benchmark tests with criterion |
| ![icon](https://api.iconify.design/mdi:scissors-cutting.svg?color=%2300796b&width=16) | Snipping Tool | Built-in snipping tool feature for region capture |

## Usage

### Usage via CLI

```bash
# Run the agent
cargo run --release

# Run with custom config
cargo run --release -- --config Config.toml
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ agent-computer                                        │
│  Starting agent-computer v0.1.0                          │
│  Platform: windows  CPU: 8 cores  RAM: 16 GB             │
│  Application started successfully                        │
│                                                          │
│  $ agent-computer --config Config.toml                   │
│  Loading config from Config.toml ...                     │
│  Timeout: 60s  Retries: 3  Debug: false                  │
│  Application started successfully                        │
└──────────────────────────────────────────────────────────┘
```

### Usage via Library

```rust
use agent_computer::Application;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let app = Application::new();
    println!("{} v{}", Application::name(), Application::version());
    Ok(())
}
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `Application::new()` | Create automation instance | — | — |
| `--config` | Specify config file path | TOML file path | — |
| `AGENT_TIMEOUT` | Operation timeout in seconds | env var | `60` |
| `AGENT_DEBUG` | Enable debug logging | env var | `false` |
