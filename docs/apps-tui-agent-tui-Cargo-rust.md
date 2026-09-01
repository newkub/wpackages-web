# agent-tui

## Overview

Terminal-based AI assistant interface with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/agent-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/newkub/agent-tui> |
| Homepage | <https://github.com/newkub/agent-tui> |
| Authors | Wrikka Team |
| Keywords | tui, terminal, ai, assistant, cli |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `Cargo.lock`
- 📄 `Cargo.toml`
- 📁 `docs`
- 📁 `docs/api`
- 📁 `docs/examples`
- 📁 `docs/getting-started`
- 📁 `docs/guides`
- 📁 `docs/project`
- 📁 `docs/reference`
- 📄 `LICENSE.md`
- 📄 `moon.yml`
- 📄 `README.md`
- 📁 `spec`
- 📄 `spec/audit.spec.md`
- 📄 `spec/automation.spec.md`
- 📄 `spec/collaboration.spec.md`
- 📄 `spec/config.spec.md`
- 📄 `spec/diff.spec.md`
- 📄 `spec/guardrails.spec.md`
- 📄 `spec/headless.spec.md`
- 📄 `spec/index.md`
- 📄 `spec/macro.spec.md`
- 📄 `spec/metrics.spec.md`
- 📄 `spec/onboarding.spec.md`
- 📄 `spec/performance.spec.md`
- 📄 `spec/sandbox.spec.md`
- 📄 `spec/session.spec.md`
- 📄 `spec/share.spec.md`
- 📄 `spec/snippet.spec.md`

## Source Files

- `src/adapters/config/loader.rs`
- `src/adapters/config/mod.rs`
- `src/adapters/config/settings.rs`
- `src/adapters/db/encrypted_sqlite_repository.rs`
- `src/adapters/db/mod.rs`
- `src/adapters/db/share_link_repository.rs`
- `src/adapters/db/share_repository.rs`
- `src/adapters/external/dependency_parser.rs`
- `src/adapters/external/file_scanner.rs`
- `src/adapters/external/github_client.rs`
- `src/adapters/external/github_parser.rs`
- `src/adapters/external/git_operations.rs`
- `src/adapters/external/guardrail_checker.rs`
- `src/adapters/external/guardrail_manager.rs`
- `src/adapters/external/headless_command_executor.rs`
- `src/adapters/external/headless_session_manager.rs`
- `src/adapters/external/metrics_collector.rs`
- `src/adapters/external/mod.rs`
- `src/adapters/external/optimization_manager.rs`
- `src/adapters/external/response_cache.rs`
- `src/adapters/external/share_link_notifier.rs`
- `src/adapters/external/share_link_url_generator.rs`
- `src/adapters/external/snapshot_manager.rs`
- `src/adapters/external/subagent_manager.rs`
- `src/adapters/external/subagent_task_executor/mod.rs`
- `src/adapters/external/subagent_task_executor/prompts.rs`
- `src/adapters/external/subagent_task_executor/tests.rs`
- `src/adapters/external/subagent_task_queue.rs`
- `src/adapters/input/crossterm_handler.rs`
- `src/adapters/input/mod.rs`
- `src/adapters/mod.rs`
- `src/adapters/ui/mod.rs`
- `src/adapters/ui/ratatui_adapter/adapter.rs`
- `src/adapters/ui/ratatui_adapter/mod.rs`
- `src/adapters/ui/ratatui_adapter/tests.rs`
- `src/adapters/ui/ratatui_adapter/types.rs`
- `src/adapters/ui/renderer.rs`
- `src/adapters/ui/screen_reader.rs`
- `src/lib.rs`
- `src/main.rs`

## Binaries

- `agent-tui`

## Quick Start

### Build

```bash
cargo build -p agent-tui
```

### Test

```bash
cargo test -p agent-tui
```

### Run

```bash
cargo run -p agent-tui
```

### Lint

```bash
cargo clippy -p agent-tui
```

### Documentation

