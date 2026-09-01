# git-tui

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/git-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/newkub/git-tui> |
| Homepage | <https://github.com/newkub/git-tui> |
| Authors | Wrikka Team |
| Keywords | tui, git, vcs, manager |

## Description

Git manager TUI app with clean architecture

## Quick Start

### Build

```bash
cargo build -p git-tui
```

### Test

```bash
cargo test -p git-tui
```

### Run

```bash
cargo run -p git-tui
```

## Dependencies

| Name | Version |
| --- | --- |
| anyhow | `1.0.102` |
| thiserror | `2.0.18` |
| ratatui | `0.30.2` |
| crossterm | `0.29.0` |
| unicode-width | `0.2.0` |
| ratatui-ui | `workspace` |

## README

# git-tui

> 🚀 Git operations TUI with staging, commit, branches, log, stashes, tags, worktrees, remotes, and blame — built on Clean Architecture with a command palette and hunk-level staging.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ git-tui  [Status]  branch: main  ↑2 ↓1  unstaged: 3  staged: 1  +42 -8      │
├─────────────────────────────────────────────────────────────────────────────┤
│  Unstaged              │  Staged                │  Diff [+42 -8]            │
│ ┌────────────────────┐ │ ┌────────────────────┐ │ ┌───────────────────────┐ │
│ │ [ M ] src/main.rs  │ │ │ [ A ] src/new.rs   │ │ │ @@ -10,3 +10,8 @@     │ │
│ │ [ ? ] README.md    │ │ │                    │ │ │ +use crate::App;      │ │
│ │ [ D ] old/file.rs  │ │ │                    │ │ │ -fn old() {}          │ │
│ └────────────────────┘ │ └────────────────────┘ │ │ +fn new() {}          │ │
│                                                │ └───────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│ :=palette  ?=help  1-7=screens  s/u/d=stage/unstage/discard  c=commit  q=quit│
└─────────────────────────────────────────────────────────────────────────────┘
```

## Get Started

1. Install Prerequisites — `system`

   Requires Rust 1.70+ and the `git` CLI on your PATH.

   ```bash
   rustup install 1.70.0
   rustup default 1.70.0
   ```

2. Build And Run — `terminal`

   ```bash
   # From the workspace root
   cargo run -p git-tui

   # Or build the release binary
   cargo build --release -p git-tui
   ./target/release/git-tui
   ```

3. Navigate The Repository — `terminal`

   Launch `git-tui` inside any Git repository. The app reads the current working directory as the repo root.

   ```bash
   cd /path/to/your/repo
   git-tui
   ```

## Features

| Icon | Feature | Description | Benefit | Usage |
|:---:|---------|-------------|---------|-------|
| ![icon](https://api.iconify.design/mdi:source-branch.svg?color=%231976d2&width=16) | Multi-Screen Navigation | 8 screens: Status, Branches, Log, Stashes, Tags, Worktrees, Blame, Remotes | Full Git workflow without leaving the terminal | Press `1`–`7` or `b`/`l`/`t`/`w`/`o` to switch screens |
| ![icon](https://api.iconify.design/mdi:source-commit.svg?color=%23388e3c&width=16) | Staging & Unstaging | Stage, unstage, and discard individual files or all at once | Granular control over what goes into each commit | `s` = stage, `u` = unstage, `d` = discard, `A`/`U`/`D` = bulk |
| ![icon](https://api.iconify.design/mdi:diff.svg?color=%23f57c00&width=16) | Diff Viewer With Minimap | Inline diff with additions/deletions counts and a scroll minimap | See exactly what changed at a glance | Focus the Diff pane with `Tab`, scroll with `j`/`k` or `PgUp`/`PgDn` |
| ![icon](https://api.iconify.design/mdi:keyboard-outline.svg?color=%237b1fa2&width=16) | Command Palette | Fuzzy-filtered command palette for every action | Discover and execute commands without memorizing shortcuts | Press `:` to open, type to filter, `Enter` to execute |
| ![icon](https://api.iconify.design/mdi:format-pilcrow.svg?color=%23c2185b&width=16) | Hunk-Level Staging | Stage or unstage individual hunks from a popup | Commit only the changes you want, line by line | Press `i` to open the hunk popup, `s`/`u` to stage/unstage hunks |
| ![icon](https://api.iconify.design/mdi:cloud-upload-outline.svg?color=%230097a7&width=16) | Sync Operations | Push, pull, fetch, and upstream ahead/behind tracking | Keep your local repo in sync with remotes | `p` = push, `P` = pull, `F` = fetch |
| ![icon](https://api.iconify.design/mdi:bag-personal-outline.svg?color=%2300796b&width=16) | Stash Management | Create, apply, and pop stashes with optional untracked inclusion | Shelve work-in-progress without losing context | `S` = create stash, `a` = apply, `z` = pop |
| ![icon](https://api.iconify.design/mdi:tag-multiple-outline.svg?color=%23ffa000&width=16) | Tags & Remotes | Create, delete, push tags; add, remove, edit remotes | Manage releases and remote connections in one place | Screens `5` (Tags) and `7` (Remotes) |

## Usage

### Usage via TUI

1. Launch `git-tui` in a Git repository — the Status screen opens by default showing unstaged files (left), staged files (center), and the diff (right).
2. Use `Tab` / `Shift+Tab` to cycle focus between the Unstaged, Staged, and Diff panes.
3. Press `s` to stage the selected file, `u` to unstage, or `d` to discard changes. Use `A` to stage all, `U` to unstage all, `D` to discard all.
4. Press `c` to open the commit input popup. Type your message and press `Enter` to commit. Use `Up`/`Down` to browse commit message history.
5. Press `i` to open the hunk popup for line-level staging. Use `j`/`k` to navigate hunks, `s` to stage, `u` to unstage.
6. Switch screens with number keys: `1` Status, `2` Branches, `3` Log, `4` Stashes, `5` Tags, `6` Worktrees, `7` Remotes.
7. On the Branches screen, press `Enter` to checkout, `n` to create, `d` to delete, `R` to rename.
8. On the Stashes screen, press `a` to apply, `z` to pop, `S` to create a new stash.
9. Press `:` to open the command palette — type to filter all available actions and press `Enter` to execute.
10. Press `?` for a full help overlay, `r` to refresh, `q` to quit.

### Usage via CLI

```bash
# Run from the workspace root
cargo run -p git-tui

