# agent-computer

## Overview

Main orchestration for computer automation with Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | CLI Apps |
| Path | `apps/cli/agent-computer/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.75` |
| License | `MIT` |
| Repository | <https://github.com/newkub/wai> |
| Authors | WAI Team |
| Keywords | automation, orchestration, computer, clean-architecture |

## Directory Structure

- 📁 `benches`
- 📄 `benches/action_benchmarks.rs`
- 📄 `benches/config_benchmarks.rs`
- 📄 `benches/error_benchmarks.rs`
- 📄 `benches/mod.rs`
- 📄 `benches/performance_benchmarks.rs`
- 📄 `Cargo.lock`
- 📄 `Cargo.toml`
- 📄 `Cargo_old.toml`
- 📄 `Config.toml`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📄 `src/main.rs`
- 📁 `src/modules`
- 📄 `src/prelude.rs`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📄 `summary.md`
- 📁 `tests`
- 📄 `tests/domain_tests.rs`
- 📄 `tests/infrastructure_tests.rs`
- 📄 `tests/integration_tests.rs`
- 📄 `TODO.md`

## Source Files

- `src/adapters/cli/commands/cli.rs`
- `src/adapters/cli/commands/command_handlers/audio.rs`
- `src/adapters/cli/commands/command_handlers/clipboard.rs`
- `src/adapters/cli/commands/command_handlers/file.rs`
- `src/adapters/cli/commands/command_handlers/keyboard.rs`
- `src/adapters/cli/commands/command_handlers/mod.rs`
- `src/adapters/cli/commands/command_handlers/mouse.rs`
- `src/adapters/cli/commands/command_handlers/system.rs`
- `src/adapters/cli/commands/command_handlers/utils.rs`
- `src/adapters/cli/commands/command_handlers/window.rs`
- `src/adapters/cli/commands/command_types.rs`
- `src/adapters/cli/commands/mod.rs`
- `src/adapters/cli/commands/recording_commands.rs`
- `src/adapters/cli/commands/system_commands.rs`
- `src/adapters/cli/commands/ui_commands.rs`
- `src/adapters/cli/handler/command_preparation.rs`
- `src/adapters/cli/handler/connection.rs`
- `src/adapters/cli/handler/main.rs`
- `src/adapters/cli/handler/mod.rs`
- `src/adapters/cli/handler/response_handling/core.rs`
- `src/adapters/cli/handler/response_handling/formatters/core.rs`
- `src/adapters/cli/handler/response_handling/formatters/csv_formatters.rs`
- `src/adapters/cli/handler/response_handling/formatters/file_formatters.rs`
- `src/adapters/cli/handler/response_handling/formatters/formatters.rs`
- `src/adapters/cli/handler/response_handling/formatters/formatters_main.rs`
- `src/adapters/cli/handler/response_handling/formatters/json_formatters.rs`
- `src/adapters/cli/handler/response_handling/formatters/plain_formatters.rs`
- `src/adapters/cli/handler/response_handling/formatters/system_formatters.rs`
- `src/adapters/cli/handler/response_handling/formatters/table.rs`
- `src/adapters/cli/handler/response_handling/formatters/table_formatters.rs`
- `src/adapters/cli/handler/response_handling/formatters.rs`
- `src/adapters/cli/handler/response_handling/mod.rs`
- `src/adapters/cli/mod.rs`
- `src/adapters/computer_control/in_memory/mod.rs`
- `src/adapters/computer_control/mod.rs`
- `src/adapters/config/mod.rs`
- `src/adapters/controllers/mod.rs`
- `src/adapters/daemon/daemon_config.rs`
- `src/adapters/daemon/daemon_service.rs`
- `src/adapters/daemon/mod.rs`

## Binaries

- `agent-computer`

## Quick Start

### Build

```bash
cargo build -p agent-computer
```

### Test

```bash
cargo test -p agent-computer
```

### Run

```bash
cargo run -p agent-computer
```

### Lint

```bash
cargo clippy -p agent-computer
```

### Documentation

```bash
cargo doc -p agent-computer --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.75` |

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

## Links

- Repository: <https://github.com/newkub/wai>
- Source: <https://github.com/newkub/wai/blob/main/apps/cli/agent-computer/Cargo.toml>
