# @wrikka/wwhiteboard-web

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | WASM Apps |
| Path | `apps/wasm/canvas/web/package.json` |
| Version | `0.1.0` |

## Description

@wrikka/wwhiteboard-web npm workspace at apps/wasm/canvas/web/package.json

## Quick Start

### Install

```bash
bun install
```

### Build

```bash
bun run build
```

### Develop

```bash
bun run dev
```

### Test

```bash
bun run test
```

## Scripts

| Script | Command |
| --- | --- |
| dev | `bun run src/index.ts` |
| build | `bun build` |
| typecheck | `tsc --noEmit` |
| lint | `biome lint` |
| lint:fix | `biome lint --write` |
| format | `biome format --write` |
| test | `vitest run` |
| verify | `bun run lint && bun run typecheck && bun run test` |
| ci | `bun run verify && bun run build` |
| preview | `vite preview` |
| typecheck:watch | `tsc --noEmit --watch --preserveWatchOutput` |
| format:check | `biome format` |
| test:unit | `vitest run --coverage` |
| test:changed | `vitest --changed` |
| clean | `rm -rf dist \|\| Remove-Item -Recurse -Force dist` |
| update:deps | `bunx taze -r -w -i --force` |

## Dependencies

| Name | Version |
| --- | --- |
| solid-js | `^1.9.12` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `^1.9.4` |
| @types/node | `^25.6.0` |
| @unocss/preset-icons | `^66.0.0` |
| @unocss/preset-wind4 | `^66.0.0` |
| typescript | `~6.0.2` |
| unocss | `^66.0.0` |
| vite | `^8.0.8` |
| vite-plugin-solid | `^2.11.12` |
| vitest | `^4.1.4` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.
