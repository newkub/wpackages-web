# @wrikka/rust-packages

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Root |
| Path | `package.json` |
| Version | `0.1.0` |

## Description

No description available.

## Quick Start

### Install

```bash
bun install
```

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `^2.5.11` |
| @moonrepo/cli | `^2.5.3` |
| turbo | `^2.10.12` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# rust-packages

Rust packages monorepo for Wrikka — Agent SDK, TUI apps, CLI tools, infrastructure, and foundation libraries built with Clean Architecture.

![Rust](https://img.shields.io/badge/Rust-1.70-ce422b)
![Moonrepo](https://img.shields.io/badge/Moonrepo-latest-7b1fa2)
![Cargo](https://img.shields.io/badge/Cargo-workspace-dea584)

### Workspaces

| Workspace | Description |
|-----------|-------------|
| [`apps/cli/agent-browser`](./apps/cli/agent-browser) | Browser automation agent — Chrome, Firefox, Safari, Edge |
| [`apps/cli/agent-capture`](./apps/cli/agent-capture) | Multi-platform agent capture CLI for browser, terminal, snippets |
| [`apps/cli/agent-computer`](./apps/cli/agent-computer) | Main orchestration for computer automation |
| [`apps/cli/monorepo`](./apps/cli/monorepo) | Advanced monorepo management tool (wmonorepo) |
| [`apps/cli/convert-web-to-desktop`](./apps/cli/convert-web-to-desktop) | Convert web applications to desktop using Tauri |
| [`apps/tui/agent-tui`](./apps/tui/agent-tui) | Terminal-based AI assistant interface |
| [`apps/tui/terminal-tui`](./apps/tui/terminal-tui) | Terminal emulator TUI app |
| [`apps/tui/task-tui`](./apps/tui/task-tui) | Tasks manager TUI app |
| [`apps/tui/files-tui`](./apps/tui/files-tui) | File explorer TUI app |
| [`apps/tui/git-tui`](./apps/tui/git-tui) | Git manager TUI app |
| [`apps/tui/api-tui`](./apps/tui/api-tui) | API client TUI app |
| [`apps/tui/database-tui`](./apps/tui/database-tui) | Database explorer TUI app |
| [`apps/tui/system-tui`](./apps/tui/system-tui) | System monitor TUI app |
| [`apps/tui/editor-tui`](./apps/tui/editor-tui) | Modal TUI text editor (wrikka-editor-tui) |
| [`apps/desktop/files-desktop`](./apps/desktop/files-desktop) | Desktop file explorer (Tauri) |
| [`packages/domain/agent-sdk/core`](./packages/domain/agent-sdk/core) | AI agent core runtime — conversation, provider, memory |
| [`packages/domain/agent-sdk/channels`](./packages/domain/agent-sdk/channels) | Communication channels — Slack, WhatsApp, Email |
| [`packages/domain/agent-sdk/security`](./packages/domain/agent-sdk/security) | Security module — audit log, crypto, RBAC, rate limiting |
| [`packages/domain/agent-sdk/integrations`](./packages/domain/agent-sdk/integrations) | MCP OAuth, computer-use, web search/fetch |
| [`packages/domain/agent-sdk/tools`](./packages/domain/agent-sdk/tools) | Agent tools — shell, browser, review, git |
| [`packages/lib/foundation/effect-core`](./packages/lib/foundation/effect-core) | Core effect system — pure types, cancellation |
| [`packages/lib/foundation/effect-http`](./packages/lib/foundation/effect-http) | HTTP effect executor |
| [`packages/lib/foundation/effect-cli`](./packages/lib/foundation/effect-cli) | CLI handler for effect system |
| [`packages/lib/foundation/fp`](./packages/lib/foundation/fp) | Functional programming library |
| [`packages/lib/foundation/error`](./packages/lib/foundation/error) | Error handling with Clean Architecture |
| [`packages/lib/foundation/utils`](./packages/lib/foundation/utils) | Utility library with Clean Architecture |
| [`packages/infra/core`](./packages/infra/core) | Core infrastructure — HTTP client, config, git |
| [`packages/infra/caching`](./packages/infra/caching) | High-performance concurrent caching with KV compression |
| [`packages/infra/filesystem`](./packages/infra/filesystem) | Filesystem utilities and operations |
| [`packages/infra/networking`](./packages/infra/networking) | Network communication utilities |
| [`packages/infra/observability`](./packages/infra/observability) | Monitoring and telemetry tools |
| [`packages/infra/storage`](./packages/infra/storage) | Storage abstractions with Clean Architecture |
| [`packages/lib/tools/code-metrics`](./packages/lib/tools/code-metrics) | Code analysis metrics and quality measures |
| [`packages/lib/tools/code-translation`](./packages/lib/tools/code-translation) | AI-powered code translation |
| [`packages/lib/tools/repo-mapping`](./packages/lib/tools/repo-mapping) | Repository map generation and analysis |
| [`packages/lib/tools/search-engine`](./packages/lib/tools/search-engine) | AI-friendly semantic search engine with AST parsing |
| [`packages/lib/tools/parser-engine`](./packages/lib/tools/parser-engine) | Advanced parser with multi-language support |
| [`packages/lib/tools/template-engine`](./packages/lib/tools/template-engine) | General-purpose template engine |
| [`packages/lib/tools/reporter`](./packages/lib/tools/reporter) | Generic reporting library with multiple formats |
| [`packages/lib/tools/rules-engine`](./packages/lib/tools/rules-engine) | Rules engine for code analysis and linting |
| [`packages/lib/tools/lsp`](./packages/lib/tools/lsp) | LSP integration — completion, diagnostics, go-to-definition |
| [`packages/lib/tools/cli-builder`](./packages/lib/tools/cli-builder) | Clean architecture CLI builder library |
| [`packages/lib/tools/perf`](./packages/lib/tools/perf) | Performance monitoring and benchmarking tools |
| [`packages/lib/file-ops`](./packages/lib/file-ops) | File operations utilities (wrikka-file-ops) |
| [`packages/lib/tauri-plugin-wrikka-fs`](./packages/lib/tauri-plugin-wrikka-fs) | Tauri filesystem plugin for Wrikka Desktop |
| [`packages/domain/terminal-sdk`](./packages/domain/terminal-sdk) | Shared terminal SDK — core domain, ports, adapters |
| [`packages/lib/ratatui-ui`](./packages/lib/ratatui-ui) | Shared TUI component library for Ratatui — 20 reusable widgets |
