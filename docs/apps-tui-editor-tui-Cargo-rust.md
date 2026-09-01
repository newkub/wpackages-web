# wrikka-editor-tui

## Overview

Modal TUI text editor with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/editor-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |
| Homepage | <https://github.com/wrikka/wpackages> |
| Authors | Wrikka Team |
| Keywords | tui, terminal, editor, vim, modal |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `Cargo.lock`
- 📄 `Cargo.toml`
- 📁 `docs`
- 📄 `docs/architecture-diagram.md`
- 📄 `docs/cli.md`
- 📄 `docs/comparison.md`
- 📄 `docs/features.md`
- 📄 `docs/uxui-design.md`
- 📄 `FEATURES_PLAN.md`
- 📄 `moon.yml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📄 `src/main.rs`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📄 `summary.md`
- 📁 `tests`
- 📁 `tests/common`
- 📁 `tests/fixtures`
- 📁 `tests/helpers`
- 📄 `tests/integration_smoke.rs`
- 📁 `tests/modules`
- 📄 `TODO.md`

## Source Files

- `src/adapters/config/config_adapter.rs`
- `src/adapters/config/mod.rs`
- `src/adapters/db/memory_db.rs`
- `src/adapters/db/mod.rs`
- `src/adapters/external/git_adapter.rs`
- `src/adapters/external/lsp_adapter.rs`
- `src/adapters/external/mod.rs`
- `src/adapters/filesystem/directory.rs`
- `src/adapters/filesystem/filesystem_adapter.rs`
- `src/adapters/filesystem/file_operations.rs`
- `src/adapters/filesystem/metadata.rs`
- `src/adapters/filesystem/mod.rs`
- `src/adapters/file_adapter/adapter.rs`
- `src/adapters/file_adapter/mod.rs`
- `src/adapters/file_adapter/tests.rs`
- `src/adapters/file_adapter/types.rs`
- `src/adapters/http/http_client.rs`
- `src/adapters/http/mod.rs`
- `src/adapters/mod.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/modules/config/application/mod.rs`
- `src/modules/config/application/usecases/config_usecase.rs`
- `src/modules/config/application/usecases/mod.rs`
- `src/modules/config/domain/events/config_events.rs`
- `src/modules/config/domain/events/mod.rs`
- `src/modules/config/domain/mod.rs`
- `src/modules/config/domain/models/config.rs`
- `src/modules/config/domain/models/mod.rs`
- `src/modules/config/domain/operations/config_ops.rs`
- `src/modules/config/domain/operations/mod.rs`
- `src/modules/config/domain/validators/config_validation.rs`
- `src/modules/config/domain/validators/mod.rs`
- `src/modules/config/mod.rs`
- `src/modules/config/ports/config_repository.rs`
- `src/modules/config/ports/mod.rs`
- `src/modules/config/types/mod.rs`
- `src/modules/editor/application/mod.rs`
- `src/modules/editor/application/usecases/clipboard_operations.rs`
- `src/modules/editor/application/usecases/command_handler.rs`

## Binaries

- `wrikka-editor-tui`

## Quick Start

### Build

```bash
cargo build -p wrikka-editor-tui
```

### Test

```bash
cargo test -p wrikka-editor-tui
```

### Run

```bash
cargo run -p wrikka-editor-tui
```

### Lint

```bash
cargo clippy -p wrikka-editor-tui
```

### Documentation

```bash
cargo doc -p wrikka-editor-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

# Wrikka Editor TUI

Modal terminal text editor built on Clean Architecture principles with Vim-inspired keybindings and modern IDE features.

## Architecture

This project follows **Clean Architecture** with strict separation of concerns:

