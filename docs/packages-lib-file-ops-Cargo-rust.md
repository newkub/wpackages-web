# wrikka-file-ops

## Overview

wrikka-file-ops Rust workspace at packages/lib/file-ops/Cargo.toml

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Libraries |
| Path | `packages/lib/file-ops/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/veerapong/file-ops> |
| Authors | Veerapong |

## Directory Structure

- 📄 `bench-features.md`
- 📄 `Cargo.lock`
- 📄 `Cargo.toml`
- 📄 `deny.toml`
- 📄 `LICENSE`
- 📄 `README.md`
- 📄 `rust-toolchain.toml`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📄 `src/main.rs`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📁 `tests`
- 📁 `tests/adapters`
- 📁 `tests/common`
- 📁 `tests/e2e`
- 📄 `tests/integration.rs`
- 📁 `tests/modules`

## Source Files

- `src/adapters/config/env.rs`
- `src/adapters/config/mod.rs`
- `src/adapters/filesystem/archive/archive.rs`
- `src/adapters/filesystem/archive/compress.rs`
- `src/adapters/filesystem/archive/convert.rs`
- `src/adapters/filesystem/archive/mod.rs`
- `src/adapters/filesystem/basic/copy.rs`
- `src/adapters/filesystem/basic/link.rs`
- `src/adapters/filesystem/basic/mod.rs`
- `src/adapters/filesystem/basic/owner.rs`
- `src/adapters/filesystem/basic/quota.rs`
- `src/adapters/filesystem/basic/touch.rs`
- `src/adapters/filesystem/basic/validate.rs`
- `src/adapters/filesystem/compare/compare.rs`
- `src/adapters/filesystem/compare/dir_diff.rs`
- `src/adapters/filesystem/compare/mod.rs`
- `src/adapters/filesystem/compare/patch.rs`
- `src/adapters/filesystem/crypto/crypto.rs`
- `src/adapters/filesystem/crypto/mod.rs`
- `src/adapters/filesystem/metadata/acl.rs`
- `src/adapters/filesystem/metadata/baseline.rs`
- `src/adapters/filesystem/metadata/manifest.rs`
- `src/adapters/filesystem/metadata/mod.rs`
- `src/adapters/filesystem/metadata/snapshot.rs`
- `src/adapters/filesystem/metadata/xattr.rs`
- `src/adapters/filesystem/mod.rs`
- `src/adapters/filesystem/read/hash.rs`
- `src/adapters/filesystem/read/helpers.rs`
- `src/adapters/filesystem/read/line_reader.rs`
- `src/adapters/filesystem/read/mod.rs`
- `src/adapters/filesystem/read/type_detect.rs`
- `src/adapters/filesystem/repository/mod.rs`
- `src/adapters/filesystem/repository/repository.rs`
- `src/adapters/filesystem/search/dedup.rs`
- `src/adapters/filesystem/search/du.rs`
- `src/adapters/filesystem/search/mod.rs`
- `src/adapters/filesystem/search/search.rs`
- `src/adapters/filesystem/search/tree.rs`
- `src/adapters/filesystem/sync/backup.rs`
- `src/adapters/filesystem/sync/mod.rs`

## Binaries

- `wrikka-file-ops`
- `file-ops`

## Quick Start

### Build

```bash
cargo build -p wrikka-file-ops
```

### Test

```bash
cargo test -p wrikka-file-ops
```

### Run

```bash
cargo run -p wrikka-file-ops --bin wrikka-file-ops
```
```bash
cargo run -p wrikka-file-ops --bin file-ops
```

### Lint

```bash
cargo clippy -p wrikka-file-ops
```

### Documentation

```bash
cargo doc -p wrikka-file-ops --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-file-ops

Cross-platform file operations CLI — 59 commands in one binary, built with Functional Clean Architecture and a 100% pure domain core.

