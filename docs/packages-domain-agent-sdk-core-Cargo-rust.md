# wrikka-agent-core

## Overview

AI agent core runtime - conversation, provider, memory, workspace

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Domain |
| Path | `packages/domain/agent-sdk/core/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/newkub/wpackages> |
| Keywords | ai, agent, llm, sdk, runtime |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `examples`
- 📄 `examples/cost_tracking.rs`
- 📄 `examples/document_readers.rs`
- 📄 `examples/guardrails.rs`
- 📄 `examples/metadata_transformers.rs`
- 📄 `examples/quickstart.rs`
- 📄 `examples/rag_pipeline.rs`
- 📄 `examples/structured_output.rs`
- 📄 `fix_validators.mjs`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/bin`
- 📁 `src/channels`
- 📄 `src/lib.rs`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📁 `src/testing`
- 📁 `src/tools`

## Source Files

- `src/adapters/acp.rs`
- `src/adapters/auth/auth_middleware.rs`
- `src/adapters/auth/mod.rs`
- `src/adapters/cache/conversation_memory.rs`
- `src/adapters/cache/mod.rs`
- `src/adapters/cache/prompt_cache.rs`
- `src/adapters/cache/response_cache/backend.rs`
- `src/adapters/cache/response_cache/cache.rs`
- `src/adapters/cache/response_cache/mod.rs`
- `src/adapters/cache/response_cache/tests.rs`
- `src/adapters/cache/response_cache/types.rs`
- `src/adapters/config/mod.rs`
- `src/adapters/custom_tools.rs`
- `src/adapters/db/agent_repository.rs`
- `src/adapters/db/chromadb_store/mod.rs`
- `src/adapters/db/chromadb_store/operations.rs`
- `src/adapters/db/chromadb_store/queries.rs`
- `src/adapters/db/chromadb_store/tests.rs`
- `src/adapters/db/chromadb_store/types.rs`
- `src/adapters/db/conversation_repository.rs`
- `src/adapters/db/faiss_store.rs`
- `src/adapters/db/in_memory_vector_store/helpers.rs`
- `src/adapters/db/in_memory_vector_store/mod.rs`
- `src/adapters/db/in_memory_vector_store/operations.rs`
- `src/adapters/db/in_memory_vector_store/tests.rs`
- `src/adapters/db/lancedb_store/mod.rs`
- `src/adapters/db/lancedb_store/read_ops.rs`
- `src/adapters/db/lancedb_store/store_impl.rs`
- `src/adapters/db/lancedb_store/trait_impl.rs`
- `src/adapters/db/lancedb_store/types.rs`
- `src/adapters/db/lancedb_store/write_ops.rs`
- `src/adapters/db/milvus_store/mod.rs`
- `src/adapters/db/milvus_store/store.rs`
- `src/adapters/db/milvus_store/tests.rs`
- `src/adapters/db/milvus_store/types.rs`
- `src/adapters/db/milvus_store/vector_store_impl.rs`
- `src/adapters/db/mod.rs`
- `src/adapters/db/mongodb_store/mod.rs`
- `src/adapters/db/mongodb_store/read_ops.rs`
- `src/adapters/db/mongodb_store/store_impl.rs`

## Binaries

- `wrikka_agent`

## Quick Start

### Build

```bash
cargo build -p wrikka-agent-core
```

### Test

```bash
cargo test -p wrikka-agent-core
```

### Run

```bash
cargo run -p wrikka-agent-core
```

### Lint

```bash
cargo clippy -p wrikka-agent-core
```

### Documentation

```bash
cargo doc -p wrikka-agent-core --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-agent-core

AI agent core runtime — multi-provider LLM, conversation, memory, workspace, and workflow orchestration with Clean Architecture.

![Rust](https://img.shields.io/badge/Rust-1.83%2B-orange)
![Edition](https://img.shields.io/badge/Edition-2021-1976d2)
![License](https://img.shields.io/badge/License-MIT-388e3c)

```text
┌──────────────────────────────────────────────────────────────┐
│  wrikka-agent-core — AI Agent Runtime                        │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  modules/    agent, provider, conversation, memory     │  │
│  │              workspace, workflow, tool, cost, eval     │  │
│  │              guardrail, resilience, subagent, rag      │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  adapters/   external (LLM), db (vector), cache        │  │
│  │              http, auth, config, queue, storage        │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  presentation  di, cli, http, grpc, mcp, events, tui   │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  shared/     types, errors, utils, constants, ports    │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Get Started

1. Add Dependency — `Cargo.toml`
   ```toml
   [dependencies]
   wrikka-agent-core = { version = "0.1" }
   tokio = { version = "1", features = ["full"] }
   ```
   For all native LLM provider SDKs:
   ```toml
   wrikka-agent-core = { version = "0.1", features = ["all-providers"] }
   ```

