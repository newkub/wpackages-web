# wrikka-agent-tools

## Overview

Agent tools - shell, browser, review, git

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Domain |
| Path | `packages/domain/agent-sdk/tools/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📁 `src/modules`

## Source Files

- `src/adapters/acp.rs`
- `src/adapters/cache/mod.rs`
- `src/adapters/config/mod.rs`
- `src/adapters/custom_tools.rs`
- `src/adapters/db/mod.rs`
- `src/adapters/external/mod.rs`
- `src/adapters/http/mod.rs`
- `src/adapters/mcp.rs`
- `src/adapters/mod.rs`
- `src/adapters/skills.rs`
- `src/lib.rs`
- `src/modules/mod.rs`
- `src/modules/tool/application/mod.rs`
- `src/modules/tool/domain/mod.rs`
- `src/modules/tool/domain/models/code_interpreter.rs`
- `src/modules/tool/domain/models/git.rs`
- `src/modules/tool/domain/models/git_service.rs`
- `src/modules/tool/domain/models/git_tests.rs`
- `src/modules/tool/domain/models/git_types.rs`
- `src/modules/tool/domain/models/mod.rs`
- `src/modules/tool/domain/models/review/mod.rs`
- `src/modules/tool/domain/models/review/model.rs`
- `src/modules/tool/domain/models/review/tests.rs`
- `src/modules/tool/domain/models/review/types.rs`
- `src/modules/tool/domain/models/tool.rs`
- `src/modules/tool/mod.rs`
- `src/modules/tool/ports/mod.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-agent-tools
```

### Test

```bash
cargo test -p wrikka-agent-tools
```

### Run

```bash
cargo run -p wrikka-agent-tools
```

### Lint

```bash
cargo clippy -p wrikka-agent-tools
```

### Documentation

```bash
cargo doc -p wrikka-agent-tools --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.
