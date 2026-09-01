# wrikka-perf

## Overview

Performance monitoring and benchmarking tools

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Tools |
| Path | `packages/lib/tools/perf/Cargo.toml` |
| Keywords | performance, benchmarking, monitoring, profiling, metrics |

## Directory Structure

- 📁 `benches`
- 📄 `benches/benchmark.rs`
- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/bench`
- 📄 `src/lib.rs`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📁 `tests`
- 📄 `tests/benchmark_test.rs`
- 📁 `tests/integration`
- 📄 `tests/integration_test.rs`
- 📄 `tests/mod.rs`
- 📁 `tests/unit`
- 📄 `TODO.md`

## Source Files

- `src/adapters/db/in_memory_benchmark_repository.rs`
- `src/adapters/db/mod.rs`
- `src/adapters/external/criterion_benchmark_service.rs`
- `src/adapters/external/mod.rs`
- `src/adapters/mod.rs`
- `src/bench/adapters/cli.rs`
- `src/bench/adapters/controllers/mod.rs`
- `src/bench/adapters/handlers/mod.rs`
- `src/bench/adapters/mod.rs`
- `src/bench/domain/errors/mod.rs`
- `src/bench/domain/mod.rs`
- `src/bench/domain/repositories/mod.rs`
- `src/bench/domain/services/mod.rs`
- `src/bench/domain/services/regression/analysis.rs`
- `src/bench/domain/services/regression/detector.rs`
- `src/bench/domain/services/regression/mod.rs`
- `src/bench/domain/services/regression/types.rs`
- `src/bench/domain/services/regression.rs`
- `src/bench/domain/services/statistics.rs`
- `src/bench/domain/types/entities.rs`
- `src/bench/domain/types/history.rs`
- `src/bench/domain/types/mod.rs`
- `src/bench/domain/types/value_objects/benchmark_types.rs`
- `src/bench/domain/types/value_objects/config_types.rs`
- `src/bench/domain/types/value_objects/mod.rs`
- `src/bench/domain/types/value_objects/query_types.rs`
- `src/bench/domain/types/value_objects/threshold_types.rs`
- `src/bench/infrastructure/ci.rs`
- `src/bench/infrastructure/ci_tests.rs`
- `src/bench/infrastructure/ci_types.rs`
- `src/bench/infrastructure/comparison/mod.rs`
- `src/bench/infrastructure/comparison/services/analysis_service.rs`
- `src/bench/infrastructure/comparison/services/mod.rs`
- `src/bench/infrastructure/comparison/use_cases/compare_benchmarks.rs`
- `src/bench/infrastructure/comparison/use_cases/mod.rs`
- `src/bench/infrastructure/execution/mod.rs`
- `src/bench/infrastructure/execution/runners/benchmark_runner/environment.rs`
- `src/bench/infrastructure/execution/runners/benchmark_runner/mod.rs`
- `src/bench/infrastructure/execution/runners/benchmark_runner/runner.rs`
- `src/bench/infrastructure/execution/runners/benchmark_runner/tests.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-perf
```

### Test

```bash
cargo test -p wrikka-perf
```

### Run

```bash
cargo run -p wrikka-perf
```

### Lint

```bash
cargo clippy -p wrikka-perf
```

### Documentation

```bash
cargo doc -p wrikka-perf --no-deps
```

## README

# Wrikka Performance

Comprehensive performance monitoring and benchmarking tools with Clean Architecture - Optimize Rust applications with detailed performance insights.

## Key Concept

| <center>![icon](https://api.iconify.design/mdi:architecture.svg?color=%234CAF50&width=16)</center> | Concept | Mental Model |
|---------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:layers.svg?color=%232196F3&width=16)</center> | **Clean Architecture** | Domain → Application → Infrastructure → Adapters layers |
| <center>![icon](https://api.iconify.design/mdi:chart-multiline.svg?color=%23FF9800&width=16)</center> | **Statistical Analysis** | Rigorous statistical benchmarking with confidence intervals |
| <center>![icon](https://api.iconify.design/mdi:fire.svg?color=%239C27B0&width=16)</center> | **Profiling Integration** | CPU and memory profiling with flamegraph generation |
| <center>![icon](https://api.iconify.design/mdi:database-sync.svg?color=%23E91E63&width=16)</center> | **Performance Tracking** | Historical performance data and trend analysis |

## Principles

| <center>![icon](https://api.iconify.design/mdi:shield.svg?color=%234CAF50&width=16)</center> | Principle | Rule |
|---------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:precision-manufacturing.svg?color=%232196F3&width=16)</center> | **Statistical Rigor** | Use proper statistical methods for benchmarking |
| <center>![icon](https://api.iconify.design/mdi:sync.svg?color=%23FF9800&width=16)</center> | **Continuous Monitoring** | Integrate performance monitoring into CI/CD |
| <center>![icon](https://api.iconify.design/mdi:extension.svg?color=%239C27B0&width=16)</center> | **Extensibility** | Plugin system for custom profilers and reporters |
| <center>![icon](https://api.iconify.design/mdi:chart-line.svg?color=%23E91E63&width=16)</center> | **Data-Driven** | Make optimization decisions based on data |

## Features

### 📊 Statistical Benchmarking
Criterion.rs integration with confidence intervals. Reliable performance measurements with rigorous statistical analysis.

### 🔥 CPU Profiling
pprof-rs integration with flamegraph generation. Identify performance bottlenecks with detailed CPU sampling.

### 💾 Memory Profiling
Heap and stack memory usage analysis. Optimize memory consumption with comprehensive memory tracking.

### 📄 Multi-Format Reports
HTML, JSON, and console report generation. Flexible reporting options for different use cases.

### 📈 Regression Detection
Automated performance regression detection. Prevent performance degradation with continuous monitoring.

### ⚖️ Benchmark Comparison
Side-by-side performance comparison. Data-driven optimization with visual comparison tools.

### 📉 Statistical Analysis
Mean, median, percentiles, and confidence intervals. Rigorous performance analysis with comprehensive statistics.

### 🗄️ Historical Tracking
Store and analyze performance trends over time. Long-term performance insights with historical data.

### ⚡ Real-time Monitoring
Live performance metrics and alerts. Proactive performance management with real-time visibility.

### 🧩 Plugin System
Extensible profilers and custom metrics. Tailored performance analysis with plugin architecture.

### 🧪 Integration Testing
Performance testing in CI/CD pipelines. Automated performance validation with continuous integration.

### ☁️ Cloud Integration
Export performance data to monitoring services. Centralized performance monitoring with cloud sync.

## Installation

```bash
# Add as dependency
cargo add wrikka-perf --path packages/devtools/perf

