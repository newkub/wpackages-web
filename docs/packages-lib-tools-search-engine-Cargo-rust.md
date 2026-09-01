# wrikka-search-engine

## Overview

AI-friendly semantic search engine with AST parsing, following Clean Architecture principles

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Tools |
| Path | `packages/lib/tools/search-engine/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/application`
- 📁 `src/domain`
- 📄 `src/lib.rs`

## Source Files

- `src/application/mod.rs`
- `src/domain/entities.rs`
- `src/domain/errors.rs`
- `src/domain/interfaces.rs`
- `src/domain/mod.rs`
- `src/domain/services.rs`
- `src/domain/types.rs`
- `src/lib.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-search-engine
```

### Test

```bash
cargo test -p wrikka-search-engine
```

### Run

```bash
cargo run -p wrikka-search-engine
```

### Lint

```bash
cargo clippy -p wrikka-search-engine
```

### Documentation

```bash
cargo doc -p wrikka-search-engine --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

# Wrikka Search Engine

Advanced semantic code search engine with intelligent indexing and Clean Architecture.

## Why

| Problem | Solution |
|---------|----------|
| **Slow text-based search** that misses semantic meaning | **Semantic search engine** with understanding of code context |
| **Limited search capabilities** in large codebases | **Intelligent indexing** with fast retrieval and ranking |
| **Poor search results** without relevance scoring | **Advanced ranking algorithms** for accurate results |
| **Manual code exploration** wasting developer time | **Automated code discovery** with smart suggestions |

## When

| <center>![icon](https://api.iconify.design/mdi:magnify.svg?color=%234CAF50&width=16)</center> | Use Case | Description |
|---------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:code-search.svg?color=%232196F3&width=16)</center> | **Code Exploration** | Find relevant functions and classes in large codebases |
| <center>![icon](https://api.iconify.design/mdi:file-find.svg?color=%23FF9800&width=16)</center> | **Pattern Matching** | Search for specific code patterns and idioms |
| <center>![icon](https://api.iconify.design/mdi:brain.svg?color=%239C27B0&width=16)</center> | **Semantic Analysis** | Understand code meaning beyond text matching |
| <center>![icon](https://api.iconify.design/mdi:history.svg?color=%23E91E63&width=16)</center> | **Code History** | Track changes and find similar implementations |

## Key Concept

| <center>![icon](https://api.iconify.design/mdi:architecture.svg?color=%234CAF50&width=16)</center> | Concept | Mental Model |
|---------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:layers.svg?color=%232196F3&width=16)</center> | **Clean Architecture** | Domain → Application → Infrastructure → Adapters layers |
| <center>![icon](https://api.iconify.design/mdi:database-search.svg?color=%23FF9800&width=16)</center> | **Inverted Index** | Fast text retrieval with term-document mapping |
| <center>![icon](https://api.iconify.design/mdi:vector-triangle.svg?color=%239C27B0&width=16)</center> | **Vector Embeddings** | Semantic understanding through vector similarity |
| <center>![icon](https://api.iconify.design/mdi:chart-line.svg?color=%23E91E63&width=16)</center> | **Ranking Algorithms** | Relevance scoring for result ordering |

## Principles

| <center>![icon](https://api.iconify.design/mdi:shield.svg?color=%234CAF50&width=16)</center> | Principle | Rule |
|---------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:speed.svg?color=%232196F3&width=16)</center> | **Performance First** | Sub-second search results even in large codebases |
| <center>![icon](https://api.iconify.design/mdi:brain.svg?color=%23FF9800&width=16)</center> | **Semantic Understanding** | Go beyond text matching to understand intent |
| <center>![icon](https://api.iconify.design/mdi:extension.svg?color=%239C27B0&width=16)</center> | **Extensibility** | Plugin system for custom search algorithms |
| <center>![icon](https://api.iconify.design/mdi:sync.svg?color=%23E91E63&width=16)</center> | **Real-time Updates** | Index updates reflect immediately in search |

## Features

| <center>![icon](https://api.iconify.design/mdi:magnify.svg?color=%234CAF50&width=16)</center> | Feature | Description | Benefit |
|---------|----------|----------|----------|
| <center>![icon](https://api.iconify.design/mdi:database-search.svg?color=%232196F3&width=16)</center> | **Inverted Index** | Fast full-text search with term indexing | Instant search results |
| <center>![icon](https://api.iconify.design/mdi:vector-triangle.svg?color=%23FF9800&width=16)</center> | **Semantic Search** | Vector embeddings for code understanding | Find conceptually similar code |
| <center>![icon](https://api.iconify.design/mdi:code-braces.svg?color=%239C27B0&width=16)</center> | **AST-based Search** | Search through parsed syntax trees | Precise structural matching |
| <center>![icon](https://api.iconify.design/mdi:chart-line.svg?color=%23E91E63&width=16)</center> | **Smart Ranking** | TF-IDF, BM25, and custom ranking algorithms | Most relevant results first |
| <center>![icon](https://api.iconify.design/mdi:regex.svg?color=%234CAF50&width=16)</center> | **Pattern Matching** | Regular expression and code pattern search | Find specific code structures |
| <center>![icon](https://api.iconify.design/mdi:file-code-outline.svg?color=%232196F3&width=16)</center> | **Multi-language Support** | Search across different programming languages | Unified search experience |
| <center>![icon](https://api.iconify.design/mdi:filter.svg?color=%23FF9800&width=16)</center> | **Advanced Filtering** | Filter by file type, path, date, author | Narrow down search scope |
| <center>![icon](https://api.iconify.design/mdi:history.svg?color=%239C27B0&width=16)</center> | **Search History** | Track and replay previous searches | Resume exploration easily |
| <center>![icon](https://api.iconify.design/mdi:lightbulb.svg?color=%23E91E63&width=16)</center> | **Smart Suggestions** | AI-powered query suggestions | Improve search effectiveness |
| <center>![icon](https://api.iconify.design/mdi:sync.svg?color=%234CAF50&width=16)</center> | **Real-time Indexing** | Automatic index updates on file changes | Always up-to-date results |
| <center>![icon](https://api.iconify.design/mdi:chart-multiline.svg?color=%232196F3&width=16)</center> | **Analytics Dashboard** | Search metrics and usage statistics | Understand search patterns |

## Installation

```bash
# Install from source
cargo install --path packages/data/search-engine

