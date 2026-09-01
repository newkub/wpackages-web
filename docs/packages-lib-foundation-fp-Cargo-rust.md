# wrikka-foundation-fp

## Overview

Functional Programming library with Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Foundation |
| Path | `packages/lib/foundation/fp/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.75` |
| License | `MIT OR Apache-2.0` |
| Repository | <https://github.com/wrikka/rust-packages> |
| Authors | Wrikka Team <team@wrikka.dev> |
| Keywords | functional, programming, fp, monad, functor |

## Directory Structure

- 📁 `benches`
- 📄 `benches/fp_bench.rs`
- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📁 `src/modules`
- 📄 `src/prelude.rs`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📄 `TODO.md`

## Source Files

- `src/adapters/config/mod.rs`
- `src/adapters/mod.rs`
- `src/lib.rs`
- `src/modules/applicative/application/mod.rs`
- `src/modules/applicative/application/usecases/apply_operations/mod.rs`
- `src/modules/applicative/application/usecases/mod.rs`
- `src/modules/applicative/domain/mod.rs`
- `src/modules/applicative/domain/models/applicative/mod.rs`
- `src/modules/applicative/domain/models/mod.rs`
- `src/modules/applicative/mod.rs`
- `src/modules/applicative/ports/mod.rs`
- `src/modules/applicative/types/mod.rs`
- `src/modules/foldable/application/mod.rs`
- `src/modules/foldable/application/usecases/fold_operations.rs`
- `src/modules/foldable/application/usecases/mod.rs`
- `src/modules/foldable/domain/mod.rs`
- `src/modules/foldable/domain/models/foldable.rs`
- `src/modules/foldable/domain/models/mod.rs`
- `src/modules/foldable/mod.rs`
- `src/modules/foldable/ports/mod.rs`
- `src/modules/foldable/types/mod.rs`
- `src/modules/functor/application/mod.rs`
- `src/modules/functor/application/usecases/map_operations.rs`
- `src/modules/functor/application/usecases/mod.rs`
- `src/modules/functor/domain/mod.rs`
- `src/modules/functor/domain/models/functor.rs`
- `src/modules/functor/domain/models/mod.rs`
- `src/modules/functor/mod.rs`
- `src/modules/functor/ports/mod.rs`
- `src/modules/functor/types/mod.rs`
- `src/modules/mod.rs`
- `src/modules/monad/application/mod.rs`
- `src/modules/monad/application/usecases/bind_operations/control.rs`
- `src/modules/monad/application/usecases/bind_operations/core.rs`
- `src/modules/monad/application/usecases/bind_operations/effects.rs`
- `src/modules/monad/application/usecases/bind_operations/mod.rs`
- `src/modules/monad/application/usecases/bind_operations/tests.rs`
- `src/modules/monad/application/usecases/mod.rs`
- `src/modules/monad/domain/mod.rs`
- `src/modules/monad/domain/models/mod.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-foundation-fp
```

### Test

```bash
cargo test -p wrikka-foundation-fp
```

### Run

```bash
cargo run -p wrikka-foundation-fp
```

### Lint

```bash
cargo clippy -p wrikka-foundation-fp
```

### Documentation

```bash
cargo doc -p wrikka-foundation-fp --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.75` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-foundation-fp

Functional Programming library with Clean Architecture — Functor, Monad, Applicative, Monoid, Foldable, Traversable.

