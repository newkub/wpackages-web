# agent-browser

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | CLI Apps |
| Path | `apps/cli/agent-browser/Cargo.toml` |
| Keywords | automation, browser, playwright, chrome, selenium |

## Description

Browser automation agent with Clean Architecture - supports Chrome, Firefox, Safari, Edge

## Quick Start

### Build

```bash
cargo build -p agent-browser
```

### Test

```bash
cargo test -p agent-browser
```

### Run

```bash
cargo run -p agent-browser
```

## Dependencies

| Name | Version |
| --- | --- |
| thiserror | `workspace` |
| anyhow | `workspace` |
| tokio | `workspace` |
| serde | `workspace` |
| serde_json | `workspace` |
| tracing | `workspace` |
| tracing-subscriber | `workspace` |
| chrono | `workspace` |
| async-trait | `workspace` |
| futures | `0.3.32` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| mockall | `0.14.0` |
| pretty_assertions | `1.4.1` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# agent-browser

Browser automation agent with Clean Architecture — supports Chrome, Firefox, Safari, and Edge via Playwright with an HTTP API and PostgreSQL persistence.

![Rust](https://img.shields.io/badge/Rust-edition_2021-1976d2)
![Playwright](https://img.shields.io/badge/Playwright-0.0.20-0097a7)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-sqlx-00796b)

```text
┌──────────────────────────────────────────────────────────┐
│  agent-browser                                           │
│                                                          │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────┐  │
│  │  CLI (clap)    │  │  HTTP API      │  │  Library   │  │
│  └───────┬────────┘  └───────┬────────┘  └─────┬──────┘  │
│          │                   │                  │         │
│          └──────────┬────────┴──────────────────┘         │
│                     ▼                                     │
│          ┌──────────────────────┐                         │
│          │  Browser Use Cases   │                         │
│          │  Session Use Cases   │                         │
│          └──────────┬───────────┘                         │
│                     ▼                                     │
│  ┌─────────┐  ┌────────────┐  ┌──────────┐  ┌─────────┐  │
│  │Playwright│ │ PostgreSQL  │  │ AI Chat  │  │Security │  │
│  └─────────┘  └────────────┘  └──────────┘  └─────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install Prerequisites — Rust 1.70+, PostgreSQL 14+, Playwright browsers
   ```bash
   rustup install 1.70.0
   npx playwright install chromium firefox webkit
   ```
2. Build And Run — `cargo build` + set database URL
   ```bash
   cargo build -p agent-browser
   export DATABASE_URL=postgres://user:pass@localhost/agent_browser
   cargo run -p agent-browser -- browser launch --browser-type chrome
   ```
3. Verify — run tests and lints
   ```bash
   cargo test -p agent-browser
   cargo clippy -p agent-browser -- -D warnings
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:google-chrome.svg?color=%231976d2&width=16) | Multi-Browser Support | Chrome, Firefox, Safari, Edge via Playwright |
| ![icon](https://api.iconify.design/mdi:api.svg?color=%23388e3c&width=16) | HTTP API | Axum REST endpoints for browsers, pages, sessions |
| ![icon](https://api.iconify.design/mdi:database.svg?color=%23f57c00&width=16) | PostgreSQL Persistence | sqlx repositories for durable state across restarts |
| ![icon](https://api.iconify.design/mdi:shield-lock.svg?color=%237b1fa2&width=16) | Content Boundary Security | Domain filters, action policies, content validators |
| ![icon](https://api.iconify.design/mdi:robot.svg?color=%23c2185b&width=16) | AI Chat Engine | Intent parser, pattern registry, action executor |
| ![icon](https://api.iconify.design/mdi:eye.svg?color=%230097a7&width=16) | Accessibility Snapshots | Tree filtering, semantic search, element annotations |
| ![icon](https://api.iconify.design/mdi:cookie.svg?color=%23ffa000&width=16) | Session Management | Auth, cookies, encryption, backup, restore |
| ![icon](https://api.iconify.design/mdi:file-pdf-box.svg?color=%2300796b&width=16) | Page Actions | Navigate, screenshot, PDF, click, type, fill, select |

## Usage

### Usage via CLI

```bash
agent-browser browser launch --browser-type chrome --headless
agent-browser browser list
agent-browser page navigate --id <uuid> --url https://example.com
agent-browser page screenshot --id <uuid> --output shot.png
agent-browser page click --id <uuid> --selector "#button"
agent-browser session create --session-type browser
agent-browser session backup --id <uuid>
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ agent-browser browser launch --browser-type chrome    │
│  Browser launched: chrome (id: a1b2c3d4)                 │
│  Headless: true  Viewport: 1920x1080                     │
│                                                          │
│  $ agent-browser page navigate --id a1b2 --url https:..  │
│  Navigated to https://example.com (200 OK)               │
│  Page title: Example Domain                              │
│                                                          │
│  $ agent-browser page screenshot --id a1b2 -o shot.png   │
│  Screenshot saved: shot.png (1920x1080)                  │
└──────────────────────────────────────────────────────────┘
```

### Usage via HTTP API

```bash
curl -X POST http://localhost:3000/browsers \
  -H "Content-Type: application/json" \
  -d '{"browser_type":"chrome","headless":true}'

curl http://localhost:3000/browsers
curl -X POST http://localhost:3000/browsers/<id>/close
```

```text
┌──────────────────────────────────────────────────────────┐
│  POST /browsers        → 201 { "id": "a1b2c3d4" }        │
│  GET  /browsers        → 200 [ { "id": "a1b2c3d4" } ]    │
│  POST /browsers/<id>/close → 200 { "closed": true }      │
│  POST /pages/<id>/navigate → 200 { "title": "Example" }  │
│  GET  /pages/<id>/screenshot → 200 image/png             │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `browser launch` | Launch a browser instance | `browser_type`, `headless`, `width`, `height`, `proxy` | `chrome`, `1920x1080` |
| `page navigate` | Navigate to a URL | `id`, `url`, `wait` | — |
| `page screenshot` | Capture page screenshot | `id`, `output`, `full_page`, `format` | `png` |
| `page click` | Click an element | `id`, `selector`, `selector_type`, `button` | `css`, `left` |
| `session create` | Create a session | `session_type`, `timeout`, `persistent` | `browser`, `3600s` |
