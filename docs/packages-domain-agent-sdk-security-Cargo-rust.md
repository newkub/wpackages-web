# agent-sdk-security

## Overview

Security module for agent-sdk: audit log, crypto, RBAC, rate limiting

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Domain |
| Path | `packages/domain/agent-sdk/security/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/newkub/wpackages> |
| Keywords | security, rbac, audit, crypto, rate-limiting |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `src`
- 📄 `src/audit.rs`
- 📄 `src/crypto.rs`
- 📄 `src/lib.rs`
- 📄 `src/rate_limit.rs`
- 📁 `src/rbac`

## Source Files

- `src/audit.rs`
- `src/crypto.rs`
- `src/lib.rs`
- `src/rate_limit.rs`
- `src/rbac/application/mod.rs`
- `src/rbac/application/usecases/mod.rs`
- `src/rbac/application/workflows/mod.rs`
- `src/rbac/domain/events/mod.rs`
- `src/rbac/domain/mod.rs`
- `src/rbac/domain/models/access_control.rs`
- `src/rbac/domain/models/context.rs`
- `src/rbac/domain/models/mod.rs`
- `src/rbac/domain/models/permission.rs`
- `src/rbac/domain/models/resource.rs`
- `src/rbac/domain/models/role.rs`
- `src/rbac/domain/models/system_role.rs`
- `src/rbac/domain/operations/mod.rs`
- `src/rbac/domain/validators/mod.rs`
- `src/rbac/middleware.rs`
- `src/rbac/mod.rs`
- `src/rbac/ports/mod.rs`
- `src/rbac/types/access.rs`
- `src/rbac/types/ids.rs`
- `src/rbac/types/mod.rs`

## Quick Start

### Build

```bash
cargo build -p agent-sdk-security
```

### Test

```bash
cargo test -p agent-sdk-security
```

### Run

```bash
cargo run -p agent-sdk-security
```

### Lint

```bash
cargo clippy -p agent-sdk-security
```

### Documentation

```bash
cargo doc -p agent-sdk-security --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/newkub/wpackages>
- Source: <https://github.com/newkub/wpackages/blob/main/packages/domain/agent-sdk/security/Cargo.toml>
