# wrikka-foundation-error

- **Type:** RUST
- **Category:** Foundation
- **Path:** `packages/lib/foundation/error/Cargo.toml`

## Description

Error handling library with Clean Architecture and functional programming principles

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-foundation-error

Error handling library with Clean Architecture and functional programming principles — type-safe errors, structured context, virtual stack traces.

![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)
![Edition](https://img.shields.io/badge/Edition-2021-1976d2)
![License](https://img.shields.io/badge/License-MIT%20%7C%20Apache--2.0-388e3c)

```text
┌──────────────────────────────────────────────────────────────┐
│  wrikka-foundation-error — Error Handling                    │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  modules/core/                                         │  │
│  │    types/      Domain types                             │  │
│  │    domain/     Pure error logic, models, validators     │  │
│  │    application/  Error orchestration, workflows         │  │
│  │    ports/      Module-specific interfaces               │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  shared/       types, utils, prelude                    │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  adapters/     External integrations                    │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  presentation/  Error formatting                        │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

## Get Started

1. Add Dependency — `Cargo.toml`
   ```toml
   [dependencies]
   wrikka-foundation-error = "0.1.0"
   ```

2. Import Prelude — `Rust`
   ```rust
   use wrikka_foundation_error::prelude::*;
   ```

3. Create And Handle Errors — `Rust`
   ```rust
   use wrikka_foundation_error::prelude::*;

   let error = validation_error("Invalid email format")
       .with_context("field", "email")
       .with_severity(ErrorSeverity::Warning);
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:alert-circle.svg?color=%23d32f2f&width=16) | Type-Safe Errors | Derive macros for structured error types |
| ![icon](https://api.iconify.design/mdi:link-variant.svg?color=%231976d2&width=16) | Context Attachment | Structured key-value context on every error |
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%237b1fa2&width=16) | Virtual Stack Traces | Error frames for debugging without backtrace overhead |
| ![icon](https://api.iconify.design/mdi:check-circle.svg?color=%23388e3c&width=16) | Domain Validators | Email, URL, length, range validation functions |
| ![icon](https://api.iconify.design/mdi:format-list-bulleted.svg?color=%23f57c00&width=16) | Error Aggregation | Collect multiple errors into one aggregated result |
| ![icon](https://api.iconify.design/mdi:refresh.svg?color=%230097a7&width=16) | Retry With Backoff | Configurable retry workflows for fallible operations |
| ![icon](https://api.iconify.design/mdi:call-split.svg?color=%23c2185b&width=16) | Error Chaining | Chain multiple errors into a causal sequence |
| ![icon](https://api.iconify.design/mdi:swap-horizontal.svg?color=%2300796b&width=16) | Error Transformation | Transform std errors into foundation errors |

## Usage

### Usage via SDK

```rust
use wrikka_foundation_error::prelude::*;

// Basic error creation with context
let error = validation_error("Invalid input")
    .with_context("field", "email")
    .with_context("value", "invalid");

// Error builder pattern
let error = ErrorBuilder::new(ErrorKind::Validation, "Invalid input")
    .severity(ErrorSeverity::Warning)
    .context("field", "email")
    .frame("validate_email", "email format invalid")
    .build();

// Error aggregation
let aggregator = ErrorAggregator::new()
    .add_error(validation_error("Error 1"))
    .add_error(io_error("Error 2"));

if aggregator.has_errors() {
    let aggregated = aggregator.into_aggregated_error();
}

// Retry with backoff
let config = RetryConfig::new(3, 100);
let result = retry_with_backoff(|| Ok(42), config);
```

```text
┌──────────────────────────────────────────────────────────────┐
│  Error: Validation                                           │
│  Message: Invalid email format                               │
│  Severity: Warning                                           │
│  Context:                                                    │
│    field = email                                             │
│    value = invalid                                           │
│  Stack:                                                      │
│    [validate_email] email format invalid                     │
│    [process] processing failed                               │
└──────────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `validation_error(msg)` | Create validation error | `msg: &str` | none |
| `ErrorBuilder::new(kind, msg)` | Build error with fluent API | `severity`, `context`, `frame` | none |
| `retry_with_backoff(fn, config)` | Retry fallible operation | `config: RetryConfig` | 3 retries |
| `ErrorAggregator::new()` | Aggregate multiple errors | `add_error` | none |
| `ErrorChain::new()` | Chain errors causally | `chain(error)` | none |

### Usage with Feature Flags

```toml
[dependencies]
wrikka-foundation-error = { version = "0.1.0", features = ["full"] }
```

| feature | description | options | default |
|---------|-------------|---------|---------|
| `serde` | Serialize/deserialize errors | none | disabled |
| `backtrace` | Capture system backtraces | none | disabled |
| `tracing` | Integrate with tracing crate | none | disabled |
| `tokio` | Async error handling support | none | disabled |
| `full` | Enable all features | none | disabled |