```bash
cargo doc -p agent-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

# agent-tui

> ![Status](https://img.shields.io/badge/status-in_development-red)

Terminal User Interface (TUI) AI coding assistant with Clean Architecture (FP-style) — integrates with 30+ AI providers, Git, LSP, and MCP.

[![Rust](https://img.shields.io/badge/Rust-1.70%2B-orange.svg)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                        agent-tui                                │
├──────────────┬──────────────────────────────────────────────────┤
│  presentation│  TUI (ratatui)  ·  CLI (clap)                    │
├──────────────┼──────────────────────────────────────────────────┤
│  modules     │  session · agent · git · lsp · mcp · subagent    │
│              │  guardrail · performance · audit · collaboration │
├──────────────┼──────────────────────────────────────────────────┤
│  adapters    │  SQLite · AI providers · Git · LSP · MCP         │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  types · errors · utils · constants              │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Clone And Build — `terminal`

   ```bash
   git clone https://github.com/your-org/rust-packages.git
   cd rust-packages/apps/tui/agent-tui
   cargo build --release
   ```

2. Run The Application — `terminal`

   ```bash
   cargo run -- run
   ```

3. Configure AI Providers — `env`

   ```bash
   export OPENAI_API_KEY=your_key
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:monitor-dashboard.svg?color=%234285f4&width=16) | TUI Interface | Terminal UI built with ratatui and crossterm |
| ![icon](https://api.iconify.design/mdi:database.svg?color=%23795548&width=16) | Session Persistence | SQLite-based session storage with full CRUD |
| ![icon](https://api.iconify.design/mdi:git.svg?color=%23f44336&width=16) | Git Integration | Status, log, diff, commit, branch management |
| ![icon](https://api.iconify.design/mdi:rocket-launch.svg?color=%2310b981&width=16) | Code Onboarding | Agentic codebase analysis with tech stack inference |
| ![icon](https://api.iconify.design/mdi:auto-fix.svg?color=%23f59e0b&width=16) | Automation | GitHub issue-to-PR workflow with smart branch naming |
| ![icon](https://api.iconify.design/mdi:console.svg?color=%236366f1&width=16) | Headless Mode | CLI mode for automation with multiple output formats |
| ![icon](https://api.iconify.design/mdi:robot.svg?color=%238b5cf6&width=16) | Subagents System | Specialized AI agents for review, bugs, refactoring |
| ![icon](https://api.iconify.design/mdi:shield-check.svg?color=%23ef4444&width=16) | Guardrails System | Security, quality, performance validation rules |
| ![icon](https://api.iconify.design/mdi:speedometer.svg?color=%2310b981&width=16) | Performance Monitoring | Real-time metrics and response time tracking |
| ![icon](https://api.iconify.design/mdi:clipboard-text.svg?color=%2360a5fa&width=16) | Audit System | Comprehensive audit logging for all operations |
| ![icon](https://api.iconify.design/mdi:account-group.svg?color=%239c27b0&width=16) | Collaboration | Multi-user session sharing and real-time collaboration |
| ![icon](https://api.iconify.design/mdi:compare.svg?color=%23ff9800&width=16) | Diff System | Advanced diff viewing and comparison |
| ![icon](https://api.iconify.design/mdi:code-braces.svg?color=%234caf50&width=16) | Macros System | Reusable code macros and templates |
| ![icon](https://api.iconify.design/mdi:shield.svg?color=%23e91e63&width=16) | Sandbox | Isolated execution environment for safe commands |
| ![icon](https://api.iconify.design/mdi:share-variant.svg?color=%23795548&width=16) | Share System | Share sessions and snippets with others |
| ![icon](https://api.iconify.design/mdi:file-code.svg?color=%232196f3&width=16) | Snippet System | Code snippet management and reuse |

## Usage

### Usage via CLI

```bash
# Run TUI interface (default)
cargo run

# Code onboarding
cargo run onboarding /path/to/project

# Issue-to-PR automation
cargo run automate owner/repo 123

# Headless mode
cargo run headless "/chat explain this code" --format text
cargo run headless "/read file.txt" --format json

# Subagents
cargo run subagent list
cargo run subagent execute code-reviewer "Review this code"

# Guardrails
cargo run guardrail "input to check" --guardrail-type security

# Session management
cargo run -- create-session --name "project-review"
cargo run -- list-sessions
```

### Usage via TUI Controls

- **Enter**: Send message to AI
- **Ctrl+C**: Exit application
- **Ctrl+S**: Save current session
- **Ctrl+N**: Create new session
- **Ctrl+L**: List sessions
- **Tab**: Switch between panels
- **Esc**: Cancel or go back
- **?**: Show help menu

### Usage via Programmatic API

```rust
use agent_tui::presentation::di::DIContainer;

let container = DIContainer::new();
let create_session = container.create_session_use_case();
let session = create_session.execute("my-session").await?;

let send_message = container.send_message_use_case();
let response = send_message.execute(session_id, message).await?;
```

## License

This project is licensed under the MIT License - see [LICENSE](../../LICENSE) for details.

## Links

- Repository: <https://github.com/newkub/agent-tui>
- Homepage: <https://github.com/newkub/agent-tui>
- Source: <https://github.com/newkub/agent-tui/blob/main/apps/tui/agent-tui/Cargo.toml>