![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)
![Edition](https://img.shields.io/badge/Edition-2021-1976d2)
![License](https://img.shields.io/badge/License-MIT%20%7C%20Apache--2.0-388e3c)

```text
┌──────────────────────────────────────────────────────────────┐
│  wrikka-foundation-fp — Functional Programming               │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  shared/     types, errors, constants, utils           │  │
│  │    types:    Either, Id, Const, FpResult, FpOption     │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  modules/    FP abstractions                           │  │
│  │    functor/    map, map2, map3, safe_map               │  │
│  │    monad/      flat_map, pure, kleisli, join, filter   │  │
│  │    applicative/  apply, lift, sequence, traverse       │  │
│  │    monoid/     combine, identity, combine_many         │  │
│  │    foldable/   fold, fold_left, fold_right, find       │  │
│  │    traversable/  traverse, sequence, map_m             │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  adapters/   External integrations                     │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  presentation/  CLI + HTTP handlers                    │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Get Started

1. Add Dependency — `Cargo.toml`
   ```toml
   [dependencies]
   wrikka-foundation-fp = "0.1.0"
   ```

2. Import Prelude — `Rust`
   ```rust
   use wrikka_foundation_fp::prelude::*;
   ```

3. Use FP Operations — `Rust`
   ```rust
   use wrikka_foundation_fp::prelude::*;

   let result = functor_map(Some(5), |x| x * 2);
   assert_eq!(result, Some(10));

   let result = monad_bind(Some(5), |x| Some(x * 2));
   assert_eq!(result, Some(10));
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:swap-horizontal.svg?color=%23388e3c&width=16) | Functor | Map operations over Option, Result, Vec, Either |
| ![icon](https://api.iconify.design/mdi:link-variant.svg?color=%231976d2&width=16) | Monad | Chain operations with flatMap, Kleisli, join, filter |
| ![icon](https://api.iconify.design/mdi:format-list-bulleted.svg?color=%23f57c00&width=16) | Applicative | Apply functions within contexts, lift, sequence |
| ![icon](https://api.iconify.design/mdi:plus-box.svg?color=%237b1fa2&width=16) | Monoid | Combine values with identity (Sum, Product, String) |
| ![icon](https://api.iconify.design/mdi:unfold-more-horizontal.svg?color=%23c2185b&width=16) | Foldable | Fold left/right, find, any, all, fold_while |
| ![icon](https://api.iconify.design/mdi:shuffle-variant.svg?color=%230097a7&width=16) | Traversable | Traverse and sequence across contexts, mapM |
| ![icon](https://api.iconify.design/mdi:call-split.svg?color=%23d32f2f&width=16) | Either | Sum type with Left/Right, curry, predicate helpers |
| ![icon](https://api.iconify.design/mdi:filter-variant.svg?color=%2300796b&width=16) | Monad Filter | Filter Option/Vec, filterMap, sequence Vec of Option |

## Usage

### Usage via SDK

```rust
use wrikka_foundation_fp::prelude::*;

// Functor operations
let mapped = FunctorOps::map_option(Some(5), |x| x * 2);
let mapped_vec = FunctorOps::map_vec(vec![1, 2, 3], |x| x * 2);
let mapped2 = FunctorOps::map2(Some(5), Some(10), |a, b| a + b);

// Monad operations
let bound = monad_bind(Some(5), |x| Some(x * 2));
let filtered = filter_option(Some(5), |x| *x > 3);
let kleisli = kleisli_compose_option(
    |x: i32| Some(x + 1),
    |x: i32| Some(x * 2),
);

// Applicative operations
let lifted = ApplicativeOps::lift_option(|x: i32| x * 2);
let sequenced = ApplicativeOps::sequence_option(vec![Some(1), Some(2)]);

// Monoid operations
assert_eq!(MonoidOps::combine(5, 3), 8);
assert_eq!(MonoidOps::combine_many(vec![1, 2, 3, 4, 5]), 15);

// Foldable operations
let sum = FoldableOps::fold(0, vec![1, 2, 3, 4, 5], |acc, x| acc + x);
let found = FoldableOps::find(vec![1, 2, 3, 4], |x| *x > 3);

// Traversable operations
let traversed = TraversableOps::traverse_vec(vec![1, 2, 3], |x| Some(x * 2));
```

```text
┌──────────────────────────────────────────────────────────────┐
│  $ cargo test -p wrikka-foundation-fp                        │
│  running 42 tests                                            │
│  test functor::tests ... ok                                  │
│  test monad::tests ... ok                                    │
│  test applicative::tests ... ok                              │
│  test monoid::tests ... ok                                   │
│  test foldable::tests ... ok                                 │
│  test traversable::tests ... ok                              │
│  test result: ok. 42 passed; 0 failed                        │
└──────────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `functor_map(value, f)` | Map function over context | `Option`, `Result`, `Vec`, `Either` | none |
| `monad_bind(value, f)` | FlatMap/chain operations | `Option`, `Result`, `Vec` | none |
| `MonoidOps::combine(a, b)` | Combine two monoid values | `Sum`, `Product`, `String` | identity |
| `FoldableOps::fold(init, vec, f)` | Fold collection | left, right, find, any, all | none |
| `TraversableOps::traverse_vec(vec, f)` | Traverse with effect | `Option`, `Result` | none |

### Usage with Serde

```toml
[dependencies]
wrikka-foundation-fp = { version = "0.1.0", features = ["serde"] }
```

| feature | description | options | default |
|---------|-------------|---------|---------|
| `serde` | Serialize/deserialize Either, Id, Const | none | disabled |

## Links

- Repository: <https://github.com/wrikka/rust-packages>
- Source: <https://github.com/wrikka/rust-packages/blob/main/packages/lib/foundation/fp/Cargo.toml>
