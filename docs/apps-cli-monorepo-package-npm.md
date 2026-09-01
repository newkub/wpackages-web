# @wrikka/rust-wmonorepo

- **Type:** NPM
- **Category:** CLI Apps
- **Path:** `apps/cli/monorepo/package.json`

## Description

Monorepo management tool with Clean Architecture

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wmonorepo

Advanced monorepo management tool — better than Moonrepo and Turborepo. Parallel execution, intelligent caching, remote execution, distributed cache, and Git-based change detection.

![Rust](https://img.shields.io/badge/Rust-edition_2024-1976d2)
![clap](https://img.shields.io/badge/clap-4.6-0097a7)
![License](https://img.shields.io/badge/license-MIT%20OR%20Apache--2.0-00796b)

```text
┌──────────────────────────────────────────────────────────┐
│  wmonorepo                                               │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  CLI (clap)  ·  HTTP API (axum)  ·  Library API    │  │
│  └───────────────────────┬────────────────────────────┘  │
│                          ▼                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Init    │  │  Build   │  │  Test    │  │  Lint    │  │
│  │  Status  │  │  Clean   │  │  List    │  │  Cache   │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                          ▼                                │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Parallel Exec  ·  Remote Exec  ·  Dist Cache     │  │
│  │  Git Change Detection  ·  WASM Plugins  ·  Vault  │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Build — `cargo build` the CLI
   ```bash
   cargo build --release
   ```
2. Initialize A Workspace — create monorepo config
   ```bash
   wmonorepo init --name my-monorepo --auto-detect
   ```
3. Run Tasks — build, test, or lint projects
   ```bash
   wmonorepo build --parallel
   wmonorepo test --pattern "core*"
   wmonorepo status --detailed
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:flash.svg?color=%231976d2&width=16) | Parallel Execution | Run tasks in parallel across cores and machines |
| ![icon](https://api.iconify.design/mdi:cache.svg?color=%230097a7&width=16) | Intelligent Caching | Cache artifacts locally and remotely to skip unchanged work |
| ![icon](https://api.iconify.design/mdi:server.svg?color=%23f57c00&width=16) | Remote Execution | Distribute builds across remote workers via gRPC |
| ![icon](https://api.iconify.design/mdi:cloud.svg?color=%237b1fa2&width=16) | Distributed Cache | Share cache via S3, GCS, or R2 for team-wide sharing |
| ![icon](https://api.iconify.design/mdi:git.svg?color=%23c2185b&width=16) | Git Operations | Smart change detection and affected packages tracking |
| ![icon](https://api.iconify.design/mdi:puzzle.svg?color=%23388e3c&width=16) | Plugin System | Extensible with WASM-sandboxed plugins |
| ![icon](https://api.iconify.design/mdi:key.svg?color=%2300796b&width=16) | Secrets Management | Secure secrets from Vault integration |
| ![icon](https://api.iconify.design/mdi:check-circle.svg?color=%23ffa000&width=16) | Schema Validation | Validate configuration with JSON Schema |
| ![icon](https://api.iconify.design/mdi:package.svg?color=%231976d2&width=16) | Artifact Storage | Compressed artifact storage with tar, zstd, flate2 |
| ![icon](https://api.iconify.design/mdi:play-circle.svg?color=%230097a7&width=16) | Task Runner | Flexible task definition with dependency tracking |

## Usage

### Usage via CLI

```bash
# Initialize monorepo
wmonorepo init --name my-monorepo --auto-detect

# Build projects
wmonorepo build --projects core,api --parallel
wmonorepo build --force

# Test projects
wmonorepo test --pattern "core*" --parallel

# Lint and clean
wmonorepo lint --fix
wmonorepo clean --cache

# Status and list
wmonorepo status --detailed
wmonorepo list --detailed
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ wmonorepo build --parallel                            │
│  Scanning workspace ...                                  │
│  Found 12 projects, 8 tasks                              │
│  Building [core, api, web, cli] in parallel (8 jobs)     │
│  ✓ core    built in 2.3s   (cache: miss)                 │
│  ✓ api     built in 5.1s   (cache: miss)                 │
│  ✓ web     built in 1.2s   (cache: hit)                  │
│  ✓ cli     built in 3.4s   (cache: miss)                 │
│  Build completed: 4/4 tasks in 5.1s                      │
│                                                          │
│  $ wmonorepo status --detailed                           │
│  Workspace: my-monorepo  Projects: 12  Tasks: 8          │
│  Cache: enabled (local)  Git: main (ahead: 2)            │
└──────────────────────────────────────────────────────────┘
```

### Usage via Library

```rust
use wmonorepo::application::use_cases::*;
use wmonorepo::adapters::FileSystemWorkspaceRepository;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let repo = FileSystemWorkspaceRepository::new(".".into());
    let run_all = RunAllTasksUseCase::new(repo);
    let results = run_all.execute().await?;
    println!("Completed: {} tasks", results.len());
    Ok(())
}
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `init` | Initialize a new workspace | `name`, `path`, `auto_detect` | — |
| `build` | Build projects | `projects`, `force`, `parallel` | all projects |
| `test` | Test projects | `projects`, `pattern`, `parallel` | all projects |
| `lint` | Lint projects | `projects`, `fix` | all projects |
| `clean` | Clean projects | `projects`, `cache` | all projects |
| `status` | Show workspace status | `detailed` | — |
| `list` | List all projects | `detailed` | — |
