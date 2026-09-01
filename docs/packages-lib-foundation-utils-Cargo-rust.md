# wrikka-foundation-utils

- **Type:** RUST
- **Category:** Foundation
- **Path:** `packages/lib/foundation/utils/Cargo.toml`

## Description

Utility library with Clean Architecture and functional programming principles

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-foundation-utils

Utility library with Clean Architecture and functional programming principles — composable, type-safe utilities for common operations.

![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)
![Edition](https://img.shields.io/badge/Edition-2021-1976d2)
![License](https://img.shields.io/badge/License-MIT%20%7C%20Apache--2.0-388e3c)

```text
┌──────────────────────────────────────────────────────────────┐
│  wrikka-foundation-utils — Utility Library                   │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  domain/        Pure business rules (100% pure)        │  │
│  │    string_utils, type_conversion, path_utils           │  │
│  │    validation, hash_utils, encoding_utils              │  │
│  │    format_utils, collection_utils, math_utils          │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  application/   Use cases, config, workflows           │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  infrastructure/  async, time, id utilities            │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  adapters/      External integrations                  │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  presentation/  UI/API                                 │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  shared/        types, errors, utils, constants        │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Get Started

1. Add Dependency — `Cargo.toml`
   ```toml
   [dependencies]
   wrikka-foundation-utils = "0.1.0"
   ```

2. Import Utilities — `Rust`
   ```rust
   use wrikka_foundation_utils::domain::modules::*;
   ```

3. Use Utilities — `Rust`
   ```rust
   use wrikka_foundation_utils::domain::modules::*;

   let result = process_string("  hello world  ").unwrap();
   assert_eq!(result, "Hello world");
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:text.svg?color=%231976d2&width=16) | String Manipulation | Trim, case conversion, capitalize, word count, reverse |
| ![icon](https://api.iconify.design/mdi:swap-horizontal.svg?color=%23388e3c&width=16) | Type Conversion | Safe conversions between types with error handling |
| ![icon](https://api.iconify.design/mdi:folder.svg?color=%23f57c00&width=16) | Path Operations | File extension, stem, join, normalize paths |
| ![icon](https://api.iconify.design/mdi:check-circle.svg?color=%23d32f2f&width=16) | Validation | Non-empty, length, email, URL validation |
| ![icon](https://api.iconify.design/mdi:hash.svg?color=%237b1fa2&width=16) | Hash Utilities | DJB2 hash for strings and bytes |
| ![icon](https://api.iconify.design/mdi:encode.svg?color=%23c2185b&width=16) | Encoding Utilities | Base64, hex, URL encoding/decoding |
| ![icon](https://api.iconify.design/mdi:format-align-right.svg?color=%230097a7&width=16) | Format Utilities | Bytes, number, duration formatting |
| ![icon](https://api.iconify.design/mdi:clock-outline.svg?color=%2300796b&width=16) | Time Utilities | Timestamp generation, ISO 8601 formatting |
| ![icon](https://api.iconify.design/mdi:identifier.svg?color=%23ffa000&width=16) | ID Generation | UUID v4 generation |

## Usage

### Usage via SDK

```rust
use wrikka_foundation_utils::domain::modules::*;

// String operations
let result = process_string("  hello world  ").unwrap();
assert_eq!(result, "Hello world");

// Type conversion
let num = str_to_int("42").unwrap();
assert_eq!(num, 42);

// Validation
assert!(validate_email("test@example.com").is_ok());
assert!(validate_url("https://example.com").is_ok());

// Collection utilities
let unique = dedup(&vec![1, 2, 2, 3]); // [1, 2, 3]
let flat = flatten(&vec![vec![1, 2], vec![3, 4]]); // [1, 2, 3, 4]

// Math utilities
let gcd_value = gcd(48, 18); // 6
let fib = fibonacci(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Configuration management
use wrikka_foundation_utils::ConfigManager;
let mut config = ConfigManager::new();
config.set("timeout", ConfigValue::Integer(30));
config.load_from_env("APP_");
```

```text
┌──────────────────────────────────────────────────────────────┐
│  $ cargo test -p wrikka-foundation-utils                     │
│  running 38 tests                                            │
│  test domain::string_utils ... ok                            │
│  test domain::validation ... ok                              │
│  test domain::collection_utils ... ok                        │
│  test domain::math_utils ... ok                              │
│  test application::config ... ok                             │
│  test result: ok. 38 passed; 0 failed                        │
└──────────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `process_string(s)` | Trim and capitalize string | `&str` | none |
| `str_to_int(s)` | Safe string to integer | `&str` | none |
| `validate_email(s)` | Validate email format | `&str` | none |
| `dedup(vec)` | Remove duplicates | `&Vec<T>` | none |
| `gcd(a, b)` | Greatest common divisor | `i32`, `i32` | none |
| `ConfigManager::new()` | Create config manager | `set`, `get`, `load_from_env` | empty |

### Usage with Feature Flags

```toml
[dependencies]
wrikka-foundation-utils = { version = "0.1.0", features = ["full"] }
```

| feature | description | options | default |
|---------|-------------|---------|---------|
| `time` | Time utilities via chrono | none | enabled |
| `id` | UUID v4 generation | none | enabled |
| `async` | Async utilities with retry/backoff | none | disabled |
| `serde` | Serialization support | none | disabled |
| `full` | Enable all features | none | disabled |
