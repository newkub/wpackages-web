import { createRootRoute } from "@tanstack/solid-router";
import { createEffect, createSignal, For, onMount } from "solid-js";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { StatusBar } from "./components/StatusBar";
import { Text } from "./components/Text";
import { sectionMeta } from "./section-meta";
import { newSections, type Section } from "./sections";

import "./theme.css";
import "./app.css";

export const rootRoute = createRootRoute({
	component: App,
});

const defaultId = newSections[0]?.id ?? "root-package-json";

function App() {
	const [active, setActive] = createSignal(defaultId);
	const [search, setSearch] = createSignal("");
	const [navOpen, setNavOpen] = createSignal(false);

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

		const onPopState = () => {
			const newId = resolveId(window.location.pathname);
			setActive(newId);
		};

		window.addEventListener("popstate", onPopState);
		return () => window.removeEventListener("popstate", onPopState);
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

	return (
		<div class="rt-app">
			<Header
				title="wpackages"
				subtitle="Explore every workspace in the rust-packages monorepo"
			/>
			<StatusBar
				left="v0.2.0"
				center="Solid + TanStack Router"
				right={activeLabel()}
			/>
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
					<ul class="rt-nav-list">
						<For each={groupedSections()}>
							{([category, items]) => (
								<li class="rt-nav-group">
									<div class="rt-nav-group__title">{category}</div>
									<ul class="rt-nav-group__list">
										<For each={items}>
											{(section) => (
												<li>
													<a
														href={`/${section.id}`}
														class="rt-nav-link"
														classList={{
															"rt-nav-link--active": active() === section.id,
														}}
														onClick={(e) => {
															e.preventDefault();
															setActive(section.id);
														}}
													>
														{section.label}
													</a>
												</li>
											)}
										</For>
									</ul>
								</li>
							)}
						</For>
					</ul>
				</nav>
				<main class="rt-main" onClick={() => setNavOpen(false)}>
					{activeSection() ? (
						activeSection()?.render()
					) : (
						<div class="rt-component-demo">
							<Text variant="dim">Select a workspace from the sidebar.</Text>
						</div>
					)}
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
					["Esc", "quit"],
				]}
			/>
		</div>
	);
}