2. Import And Initialize — `Rust`
   ```rust
   use wrikka_agent_core::adapters::external::OpenAiCompatibleProvider;
   use wrikka_agent_core::presentation::di::DIContainer;

   #[tokio::main]
   async fn main() -> anyhow::Result<()> {
       let provider = OpenAiCompatibleProvider::openai()?;
       // Wire services via DIContainer::builder()...
       Ok(())
   }
   ```

3. Run Examples — `terminal`
   ```bash
   cargo run --example quickstart --features all-providers
   cargo run --example structured_output --features all-providers
   cargo run --example rag_pipeline
   cargo run --example document_readers
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:robot.svg?color=%231976d2&width=16) | Multi-Provider LLM | 28+ providers (OpenAI, Anthropic, Gemini, Ollama, compatible) |
| ![icon](https://api.iconify.design/mdi:database-search.svg?color=%23388e3c&width=16) | Vector Stores | 10+ stores (in-memory, pgvector, Qdrant, Milvus, Chroma) |
| ![icon](https://api.iconify.design/mdi:file-document.svg?color=%23f57c00&width=16) | Document Readers | 10 formats (PDF, DOCX, XLSX, CSV, JSON, HTML, MD) |
| ![icon](https://api.iconify.design/mdi:code-json.svg?color=%237b1fa2&width=16) | Structured Output | JSON Schema validation with auto-retry and strict mode |
| ![icon](https://api.iconify.design/mdi:memory.svg?color=%23c2185b&width=16) | Memory and RAG | Conversation memory, vector store, embed pipeline |
| ![icon](https://api.iconify.design/mdi:account-group.svg?color=%230097a7&width=16) | Multi-Agent | Subagent supervisor, A2A server, human-in-loop approval |
| ![icon](https://api.iconify.design/mdi:chart-line.svg?color=%2300796b&width=16) | Cost and Observability | Token counting, cost tracking, metrics, guardrails |
| ![icon](https://api.iconify.design/mdi:transit-connection-variant.svg?color=%23ffa000&width=16) | Workflow Engine | Durable execution, in-memory engine, snapshot/replay |

## Usage

### Usage via SDK

```rust
use wrikka_agent_core::adapters::external::OpenAiCompatibleProvider;
use wrikka_agent_core::presentation::di::{DIContainer, ApplicationFactory};

let provider = OpenAiCompatibleProvider::openai()?;
let container = DIContainer::builder()
    .llm_provider(std::sync::Arc::new(provider))
    .build()?;
let app = ApplicationFactory::new(container);
```

```text
┌──────────────────────────────────────────────────────────────┐
│  $ cargo run --example quickstart --features all-providers   │
│  [INFO] Provider: OpenAI (gpt-4o)                            │
│  [INFO] Conversation: conv_abc123                            │
│  > Hello, what can you do?                                   │
│  < I can help with code, analysis, and more.                 │
│  [INFO] Tokens: 42 in / 18 out  Cost: $0.0023                │
└──────────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `OpenAiCompatibleProvider::openai()` | Create OpenAI provider | `api_key`, `base_url`, `model` | env `OPENAI_API_KEY` |
| `DIContainer::builder()` | Build DI container | `llm_provider`, `tool_service`, `memory_service` | none |
| `ApplicationFactory::new(container)` | Create application factory | `container` | none |

### Usage via HTTP API

```bash
cargo run -p wrikka-agent-core -- serve --port 8080
```

```text
┌──────────────────────────────────────────────────────────────┐
│  $ cargo run -p wrikka-agent-core -- serve --port 8080       │
│  [INFO] Server listening on 0.0.0.0:8080                     │
│  GET  /agents          POST /agents                          │
│  GET  /conversations   POST /conversations                  │
│  GET  /providers       GET  /tools                          │
│  GET  /memories        GET  /workflows                      │
│  GET  /costs           GET  /health                         │
└──────────────────────────────────────────────────────────────┘
```

### Usage via CLI

```bash
cargo run -p wrikka-agent-core -- agent list
cargo run -p wrikka-agent-core -- agent create --name my-agent
cargo run -p wrikka-agent-core -- provider list
cargo run -p wrikka-agent-core -- workflow run --id <workflow-id>
```

```text
┌──────────────────────────────────────────────────────────────┐
│  $ wrikka-agent-core agent list                              │
│  ID            NAME           PROVIDER       STATUS          │
│  agent_001     my-agent       openai         active          │
│  agent_002     coder          anthropic      active          │
│  agent_003     local          ollama         idle            │
└──────────────────────────────────────────────────────────────┘
```

### Usage via gRPC

```bash
cargo run -p wrikka-agent-core -- grpc --port 50051
```

### Usage via MCP

```bash
cargo run -p wrikka-agent-core -- mcp serve
```

## Links

- Repository: <https://github.com/newkub/wpackages>
- Source: <https://github.com/newkub/wpackages/blob/main/packages/domain/agent-sdk/core/Cargo.toml>
