import {
	createEffect,
	createSignal,
	For,
	onCleanup,
	onMount,
	Show,
} from "solid-js";
import { EmptyState } from "./components/EmptyState";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoadingState } from "./components/LoadingState";
import { SearchInput } from "./components/SearchInput";
import { StatusBar } from "./components/StatusBar";
import { sectionMeta } from "./section-meta";
import { newSections, type Section } from "./sections";

import "./theme.css";
import "./app.css";

const defaultId = newSections[0]?.id ?? "root-package-json";

export function App() {
	const [active, setActive] = createSignal(defaultId);
	const [search, setSearch] = createSignal("");
	const [navOpen, setNavOpen] = createSignal(false);
	const [isReady, setIsReady] = createSignal(false);

	onMount(() => {
		const resolveId = (raw: string): string => {
			const path = (raw.replace(/^\//, "").split("?")[0] ?? "").trim();
			const hash = window.location.hash.slice(1);
			if (sectionMeta[path]) return path;
			if (sectionMeta[hash]) return hash;
			return defaultId;
		};

		const id = resolveId(window.location.pathname);
		setActive(id);
		setIsReady(true);

		const onPopState = () => {
			const newId = resolveId(window.location.pathname);
			setActive(newId);
		};

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setNavOpen(false);
		};

		window.addEventListener("popstate", onPopState);
		window.addEventListener("keydown", onKeyDown);

		onCleanup(() => {
			window.removeEventListener("popstate", onPopState);
			window.removeEventListener("keydown", onKeyDown);
		});
	});

	createEffect(() => {
		const current = active();
		const expected = `/${current}`;
		if (window.location.pathname !== expected) {
			history.pushState(null, "", expected);
		}
	});

	const allSections = newSections.map((s) => ({
		...s,
		category: s.category ?? "Other",
		description: s.description ?? `Workspace ${s.label}.`,
	}));

	const filteredSections = () => {
		const q = search().toLowerCase();
		if (!q) return allSections;
		return allSections.filter(
			(s) =>
				s.label.toLowerCase().includes(q) ||
				s.category.toLowerCase().includes(q) ||
				s.description.toLowerCase().includes(q),
		);
	};

	const groupedSections = () => {
		const groups: Record<string, Section[]> = {};
		for (const s of filteredSections()) {
			const category = s.category;
			let group = groups[category];
			if (!group) {
				group = [];
				groups[category] = group;
			}
			group.push(s);
		}
		return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
	};

	const activeSection = () => allSections.find((s) => s.id === active());

	const activeLabel = () => activeSection()?.label ?? active();

	const selectSection = (id: string) => {
		setActive(id);
		setNavOpen(false);
	};

	return (
		<div class="rt-app">
			<Header
				title="wpackages"
				subtitle="Explore every workspace in the rust-packages monorepo"
			/>
			<StatusBar left="v0.2.0" center="SolidJS" right={activeLabel()} />
			<button
				class="rt-nav-toggle"
				classList={{ "rt-nav-toggle--open": navOpen() }}
				onClick={() => setNavOpen(!navOpen())}
				aria-label="Toggle navigation"
				type="button"
			>
				<span />
				<span />
				<span />
			</button>
			<div class="rt-layout" classList={{ "rt-layout--nav-open": navOpen() }}>
				<nav
					class="rt-nav"
					onClick={(e) => {
						if (e.target === e.currentTarget) setNavOpen(false);
					}}
				>
					<SearchInput
						value={search()}
						onChange={setSearch}
						placeholder="Filter workspaces..."
					/>
					<Show
						when={groupedSections().length > 0}
						fallback={
							<div class="rt-nav-empty">
								<EmptyState
									icon="🔎"
									title="No matches"
									message="Try a different search term."
								/>
							</div>
						}
					>
						<ul class="rt-nav-list">
							<For each={groupedSections()}>
								{([category, items]) => (
									<li class="rt-nav-group">
										<div class="rt-nav-group__title">
											{category}
											<span class="rt-nav-group__count">{items.length}</span>
										</div>
										<ul class="rt-nav-group__list">
											<For each={items}>
												{(section) => {
													const isActive = () => active() === section.id;
													return (
														<li>
															<a
																href={`/${section.id}`}
																class="rt-nav-link"
																classList={{
																	"rt-nav-link--active": isActive(),
																}}
																aria-current={isActive() ? "page" : undefined}
																onClick={(e) => {
																	e.preventDefault();
																	selectSection(section.id);
																}}
															>
																{section.label}
															</a>
														</li>
													);
												}}
											</For>
										</ul>
									</li>
								)}
							</For>
						</ul>
					</Show>
				</nav>
				<main class="rt-main" onClick={() => setNavOpen(false)}>
					<Show
						when={isReady()}
						fallback={<LoadingState message="Loading workspaces..." />}
					>
						{activeSection() ? (
							activeSection()?.render()
						) : (
							<div class="rt-component-demo rt-component-demo--flat">
								<EmptyState
									icon="📁"
									title="Select a workspace"
									message="Choose a workspace from the sidebar to view details."
								/>
							</div>
						)}
					</Show>
				</main>
			</div>
			{navOpen() && (
				<div
					class="rt-overlay"
					role="button"
					aria-label="Close navigation"
					onClick={() => setNavOpen(false)}
					tabindex={0}
				/>
			)}
			<Footer
				items={[
					["Enter", "select"],
					["Tab", "next"],
					["Esc", "close"],
				]}
			/>
		</div>
	);
}