![Rust](https://img.shields.io/badge/Rust-stable-orange)
![Edition](https://img.shields.io/badge/Edition-2021-1976d2)
![License](https://img.shields.io/badge/License-MIT-388e3c)
![Platforms](https://img.shields.io/badge/Platforms-Win%20%7C%20macOS%20%7C%20Linux-0097a7)

```text
┌──────────────────────────────────────────────────────────────┐
│  file-ops — File Operations CLI                              │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  shared/      kernel utils, constants (pure)           │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  modules/     feature modules: types, domain,          │  │
│  │               ports, application slice                 │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  adapters/    concrete port implementations (I/O)      │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  presentation/  entry points (CLI, HTTP, events)       │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Get Started

1. Install Rust (stable) — `rustup`
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   rustup component add rustfmt clippy rust-src
   ```

2. Build Release Binary — `cargo build`
   ```bash
   cargo build --release
   # Binary at target/release/file-ops
   ```

3. Sanity Check — `file-ops --help`
   ```bash
   ./target/release/file-ops --help
   ./target/release/file-ops --version
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/lucide:file-plus-2.svg?color=%231976d2&width=16) | Core File Ops | create, delete, rename, move, read, write, list, view |
| ![icon](https://api.iconify.design/lucide:git-merge.svg?color=%237b1fa2&width=16) | Content Ops | merge, split, search, filter, diff, hash, checksum |
| ![icon](https://api.iconify.design/lucide:folder-tree.svg?color=%23f57c00&width=16) | Tree Ops | tree, copy, sync, deduplicate, du, watch, diff-dir |
| ![icon](https://api.iconify.design/lucide:shield-check.svg?color=%23d32f2f&width=16) | Security and Cleanup | shred, scrub, trash, untrash, harden, permission, owner |
| ![icon](https://api.iconify.design/lucide:file-search.svg?color=%230097a7&width=16) | Inspection | view, wc, head, tail, mime, xattr, acl |
| ![icon](https://api.iconify.design/lucide:archive.svg?color=%2300796b&width=16) | Archiving | compress, decompress, archive, extract, convert |
| ![icon](https://api.iconify.design/lucide:database-backup.svg?color=%23388e3c&width=16) | Backup and Verify | backup, restore, snapshot, manifest, baseline, regress |
| ![icon](https://api.iconify.design/lucide:file-diff.svg?color=%23c2185b&width=16) | Patching | patch, redact, transform |
| ![icon](https://api.iconify.design/lucide:settings.svg?color=%23ffa000&width=16) | Diagnostics | config, verbose, quiet logging levels |

## Usage

### Usage via CLI

```bash
file-ops create notes.md --content "# hello"
file-ops read notes.md
file-ops view notes.md
file-ops search . "*.rs"
file-ops tree ./src --max-depth 3 --dirs-only
file-ops hash ./target/release/file-ops --algorithm sha256
file-ops manifest generate ./dist --out dist.manifest.json
file-ops trash old-report.pdf
file-ops shred secret.bin --strategy random --passes 3
```

```text
┌──────────────────────────────────────────────────────────────┐
│  $ file-ops tree ./src --max-depth 2 --dirs-only             │
│  src                                                         │
│  ├── adapters                                                │
│  │  └── filesystem                                           │
│  ├── modules                                                 │
│  │  └── file_ops                                             │
│  ├── presentation                                            │
│  │  └── cli                                                  │
│  └── shared                                                  │
│  4 directories                                               │
└──────────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `create` | Create a file with content | `--content`, `--path` | empty content |
| `search` | Glob-based file search | `--pattern`, `--recursive` | recursive |
| `hash` | Hash a file | `--algorithm` (md5, sha256, sha512) | sha256 |
| `manifest generate` | Record tree manifest | `--out`, `--algorithm` | sha256 |
| `trash` | Soft delete (recoverable) | `--trash-dir` | `.file-ops-trash` |
| `shred` | Hard delete (overwrite + remove) | `--strategy`, `--passes` | random, 1 |

### Usage via SDK (Rust Library)

```rust
use file_ops::file_ops_domain::operations::*;
use file_ops::{FilePath, Config};

let config = Config::default();
let path = FilePath::new("notes.md")?;
// Use domain operations or application use cases via ports
```

```text
┌──────────────────────────────────────────────────────────────┐
│  $ cargo test -p wrikka-file-ops                             │
│  running 64 tests                                            │
│  test shared::types::tests ... ok                            │
│  test modules::file_ops::domain ... ok                       │
│  test modules::file_ops::application ... ok                  │
│  test result: ok. 64 passed; 0 failed                        │
└──────────────────────────────────────────────────────────────┘
```

## Links

- Repository: <https://github.com/veerapong/file-ops>
- Source: <https://github.com/veerapong/file-ops/blob/main/packages/lib/file-ops/Cargo.toml>