# Add as dependency
cargo add wrikka-search-engine --path packages/data/search-engine
```

## Usage

### Method 1: Usage via Programmatic API

```rust
use wrikka_search_engine::{
    domain::entities::{SearchQuery, SearchResult},
    application::use_cases::SearchUseCase,
    infrastructure::SearchEngine,
};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Initialize search engine
    let engine = SearchEngine::new("./src").await?;
    
    // Create search query
    let query = SearchQuery::builder()
        .text("async function")
        .language("rust")
        .limit(10)
        .build();
    
    // Execute search
    let use_case = SearchUseCase::new(engine);
    let results = use_case.execute(query).await?;
    
    for result in results {
        println!("Found in {}:{}", result.file_path, result.line_number);
        println!("Code: {}", result.code_snippet);
        println!("Score: {:.2}", result.relevance_score);
    }
    
    Ok(())
}
```

### Method 2: Usage via CLI

```bash
# Search for code patterns
wrikka-search-engine search "async function" --path ./src --language rust

# Semantic search
wrikka-search-engine semantic "database connection" --include-tests

# Pattern matching
wrikka-search-engine pattern "fn.*->.*Result" --language rust

# Advanced search with filters
wrikka-search-engine search "error handling" --file-type rust --exclude tests --limit 20
```

## Configuration

```toml
[search]
indexing_enabled = true
real_time_updates = true
max_results = 100

[indexing]
batch_size = 1000
update_interval = 60
include_tests = false
exclude_patterns = ["target/", "*.tmp"]

[ranking]
algorithm = "bm25"
boost_recent_files = true
semantic_weight = 0.3

[semantic]
embeddings_enabled = true
model = "codebert-base"
dimension = 768
```

## Reference

### Domain Types

| Type | Description |
|------|-------------|
| `SearchQuery` | Search request with text, filters, and options |
| `SearchResult` | Individual search result with metadata |
| `SearchEngine` | Core search engine with indexing |
| `IndexManager` | Manages search index creation and updates |
| `RankingAlgorithm` | Interface for result ranking strategies |

### Search Algorithms

| Algorithm | Description | Use Case |
|-----------|-------------|----------|
| **TF-IDF** | Term frequency-inverse document frequency | Basic text search |
| **BM25** | Okapi BM25 probabilistic relevance | Improved text ranking |
| **Semantic** | Vector embedding similarity | Concept-based search |
| **Hybrid** | Combined text + semantic ranking | Best overall results |

### Architecture Layers

1. **Domain Layer**: Search entities, queries, and results
2. **Application Layer**: Search use cases and orchestration
3. **Infrastructure Layer**: Indexing and search implementations
4. **Adapters Layer**: CLI and API interfaces

### Dependencies

Key external dependencies:
- **Indexing**: Tantivy for fast inverted index
- **Vector Search**: sentence-transformers for embeddings
- **Text Processing**: tokenizers for text preprocessing
- **Async Runtime**: Tokio for concurrent operations

## License

MIT License - See LICENSE.md for details.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## Links

- Repository: <https://github.com/wrikka/wpackages>
- Source: <https://github.com/wrikka/wpackages/blob/main/packages/lib/tools/search-engine/Cargo.toml>