# With specific features
cargo add wrikka-perf --path packages/devtools/perf --features benchmarking,profiling
```

## Usage

### Method 1: Usage via Programmatic API

```rust
use wrikka_perf::{
    domain::entities::Benchmark,
    application::use_cases::RunBenchmark,
    infrastructure::BenchmarkServiceImpl,
};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Create benchmark service
    let benchmark_service = BenchmarkServiceImpl::new();
    let run_benchmark = RunBenchmark::new(benchmark_service);
    
    // Run benchmark
    let benchmark = run_benchmark.execute("my_benchmark".to_string(), || {
        // Code to benchmark
        std::thread::sleep(std::time::Duration::from_millis(10));
    }).await?;
    
    println!("Mean: {} ns", benchmark.statistics.mean);
    println!("Std Dev: {} ns", benchmark.statistics.std_dev);
    
    Ok(())
}
```

### Method 2: Usage with Profiling

```rust
use wrikka_perf::{
    infrastructure::CpuProfiler,
    domain::entities::Profile,
};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Create CPU profiler
    let mut profiler = CpuProfiler::new();
    
    // Start profiling
    profiler.start(100)?; // 100 Hz sampling rate
    
    // Code to profile
    for i in 0..1000 {
        // Simulate computation
        let _ = (i * i) as f64;
        std::thread::sleep(std::time::Duration::from_micros(100));
    }
    
    // Stop profiling and get results
    let profile = profiler.stop()?;
    println!("Profile generated: {}", profile.id);
    println!("Total samples: {}", profile.samples.len());
    
    // Generate flamegraph
    let flamegraph = profile.generate_flamegraph()?;
    std::fs::write("flamegraph.svg", flamegraph)?;
    
    Ok(())
}
```

## Configuration

```toml
[performance]
default_sampling_rate = 100
benchmark_iterations = 100
enable_profiling = true
enable_memory_profiling = true

[benchmarking]
confidence_level = 0.95
warmup_iterations = 10
measurement_time = 5.0
sample_size = 100

[profiling]
cpu_sampling_rate = 100
memory_sampling_interval = 1000
enable_flamegraph = true
flamegraph_format = "svg"

[reporting]
default_format = "html"
include_statistics = true
include_charts = true
output_directory = "./perf_reports"

[monitoring]
enable_real_time = false
alert_threshold_ms = 1000
store_historical = true
retention_days = 30
```

## Reference

### Core Components

| Component | Description | Use Case |
|-----------|-------------|---------|
| `Benchmark` | Benchmark execution and results | Performance measurement |
| `Profiler` | CPU and memory profiling | Performance analysis |
| `ReportGenerator` | Multi-format report generation | Performance documentation |
| `PerformanceMonitor` | Real-time performance monitoring | Live performance tracking |

### Benchmark Types

| Type | Description | Example |
|------|-------------|--------|
| `FunctionBenchmark` | Benchmark single function | `benchmark_fn("sort", quicksort)` |
| `AlgorithmBenchmark` | Compare algorithm performance | `benchmark_algorithms([quicksort, mergesort])` |
| `MemoryBenchmark` | Memory usage benchmarking | `benchmark_memory("data_structures")` |
| `Iobenchmark` | Input/output performance | `benchmark_io("file_operations")` |

### Profiling Options

| Profiler | Description | Configuration |
|----------|-------------|-------------|
| `CpuProfiler` | CPU sampling profiling | Sampling rate, duration |
| `MemoryProfiler` | Heap memory profiling | Allocation tracking |
| `IoProfiler` | I/O operation profiling | File and network I/O |
| `CustomProfiler` | User-defined profiling | Plugin system |

### Architecture Layers

1. **Domain Layer**: Performance entities and business logic
2. **Application Layer**: Performance use cases and orchestration
3. **Infrastructure Layer**: Profiling and benchmarking implementations
4. **Adapters Layer**: External integrations and reporting

### Dependencies

Key external dependencies:
- **Benchmarking**: criterion for statistical benchmarking
- **Profiling**: pprof-rs for CPU and memory profiling
- **Statistics**: statrs for statistical analysis
- **Visualization**: inferno for flamegraph generation
- **Serialization**: serde for data export and import

## License

MIT License - See LICENSE.md for details.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request