```
src/
├── shared/                    # Shared kernel - common utilities and types
│   ├── kernel/              # Core types, errors, events, utilities
│   │   ├── types/           # Core domain types (Position, Range, EditorMode, etc.)
│   │   ├── events/          # Domain events (BufferEvent, WindowEvent, etc.)
│   │   ├── errors.rs        # Kernel errors
│   │   └── utils.rs         # Common utilities
│   ├── errors/              # Domain-specific errors
│   │   └── domain_error.rs  # Domain error types
│   ├── types/               # Shared types
│   │   ├── app_error.rs     # Application error types
│   │   ├── id.rs            # ID types
│   │   ├── selection.rs     # Selection types
│   │   ├── branded_types.rs # Branded types (Timestamp, Version)
│   │   ├── file_path.rs     # File path wrapper
│   │   ├── text_edit.rs     # Text edit operations
│   │   └── file_metadata.rs # File metadata types
│   ├── utils/               # Shared utilities
│   └── constants/           # Application constants
├── modules/                  # Feature modules (Vertical Slice)
│   ├── editor/              # Core editing functionality
│   │   ├── domain/          # Pure business logic (100% pure)
│   │   │   ├── models/      # Immutable data models
│   │   │   ├── operations/  # Pure business functions
│   │   │   ├── validators/  # Domain validation
│   │   │   └── events/      # Domain events
│   │   ├── application/     # Business orchestration
│   │   │   ├── usecases/    # Specific workflows
│   │   │   └── workflows/  # Business workflows
│   │   ├── ports/           # External interfaces
│   │   │   ├── config_port.rs
│   │   │   ├── filesystem_port.rs
│   │   │   ├── lsp_port.rs
│   │   │   ├── plugin_port.rs
│   │   │   └── ui_event_port.rs
│   │   └── types/           # Module-specific types
│   ├── lsp/                 # Language Server Protocol
│   │   ├── domain/          # Pure LSP logic
│   │   ├── application/     # LSP orchestration
│   │   ├── ports/           # LSP interfaces
│   │   └── types/           # LSP types
│   ├── git/                 # Git operations
│   │   ├── domain/          # Pure Git logic
│   │   ├── application/     # Git orchestration
│   │   ├── ports/           # Git interfaces
│   │   └── types/           # Git types
│   ├── config/              # Configuration management
│   │   ├── domain/          # Pure config logic
│   │   ├── application/     # Config orchestration
│   │   ├── ports/           # Config interfaces
│   │   └── types/           # Config types
│   ├── search/              # Search functionality
│   │   ├── domain/          # Pure search logic
│   │   ├── application/     # Search orchestration
│   │   ├── ports/           # Search interfaces
│   │   └── types/           # Search types
│   ├── session/             # Session management
│   │   ├── domain/          # Pure session logic
│   │   ├── application/     # Session orchestration
│   │   ├── ports/           # Session interfaces
│   │   └── types/           # Session types
│   └── plugin/              # Plugin system
│       ├── domain/          # Pure plugin logic
│       ├── application/     # Plugin orchestration
│       ├── ports/           # Plugin interfaces
│       └── types/           # Plugin types
├── adapters/                 # External implementations (Infrastructure)
│   ├── config/              # Configuration adapter
│   │   └── config_adapter.rs
│   ├── db/                  # Database adapters
│   │   └── memory_db.rs
│   ├── external/            # External service adapters
│   │   ├── git_adapter.rs
│   │   └── lsp_adapter.rs
│   ├── filesystem/          # Filesystem operations
│   │   ├── filesystem_adapter.rs
│   │   ├── file_operations.rs
│   │   ├── metadata.rs
│   │   └── directory.rs
│   ├── http/                # HTTP client
│   │   └── http_client.rs
│   └── file_adapter.rs     # File adapter
└── presentation/             # UI entry points
    ├── cli/                 # Command-line interface
    │   ├── cli.rs
    │   ├── handlers.rs
    │   └── app_runner.rs
    ├── tui/                 # Terminal UI
    └── events/              # Event handling
```

### Core Principles

