# wrikka-networking

## Overview

Network communication utilities with Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Infra |
| Path | `packages/infra/networking/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/wpackages> |
| Homepage | <https://github.com/wrikka/wpackages> |
| Authors | Wrikka Team |
| Keywords | networking, http, tcp, udp |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `src`
- 📁 `src/application`
- 📁 `src/domain`
- 📁 `src/infrastructure`
- 📄 `src/lib.rs`

## Source Files

- `src/application/mod.rs`
- `src/application/services/mod.rs`
- `src/domain/config/mod.rs`
- `src/domain/config/network_config/buffer_config.rs`
- `src/domain/config/network_config/complete_config.rs`
- `src/domain/config/network_config/constants.rs`
- `src/domain/config/network_config/logging_config.rs`
- `src/domain/config/network_config/mod.rs`
- `src/domain/config/network_config/performance_config.rs`
- `src/domain/config/network_config/port_config.rs`
- `src/domain/config/network_config/qos_config.rs`
- `src/domain/config/network_config/retry_config.rs`
- `src/domain/config/network_config/security_config.rs`
- `src/domain/config/network_config/tests.rs`
- `src/domain/config/network_config/timeout_config.rs`
- `src/domain/entities/mod.rs`
- `src/domain/entities/network_entity.rs`
- `src/domain/entities/service_entity.rs`
- `src/domain/errors/batch_operations.rs`
- `src/domain/errors/circuit_breaker.rs`
- `src/domain/errors/error_context.rs`
- `src/domain/errors/error_handling.rs`
- `src/domain/errors/error_handling_tests.rs`
- `src/domain/errors/error_handling_utils.rs`
- `src/domain/errors/mod.rs`
- `src/domain/events/connection_events.rs`
- `src/domain/events/mod.rs`
- `src/domain/events/request_events.rs`
- `src/domain/interfaces/automation_service.rs`
- `src/domain/interfaces/cache_service.rs`
- `src/domain/interfaces/mod.rs`
- `src/domain/interfaces/network_service/interface.rs`
- `src/domain/interfaces/network_service/mod.rs`
- `src/domain/interfaces/network_service/tests.rs`
- `src/domain/interfaces/network_service/types.rs`
- `src/domain/mod.rs`
- `src/domain/models/entities.rs`
- `src/domain/models/mod.rs`
- `src/domain/models/value_objects.rs`
- `src/domain/operations/connection_operations.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-networking
```

### Test

```bash
cargo test -p wrikka-networking
```

### Run

```bash
cargo run -p wrikka-networking
```

### Lint

```bash
cargo clippy -p wrikka-networking
```

### Documentation

```bash
cargo doc -p wrikka-networking --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/wrikka/wpackages>
- Homepage: <https://github.com/wrikka/wpackages>
- Source: <https://github.com/wrikka/wpackages/blob/main/packages/infra/networking/Cargo.toml>