# Build and install the release binary
cargo build --release -p git-tui
cp ./target/release/git-tui ~/.local/bin/

# Run in any Git repository
cd /path/to/repo
git-tui
```

## Project

<details>
<summary>Goal</summary>

Provide a fast, keyboard-driven terminal UI for the complete Git workflow — staging, committing, branching, syncing, stashing, tagging, and blame — without leaving the terminal or memorizing long CLI flags.
</details>

<details>
<summary>Scope</summary>

- In scope: local Git operations via the `git` CLI, multi-screen TUI navigation, hunk-level staging, command palette, stash/tag/worktree/remote management.
- Out of scope: merge conflict resolution UI, interactive rebase editor, GitHub/GitLab PR integration.
</details>

<details>
<summary>When To Use</summary>

- You prefer keyboard-driven Git workflows over `git` CLI commands or GUI clients.
- You need hunk-level staging control for crafting clean commits.
- You want a single terminal interface for all routine Git operations.
</details>

<details>
<summary>Key Concepts</summary>

- **Clean Architecture** — `domain` (models, operations) → `application` (use cases) → `adapters` (git CLI) → `presentation` (TUI).
- **GitRepository Port** — a trait abstracting all Git operations, implemented by `GitCliRepository` which shells out to the `git` binary.
- **AppState** — a single state struct holding all UI state (screen, focus, lists, inputs, popups) consumed by the renderer.
- **Command Palette** — a fuzzy-filterable list of `CommandAction` variants that map to every available operation.
- **Hunk Staging** — individual diff hunks can be staged or unstaged independently via a popup overlay.
</details>

<details>
<summary>Core Principles</summary>

- **Port/Adapter isolation** — the domain and application layers never call `git` directly; they go through the `GitRepository` trait.
- **Single source of state** — `AppState` is the single mutable state; the renderer is a pure function of state.
- **Keyboard-first** — every action has a single-key shortcut and is also accessible via the command palette.
- **Confirmation for destructive ops** — discard, delete branch, delete tag, force push, and pop stash all require `y`/`n` confirmation.
</details>

<details>
<summary>Best Practices</summary>

- Always run `git-tui` inside a Git working tree — the app uses `current_dir()` as the repo root.
- Use the command palette (`:`) when you forget a shortcut — it lists every action with its label.
- Stage hunks (`i`) instead of whole files when you want precise commit boundaries.
- Refresh (`r`) after external changes to re-sync the status, diff, and branch state.
</details>

## API References

<details>
<summary>Public Exports (lib.rs)</summary>

| Export | Kind | Description |
|-------|------|-------------|
| `GitCliRepository` | struct | Adapter implementing `GitRepository` via the `git` CLI |
| `GitUseCase` | struct | Application-layer use case managing `AppState` and delegating to the repository |
| `GitRepository` | trait | Port defining all Git operations (status, stage, commit, branch, log, stash, tag, remote, push, pull, fetch, blame, worktree) |
| `AppState` | struct | Central UI state: screen, focus, file lists, diff, branches, log, stashes, tags, worktrees, remotes, inputs, popups |
| `Screen` | enum | `Status`, `Branches`, `Log`, `Stashes`, `Tags`, `Worktrees`, `Blame`, `Remotes` |
| `Focus` | enum | `Unstaged`, `Staged`, `Diff`, `Branches`, `Log`, `Stashes`, `Tags`, `Worktrees`, `Blame`, `Remotes`, `Commit` |
| `FileChange` | struct | `path`, `change_type` (`ChangeType`), `staged`, `original_path` |
| `ChangeType` | enum | `Unmodified`, `Modified`, `Added`, `Deleted`, `Renamed`, `Copied`, `UpdatedUnmerged`, `Untracked`, `Ignored` |
| `Diff` | struct | `lines`, `additions`, `deletions`, `is_binary`, `is_untracked` |
| `Branch` | struct | `name`, `current`, `remote` |
| `LogEntry` | struct | `hash`, `short_hash`, `subject`, `author`, `date`, `graph` |
| `Stash` | struct | `index`, `hash`, `message`, `branch`, `author`, `date` |
| `Tag` | struct | `name`, `annotation`, `hash` |
| `Worktree` | struct | `path`, `branch`, `head`, `current`, `detached`, `bare` |
| `Remote` | struct | `name`, `url`, `push_url` |
| `BlameLine` | struct | `line_no`, `hash`, `short_hash`, `author`, `date`, `summary`, `content` |
| `Hunk` | struct | `header`, `lines`, `old_start`, `old_count`, `new_start`, `new_count`, `additions`, `deletions` |
| `Command` / `CommandAction` | struct / enum | Command palette action and its variants with `label()` and `shortcut()` |
| `ConfirmAction` | enum | `Discard`, `DiscardAll`, `Checkout`, `DeleteBranch`, `DeleteTag`, `PushTag`, `DeleteRemote`, `Pull`, `Push`, `PopStash`, `ApplyStash` |
| `Error` / `Result` | enum / alias | Shared error type and `Result<T>` alias |
</details>

<details>
<summary>GitRepository Trait Methods</summary>

| Method | Signature | Description |
|--------|-----------|-------------|
| `status` | `&self -> Result<Vec<FileChange>>` | List all unstaged and staged changes |
| `diff_unstaged` | `&self, path: &str -> Result<Diff>` | Diff for an unstaged file |
| `diff_staged` | `&self, path: &str -> Result<Diff>` | Diff for a staged file |
| `diff_untracked` | `&self, path: &str -> Result<Diff>` | Diff for an untracked file |
| `diff_stash` | `&self, stash: &str -> Result<Diff>` | Diff for a stash entry |
| `stage` / `unstage` | `&self, path: &str -> Result<()>` | Stage or unstage a file |
| `commit` | `&self, message: &str -> Result<()>` | Create a commit |
| `discard_unstaged` / `discard_untracked` | `&self, path: &str -> Result<()>` | Discard changes |
| `branches` | `&self -> Result<Vec<Branch>>` | List all branches |
| `create_branch` / `delete_branch` / `rename_branch` / `checkout_branch` | `&self, ... -> Result<()>` | Branch operations |
| `log` | `&self, max: usize -> Result<Vec<LogEntry>>` | Commit log with graph |
| `blame` | `&self, path: &str -> Result<Vec<BlameLine>>` | Blame a file |
| `worktrees` | `&self -> Result<Vec<Worktree>>` | List worktrees |
| `tags` / `create_tag` / `delete_tag` / `push_tag` | `&self, ... -> Result<()>` | Tag operations |
| `remotes` / `add_remote` / `remove_remote` / `set_remote_url` | `&self, ... -> Result<()>` | Remote operations |
| `stashes` / `pop_stash` / `apply_stash` / `create_stash` | `&self, ... -> Result<()>` | Stash operations |
| `push` / `pull` / `fetch` | `&self -> Result<()>` | Sync operations |
| `upstream_status` | `&self -> Result<(usize, usize)>` | Ahead/behind counts |
| `current_branch` | `&self -> Result<String>` | Current branch name |
| `workdir` | `&self -> &Path` | Repository working directory |
</details>

## Development

<details>
<summary>Tech Stack</summary>

| Technology | Version | Purpose |
|-----------|---------|---------|
| Rust | 1.70+ (edition 2021) | Language |
| ratatui | 0.30.0 | TUI rendering framework |
| crossterm | 0.29.0 | Cross-platform terminal I/O |
| unicode-width | 0.2.0 | Unicode character width for layout |
| anyhow | workspace | Error handling in `main.rs` |
| thiserror | workspace | Derive error types in domain |
| git CLI | system | Backend for all Git operations |
</details>

<details>
<summary>How It Works</summary>

1. `main.rs` creates a `GitCliRepository` from the current directory and wraps it in a `GitTuiApp`.
2. `GitTuiApp::run()` enables raw mode, enters the alternate screen, and starts the main loop.
3. Each iteration: `draw()` renders the current `AppState` (header → notification → active screen → help bar → overlays), then polls for a key event.
4. Key events are routed through `handle_key()` — overlay handlers (command palette, commit input, hunk popup, confirm dialog) intercept first, then `handle_main_key()` handles screen-specific and global keys.
5. The `GitUseCase` delegates to the `GitRepository` port for all Git operations and updates `AppState` with the results.
6. On quit, raw mode is disabled and the alternate screen is exited.
</details>

<details>
<summary>Architecture</summary>

```text
src/
├── main.rs                    # Entry point — creates GitCliRepository + GitTuiApp
├── lib.rs                     # Public exports
├── shared/kernel/             # Error types, Result alias
├── modules/git/
│   ├── ports.rs               # GitRepository trait (port)
│   ├── domain/
│   │   └── models/git/        # AppState, Screen, Focus, FileChange, Branch, Diff, ...
│   └── application/
│       └── usecase/           # GitUseCase + sub-modules (staging, commit, branches, ...)
├── adapters/
│   └── git_cli/               # GitCliRepository — shells out to `git`
└── presentation/tui/
    ├── app/                   # GitTuiApp, handle_key, handle_main_key
    └── ui/                    # draw(), layout, render, widgets, popups, overlays
```
</details>

<details>
<summary>Scripts</summary>

| Script | Command | Description |
|--------|---------|-------------|
| dev | `cargo run --bin git-tui` | Run the TUI in development |
| build | `cargo build --release` | Build optimized release binary |
| typecheck | `cargo check` | Type-check without codegen |
| lint | `cargo clippy --all-targets --all-features` | Run Clippy lints |
| format | `cargo fmt` | Format source code |
| test | `cargo test` | Run unit and integration tests |
| verify | `cargo clippy --all-targets --all-features && cargo check && cargo test` | Full verification pipeline |
</details>
