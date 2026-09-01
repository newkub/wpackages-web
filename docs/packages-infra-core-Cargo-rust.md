# wrikka-core

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Infra |
| Path | `packages/infra/core/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |
| Homepage | <https://github.com/wrikka/wpackages> |
| Authors | Wrikka Team |
| Keywords | infrastructure, errors, types, utilities |

## Description

Core infrastructure - shared kernel, HTTP client, config, git integration

## Quick Start

### Build

```bash
cargo build -p wrikka-core
```

### Test

```bash
cargo test -p wrikka-core
```

### Run

```bash
cargo run -p wrikka-core
```

## Dependencies

| Name | Version |
| --- | --- |
| reqwest | `workspace` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| tokio-test | `workspace` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-core

Shared infrastructure kernel — error types, utilities, HTTP client, config management, file walker, and Git integration.

![Rust](https://img.shields.io/badge/Rust-1.70%2B-orange)
![Edition](https://img.shields.io/badge/Edition-2021-1976d2)
![License](https://img.shields.io/badge/License-MIT-388e3c)

```text
┌──────────────────────────────────────────────────────────────┐
│  wrikka-core — Infrastructure Kernel                         │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  domain/         errors, types, utils, constants       │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  shared_kernel/  IntegrationResult, HttpClient,        │  │
│  │                  IntegrationConfig, load_config_from   │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  git/            GitAdapter, GitBlame, GitDiff,        │  │
│  │                  GitStatus                             │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Get Started

1. Add Dependency — `Cargo.toml`
   ```toml
   [dependencies]
   wrikka-core = { path = "../packages/infra/core" }
   ```

2. Import Items — `Rust`
   ```rust
   use wrikka_core::{
       InfrastructureError, InfrastructureResult,
       HttpClient, IntegrationConfig, load_config_from_env,
       WalkerConfig, walk_files,
       GitAdapter,
   };
   ```

3. Use Shared Kernel — `Rust`
   ```rust
   use wrikka_core::{HttpClient, load_config_from_env, WalkerConfig, walk_files};

   fn main() {
       let config = load_config_from_env();
       let client = HttpClient::new(config.github.base_url, config.github.api_key);
       let walker = WalkerConfig::new().with_max_depth(3).with_skip_hidden(true);
       let files = walk_files("./src", &walker).unwrap();
       println!("Found {} files", files.len());
   }
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:alert-circle-outline.svg?color=%23d32f2f&width=16) | Type-Safe Errors | FileSystemError and InfrastructureError with structured variants |
| ![icon](https://api.iconify.design/mdi:http.svg?color=%231976d2&width=16) | HTTP Client | Async HttpClient with GET, POST, PUT, DELETE and bearer auth |
| ![icon](https://api.iconify.design/mdi:cog-outline.svg?color=%237b1fa2&width=16) | Config From Env | load_config_from_env for Linear, Notion, GitHub, Supabase, Figma |
| ![icon](https://api.iconify.design/mdi:folder-search-outline.svg?color=%23f57c00&width=16) | File Walker | WalkerConfig with depth, hidden-skip, include/exclude patterns |
| ![icon](https://api.iconify.design/mdi:git.svg?color=%23388e3c&width=16) | Git Integration | GitAdapter with blame, diff, status operations |
| ![icon](https://api.iconify.design/mdi:link-variant.svg?color=%230097a7&width=16) | Integration Types | ServiceId, Status, Priority, IntegrationResult |

## Usage

### Usage via SDK

```rust
use wrikka_core::{HttpClient, IntegrationConfig, load_config_from_env};

#[tokio::main]
async fn main() -> wrikka_core::IntegrationResult<()> {
    let config = load_config_from_env();
    let client = HttpClient::new(config.github.base_url, config.github.api_key);
    let repos: serde_json::Value = client.get("/user/repos").await?;
    println!("{}", repos);
    Ok(())
}
```

```text
┌──────────────────────────────────────────────────────────────┐
│  $ cargo run -p wrikka-core --example http_client            │
│  [INFO] Config loaded from env                               │
│  [INFO] HTTP GET /user/repos                                 │
│  [INFO] Response: 200 OK                                     │
│  [INFO] Found 12 repositories                                │
└──────────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `HttpClient::new(base_url, api_key)` | Create async HTTP client | `base_url`, `api_key` | none |
| `load_config_from_env()` | Load integration config from env | none | env vars |
| `WalkerConfig::new()` | Create file walker config | `max_depth`, `skip_hidden`, `include`, `exclude` | depth=unlimited |
| `walk_files(path, config)` | Walk files in directory | `&str`, `&WalkerConfig` | none |
| `GitAdapter::new(path)` | Create Git adapter | `path: String` | none |

### Usage via File Walker

```rust
use wrikka_core::{WalkerConfig, walk_files, walk_directories, find_files_by_pattern};

let config = WalkerConfig::new()
    .with_max_depth(2)
    .with_skip_hidden(true)
    .with_include_patterns(vec!["*.rs".to_string()]);

let rust_files = walk_files("./src", &config)?;
let dirs = walk_directories("./src", &config)?;
let found = find_files_by_pattern("./src", &vec!["*.toml".to_string()])?;
```

```text
┌──────────────────────────────────────────────────────────────┐
│  $ cargo run -p wrikka-core --example walker                 │
│  [INFO] Walking ./src with max_depth=2                       │
│  Found 45 .rs files                                          │
│  Found 12 directories                                        │
│  Found 3 .toml files                                         │
└──────────────────────────────────────────────────────────────┘
```

### Usage via Git Adapter

```rust
use wrikka_core::GitAdapter;

let adapter = GitAdapter::new("./".to_string());
let status = adapter.status().await?;
let diff = adapter.diff("src/lib.rs").await?;
let blame = adapter.blame("src/lib.rs").await?;
```

```text
┌──────────────────────────────────────────────────────────────┐
│  $ cargo run -p wrikka-core --example git_status             │
│  Git Status:                                                 │
│    M  src/lib.rs                                             │
│    A  src/git.rs                                             │
│    D  src/old.rs                                             │
│  Git Diff (src/lib.rs):                                      │
│    +pub mod git;                                             │
│    +pub use git::{GitAdapter, GitBlame, GitDiff, GitStatus}; │
└──────────────────────────────────────────────────────────────┘
```