1. **Shared Layer** - Core kernel with types, errors, events, and utilities used across the application
2. **Modules Layer** - Feature modules with Vertical Slice Architecture, each containing domain (pure business logic), application (orchestration), ports (interfaces), and types
3. **Adapters Layer** - External implementations and side effects only (filesystem, HTTP, database, external services)
4. **Presentation Layer** - Entry points (CLI, TUI, events)

## Why

| Problem | Solution |
|---------|----------|
| Traditional terminal editors lack modern IDE features while GUI editors are resource-heavy | Wrikka Editor TUI provides lightweight, fast terminal editor with LSP support, Git integration, and fuzzy finding |
| Hard to find terminal editors with proper architecture and maintainability | Clean Architecture with strict separation of concerns ensures maintainability and testability |
| Terminal editors often lack code intelligence and modern development features | LSP integration provides IDE-level code intelligence without GUI overhead |
| File navigation in terminal editors is often cumbersome without fuzzy finding | Fuzzy file finder enables quick navigation without remembering paths |
| Hard to extend terminal editors with custom functionality without modifying core code | Extensible plugin system with native (Rust), Lua, and WASM support |

## Key Concept ( What + Mental Model)

| Icon | Concept | Mental Model |
|-------|---------|--------------|
| <center>![modal-editing](https://api.iconify.design/mdi:keyboard.svg?color=%23ff6b35&width=16)</center> | Modal Editing | Vim-inspired keybindings (normal, insert, visual modes) for efficient workflow |
| <center>![lsp-integration](https://api.iconify.design/mdi:language-typescript.svg?color=%232196f3&width=16)</center> | LSP Integration | IDE-level code intelligence with auto-completion, goto definition, hover, rename, diagnostics |
| <center>![git-integration](https://api.iconify.design/mdi:git.svg?color=%23f05032&width=16)</center> | Git Integration | Version control and visual diff in editor with gutter signs, blame, and hunk operations |
| <center>![fuzzy-finding](https://api.iconify.design/mdi:magnify.svg?color=%236663ee&width=16)</center> | Fuzzy File Finder | Fast file searching with fuzzy-matcher crate for quick navigation |
| <center>![plugin-system](https://api.iconify.design/mdi:puzzle.svg?color=%239c27b0&width=16)</center> | Plugin System | Native (Rust), Lua, and WASM plugin support for extensible custom functionality |
| <center>![clean-architecture](https://api.iconify.design/mdi:layers.svg?color=%2360a5fa&width=16)</center> | Clean Architecture | Strict architectural boundaries for maintainability and testability |

## When

| Icon | Use Case | Description |
|-------|----------|-------------|
| <center>![development](https://api.iconify.design/mdi:code-braces.svg?color=%23795548&width=16)</center> | Code Editing | Efficient text editing with modal interface |
| <center>![lsp](https://api.iconify.design/mdi:language-typescript.svg?color=%2303a8f4&width=16)</center> | IDE Features | LSP integration for code intelligence |
| <center>![git](https://api.iconify.design/mdi:git.svg?color=%23f05032&width=16)</center> | Git Integration | Version control and visual diff in editor |
| <center>![search](https://api.iconify.design/mdi:magnify.svg?color=%236663ee&width=16)</center> | File Navigation | Fast fuzzy finding and file search |
| <center>![plugins](https://api.iconify.design/mdi:puzzle.svg?color=%239c27b0&width=16)</center> | Extensibility | Plugin system for custom functionality |
| <center>![terminal](https://api.iconify.design/mdi:console.svg?color=%2303a8f4&width=16)</center> | Terminal Environment | Lightweight terminal-based development |

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
| <center>![modal-editing](https://api.iconify.design/mdi:keyboard.svg?color=%23ff6b35&width=16)</center> | Modal Editing | Vim-inspired keybindings (normal, insert, visual modes) | Familiar and efficient text editing workflow |
| <center>![lsp-integration](https://api.iconify.design/mdi:language-typescript.svg?color=%232196f3&width=16)</center> | LSP Integration | Auto-completion, goto definition, hover, rename, diagnostics | IDE-level code intelligence without GUI overhead |
| <center>![fuzzy-finding](https://api.iconify.design/mdi:magnify.svg?color=%236663ee&width=16)</center> | Fuzzy File Finder | Fast file searching with fuzzy-matcher crate | Quick file navigation without remembering paths |
| <center>![git-integration](https://api.iconify.design/mdi:git.svg?color=%23f05032&width=16)</center> | Git Integration | Gutter signs, blame, diff view, hunk operations | Visual code change tracking inside editor |
| <center>![multi-cursor](https://api.iconify.design/mdi:cursor-default.svg?color=%239c27b0&width=16)</center> | Multi-cursor Support | Edit multiple locations simultaneously | Efficient batch editing operations |
| <center>![plugin-system](https://api.iconify.design/mdi:puzzle.svg?color=%239c27b0&width=16)</center> | Plugin System | Native (Rust), Lua, and WASM plugin support | Extensible without modifying core editor |
| <center>![split-windows](https://api.iconify.design/mdi:window-split.svg?color=%23795548&width=16)</center> | Split Windows | Horizontal and vertical window splits | Multi-file editing in single terminal |
| <center>![command-palette](https://api.iconify.design/mdi:command.svg?color=%236663ee&width=16)</center> | Command Palette | Fuzzy command search and execution | Discover and run commands without memorization |
| <center>![syntax-highlighting](https://api.iconify.design/mdi:palette.svg?color=%23e91e63&width=16)</center> | Syntax Highlighting | Tree-sitter powered highlighting | Accurate language-aware coloring |
| <center>![floating-terminal](https://api.iconify.design/mdi:console.svg?color=%2303a8f4&width=16)</center> | Floating Terminal | Integrated terminal in floating window | Run commands without leaving editor |
| <center>![clean-architecture](https://api.iconify.design/mdi:layers.svg?color=%2360a5fa&width=16)</center> | Clean Architecture | Strict separation of concerns | Maintainable and testable codebase |

## Installation

```toml
[dependencies]
wrikka-editor-tui = { path = "../apps/editor-tui" }
```

## Usage

### Method 1: Usage via CLI

```bash
# Install dependencies
cargo build --release

# Run editor
cargo run --release
```

#### CLI Commands

```bash
# Open editor
wrikka-editor

# Open specific file
wrikka-editor file.txt

# Open directory
wrikka-editor ./project

# Open file at specific line
wrikka-editor file.txt:42
```

## Configuration

```toml
[editor]
tab_size = 4
use_spaces = true
auto_save = true
format_on_save = true

[ui]
theme = "dark"
show_line_numbers = true
show_whitespace = false
scroll_off = 5

[keybindings]
"<leader>ff" = "fuzzy_find_files"
"<leader>fs" = "save_file"
"gd" = "goto_definition"

[lsp]
enabled = true
auto_start = true

[plugins]
directory = "~/.local/share/wrikka/plugins"
enabled = ["my-plugin"]
```

## Reference

### CLI Reference

| Name | Description | Benefit |
|------|-------------|---------|
| [LoadFileUseCase::execute](src/application/use_cases/load_file.rs) | Load file into buffer | File loading |
| [SaveFileUseCase::execute](src/application/use_cases/save_file.rs) | Save active buffer | File saving |
| [FuzzyFindFilesUseCase::execute](src/application/use_cases/fuzzy_find.rs) | Open fuzzy file finder | File navigation |
| [SearchInFilesUseCase::execute](src/application/use_cases/search.rs) | Search across project files | Project search |

## License

MIT License - see [LICENSE](../../LICENSE) for details.

## Links

- Repository: <https://github.com/wrikka/wpackages>
- Homepage: <https://github.com/wrikka/wpackages>
- Source: <https://github.com/wrikka/wpackages/blob/main/apps/tui/editor-tui/Cargo.toml>
