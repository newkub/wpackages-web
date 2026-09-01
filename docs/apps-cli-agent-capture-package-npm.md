# @wrikka/agent-capture

- **Type:** NPM
- **Category:** CLI Apps
- **Path:** `apps/cli/agent-capture/package.json`

## Description

Multi-platform agent capture CLI for browser, terminal, code snippets, and component previews

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# agent-capture

Multi-platform agent capture CLI — browser screenshots, terminal recordings, code snippets, and component previews with optional Node.js bindings via napi-rs.

![Rust](https://img.shields.io/badge/Rust-edition_2021-1976d2)
![clap](https://img.shields.io/badge/clap-4.6-0097a7)
![napi-rs](https://img.shields.io/badge/napi--rs-optional-7b1fa2)

```text
┌──────────────────────────────────────────────────────────┐
│  agent-capture                                           │
│                                                          │
│  ┌────────────────┐  ┌────────────────┐                  │
│  │  CLI (clap)    │  │  Node (napi)   │                  │
│  └───────┬────────┘  └───────┬────────┘                  │
│          └──────────┬────────┘                           │
│                     ▼                                     │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐            │
│  │  Browser  │  │  Terminal │  │  Snippet  │            │
│  │  Capture  │  │  Capture  │  │  Render   │            │
│  └───────────┘  └───────────┘  └───────────┘            │
│                     ▼                                     │
│          ┌──────────────────────┐                         │
│  ┌───────┤  headless_chrome     ├───────┐                 │
│  │       │  portable-pty        │       │                 │
│  │       │  image / reqwest     │       │                 │
│  └───────┴──────────────────────┴───────┘                 │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Build — `cargo build` with default features
   ```bash
   cargo build --release
   cargo run --release -- --help
   ```
2. Run A Capture — browser, terminal, snippet, or component
   ```bash
   agent-capture browser https://example.com -o shot.png
   agent-capture terminal "ls -la" -o terminal.png
   agent-capture snippet "fn main() {}" -l rust -o code.png
   ```
3. Optional Node Bindings — build with napi-rs feature
   ```bash
   cargo build --release --features napi-rs
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:web.svg?color=%231976d2&width=16) | Browser Capture | Screenshot any webpage with configurable viewport and wait |
| ![icon](https://api.iconify.design/mdi:console.svg?color=%230097a7&width=16) | Terminal Capture | Record terminal sessions and command output as images |
| ![icon](https://api.iconify.design/mdi:code-braces.svg?color=%23f57c00&width=16) | Code Snippets | Render code with syntax highlighting and themes |
| ![icon](https://api.iconify.design/mdi:vuejs.svg?color=%23c2185b&width=16) | Component Preview | Render Vue and React components as images |
| ![icon](https://api.iconify.design/mdi:nodejs.svg?color=%23388e3c&width=16) | Node.js Bindings | Optional napi-rs bindings for npm package distribution |
| ![icon](https://api.iconify.design/mdi:toggle-switch.svg?color=%237b1fa2&width=16) | Feature Flags | Modular features: browser, terminal, code-snippet, component |

## Usage

### Usage via CLI

```bash
# Browser capture
agent-capture browser https://example.com -o screenshot.png
agent-capture browser https://example.com --width 1920 --height 1080

# Terminal capture
agent-capture terminal "ls -la" --duration 3 -o ls_output.png

# Code snippet
agent-capture snippet "fn main() {}" -l rust -o main_code.png
agent-capture snippet ./src/main.rs --file -l rust --theme github-dark

# Component preview
agent-capture component "<div>Hello</div>" --framework vue -o preview.png
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ agent-capture browser https://example.com -o out.png  │
│  Capturing https://example.com at 1200x800 ...           │
│  Waiting 5000ms for page load ...                        │
│  Screenshot saved: out.png (1200x800)                    │
│                                                          │
│  $ agent-capture snippet "fn main() {}" -l rust -o c.png │
│  Rendering snippet (rust, github-dark) ...               │
│  Snippet saved: c.png                                    │
└──────────────────────────────────────────────────────────┘
```

### Usage via Node.js SDK

```javascript
const { captureBrowser, captureCodeSnippet } = require('@wrikka/agent-capture');

const result = await captureBrowser('https://example.com', JSON.stringify({
  output_path: 'screenshot.png', width: 1920, height: 1080
}));

const codeResult = await captureCodeSnippet('const x = 1;', 'javascript', JSON.stringify({
  output_path: 'snippet.png'
}));
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `browser` | Capture a webpage | `url`, `selector`, `width`, `height`, `wait`, `output` | `1200x800`, `5000ms` |
| `terminal` | Capture terminal output | `command`, `duration`, `format`, `output` | `10s`, `png` |
| `snippet` | Render code snippet | `code`, `file`, `url`, `language`, `theme`, `output` | `rust`, `github-dark` |
| `component` | Render component preview | `code`, `file`, `framework`, `props`, `width`, `height` | `vue`, `1200x800` |
