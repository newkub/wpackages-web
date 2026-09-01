# wrikka-agent-core

- **Type:** RUST
- **Category:** Domain
- **Path:** `packages/domain/agent-sdk/core/Cargo.toml`

## Description

AI agent core runtime - conversation, provider, memory, workspace

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
