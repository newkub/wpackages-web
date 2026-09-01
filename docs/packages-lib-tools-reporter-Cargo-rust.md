# wrikka-reporting

## Overview

Generic reporting library with multiple formats, exporters, and Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Tools |
| Path | `packages/lib/tools/reporter/Cargo.toml` |
| Keywords | reporting, benchmark, metrics, export, visualization, clean-architecture |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📁 `src/modules`
- 📁 `src/shared`

## Source Files

- `src/adapters/entities/mod.rs`
- `src/adapters/entities/report_entity.rs`
- `src/adapters/exporters/file.rs`
- `src/adapters/exporters/http.rs`
- `src/adapters/exporters/mod.rs`
- `src/adapters/formatters/console.rs`
- `src/adapters/formatters/csv.rs`
- `src/adapters/formatters/html.rs`
- `src/adapters/formatters/json.rs`
- `src/adapters/formatters/markdown.rs`
- `src/adapters/formatters/mod.rs`
- `src/adapters/mod.rs`
- `src/lib.rs`
- `src/modules/reporting/application/mod.rs`
- `src/modules/reporting/application/usecases/export_report.rs`
- `src/modules/reporting/application/usecases/generate_report.rs`
- `src/modules/reporting/application/usecases/mod.rs`
- `src/modules/reporting/application/workflows/mod.rs`
- `src/modules/reporting/domain/events/mod.rs`
- `src/modules/reporting/domain/mod.rs`
- `src/modules/reporting/domain/models/mod.rs`
- `src/modules/reporting/domain/models/report.rs`
- `src/modules/reporting/domain/models/statistics.rs`
- `src/modules/reporting/domain/operations/mod.rs`
- `src/modules/reporting/domain/validators/mod.rs`
- `src/modules/reporting/mod.rs`
- `src/modules/reporting/ports/mod.rs`
- `src/modules/reporting/types/index.rs`
- `src/shared/constants/index.rs`
- `src/shared/errors/index.rs`
- `src/shared/mod.rs`
- `src/shared/types/index.rs`
- `src/shared/utils/index.rs`

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

### Lint

```bash
cargo clippy -p wrikka-reporting
```

### Documentation

```bash
cargo doc -p wrikka-reporting --no-deps
```

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
