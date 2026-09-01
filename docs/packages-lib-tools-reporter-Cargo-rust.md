# wrikka-reporting

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Tools |
| Path | `packages/lib/tools/reporter/Cargo.toml` |
| Keywords | reporting, benchmark, metrics, export, visualization, clean-architecture |

## Description

Generic reporting library with multiple formats, exporters, and Clean Architecture

## Quick Start

### Build

```bash
cargo build -p wrikka-reporting
```

### Test

```bash
cargo test -p wrikka-reporting
```

### Run

```bash
cargo run -p wrikka-reporting
```

## Dependencies

| Name | Version |
| --- | --- |
| serde | `workspace` |
| serde_json | `workspace` |
| anyhow | `workspace` |
| thiserror | `workspace` |
| validator | `workspace` |
| sea-orm | `workspace` |
| tracing | `workspace` |
| tokio | `workspace` |
| async-trait | `workspace` |

## README

# wrikka-reporting

Generic reporting library with multiple formats, exporters, and Clean Architecture.

## Overview

This library provides a generic reporting system that can be used for various use cases including benchmarks, profiling, metrics, and custom data reporting. It follows Clean Architecture principles with clear separation of concerns.

## Architecture

```
src/
├── modules/reporting/          # Feature module
│   ├── types/                  # Domain type definitions
│   ├── domain/                 # Pure business logic
│   │   ├── models/            # Data models (readonly)
│   │   ├── operations/        # Pure functions
│   │   ├── validators/        # Domain validation
│   │   └── events/            # Domain event types
│   ├── ports/                 # Module interfaces
│   └── application/           # Orchestration layer
│       ├── usecases/         # Flow orchestration
│       └── workflows/         # Complex workflows
├── adapters/                  # External systems integration
│   ├── exporters/            # Export implementations (file, http)
│   └── formatters/           # Format implementations (json, csv, html, markdown, console)
└── shared/                    # Shared kernel
    ├── types/                # Common types
    ├── utils/                # Pure utility functions
    ├── errors/               # Error types
    └── constants/            # Static constants
```

## Features

- **Multiple Formats**: JSON, CSV, HTML, Markdown, Console
- **Multiple Destinations**: File, HTTP, Database, WebSocket
- **Clean Architecture**: Clear separation of concerns
- **Type Safety**: Full Rust type system
- **Async**: Built on Tokio for async operations
- **Extensible**: Easy to add new formats and exporters

## Usage

```rust
use wrikka_reporting::{ReportData, ReportConfig, ReportFormat, JsonFormatter, GenerateReportUseCase};

// Create formatter
let formatter = std::sync::Arc::new(JsonFormatter::new());

// Create use case
let use_case = GenerateReportUseCase::new(formatter);

// Generate report
let data = ReportData::from_json(&your_data)?;
let config = ReportConfig::new(ReportFormat::Json);
let report = use_case.execute(&data, &config).await?;
```

## Dependencies

- serde, serde_json - Serialization
- tokio - Async runtime
- chrono - Date/time handling
- uuid - Unique identifiers
- reqwest - HTTP client
- template-engine - Template rendering

## License

MIT
