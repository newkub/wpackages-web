# agent-sdk-integrations

## Overview

Integrations for agent-sdk: MCP OAuth, computer-use, web search/fetch

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Domain |
| Path | `packages/domain/agent-sdk/integrations/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/newkub/wpackages> |
| Keywords | integrations, mcp, oauth, web-search, computer-use |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `src`
- 📁 `src/acp`
- 📁 `src/adapters`
- 📄 `src/computer_use.rs`
- 📁 `src/custom_tools`
- 📄 `src/lib.rs`
- 📁 `src/mcp`
- 📄 `src/mcp_oauth.rs`
- 📁 `src/skills`
- 📄 `src/web_tools.rs`

## Source Files

- `src/acp/application/mod.rs`
- `src/acp/application/use_cases.rs`
- `src/acp/domain/events.rs`
- `src/acp/domain/mod.rs`
- `src/acp/domain/models/acp_connection.rs`
- `src/acp/domain/models/acp_editor.rs`
- `src/acp/domain/models/acp_message.rs`
- `src/acp/domain/models/mod.rs`
- `src/acp/domain/operations.rs`
- `src/acp/domain/validators.rs`
- `src/acp/mod.rs`
- `src/acp/ports/mod.rs`
- `src/adapters/acp/mod.rs`
- `src/adapters/acp/repositories/in_memory_repository.rs`
- `src/adapters/acp/repositories/mod.rs`
- `src/adapters/custom_tools/mod.rs`
- `src/adapters/custom_tools/repositories/file_system_repository.rs`
- `src/adapters/custom_tools/repositories/mod.rs`
- `src/adapters/mod.rs`
- `src/adapters/skills/mod.rs`
- `src/adapters/skills/repositories/file_system_repository.rs`
- `src/adapters/skills/repositories/mod.rs`
- `src/computer_use.rs`
- `src/custom_tools/application/mod.rs`
- `src/custom_tools/application/use_cases.rs`
- `src/custom_tools/domain/events.rs`
- `src/custom_tools/domain/mod.rs`
- `src/custom_tools/domain/models/custom_tool.rs`
- `src/custom_tools/domain/models/mod.rs`
- `src/custom_tools/domain/models/tool_definition.rs`
- `src/custom_tools/domain/models/tool_parameter.rs`
- `src/custom_tools/domain/operations.rs`
- `src/custom_tools/domain/validators.rs`
- `src/custom_tools/mod.rs`
- `src/custom_tools/ports/mod.rs`
- `src/lib.rs`
- `src/mcp/application/mod.rs`
- `src/mcp/application/use_cases.rs`
- `src/mcp/domain/events.rs`
- `src/mcp/domain/mod.rs`

## Quick Start

### Build

```bash
cargo build -p agent-sdk-integrations
```

### Test

```bash
cargo test -p agent-sdk-integrations
```

### Run

```bash
cargo run -p agent-sdk-integrations
```

### Lint

```bash
cargo clippy -p agent-sdk-integrations
```

### Documentation

```bash
cargo doc -p agent-sdk-integrations --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/newkub/wpackages>
- Source: <https://github.com/newkub/wpackages/blob/main/packages/domain/agent-sdk/integrations/Cargo.toml>
