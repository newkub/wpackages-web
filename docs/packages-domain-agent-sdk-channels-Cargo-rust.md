# agent-sdk-channels

## Overview

Communication channels for agent-sdk: Slack, WhatsApp, Email, reconnection

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Domain |
| Path | `packages/domain/agent-sdk/channels/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/newkub/wpackages> |
| Keywords | channels, slack, whatsapp, email, messaging |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `src`
- 📁 `src/channel`
- 📄 `src/email.rs`
- 📄 `src/lib.rs`
- 📁 `src/modules`
- 📄 `src/slack.rs`
- 📄 `src/whatsapp.rs`

## Source Files

- `src/channel/mod.rs`
- `src/channel/reconnection.rs`
- `src/channel/types.rs`
- `src/email.rs`
- `src/lib.rs`
- `src/modules/channel/mod.rs`
- `src/modules/channel/reconnection.rs`
- `src/modules/channel/types.rs`
- `src/modules/discord/application/mod.rs`
- `src/modules/discord/domain/mod.rs`
- `src/modules/discord/mod.rs`
- `src/modules/discord/ports/mod.rs`
- `src/modules/email.rs`
- `src/modules/line/mod.rs`
- `src/modules/line/provider.rs`
- `src/modules/line/tests.rs`
- `src/modules/line/types.rs`
- `src/modules/mod.rs`
- `src/modules/slack.rs`
- `src/modules/sms/mod.rs`
- `src/modules/sms/provider.rs`
- `src/modules/sms/tests.rs`
- `src/modules/sms/types.rs`
- `src/modules/sms/webhook.rs`
- `src/modules/teams/mod.rs`
- `src/modules/teams/provider.rs`
- `src/modules/teams/tests.rs`
- `src/modules/teams/types.rs`
- `src/modules/telegram/application/mod.rs`
- `src/modules/telegram/domain/mod.rs`
- `src/modules/telegram/mod.rs`
- `src/modules/telegram/ports/mod.rs`
- `src/modules/webchat/mod.rs`
- `src/modules/webchat/provider.rs`
- `src/modules/webchat/tests.rs`
- `src/modules/webchat/types.rs`
- `src/modules/whatsapp.rs`
- `src/slack.rs`
- `src/whatsapp.rs`

## Quick Start

### Build

```bash
cargo build -p agent-sdk-channels
```

### Test

```bash
cargo test -p agent-sdk-channels
```

### Run

```bash
cargo run -p agent-sdk-channels
```

### Lint

```bash
cargo clippy -p agent-sdk-channels
```

### Documentation

```bash
cargo doc -p agent-sdk-channels --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/newkub/wpackages>
- Source: <https://github.com/newkub/wpackages/blob/main/packages/domain/agent-sdk/channels/Cargo.toml>
