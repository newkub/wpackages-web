import { marked } from "marked";
import type { JSX } from "solid-js";
import {
	createEffect,
	createMemo,
	createSignal,
	For,
	onCleanup,
	Show,
} from "solid-js";
import { Badge } from "./components/Badge";
import { ComponentDemo } from "./components/ComponentDemo";
import { Tag } from "./components/Tag";
import { Text } from "./components/Text";
import { docs } from "./docs";
import { workspaces } from "./workspaces";
import "./sections.css";

export interface Section {
	id: string;
	label: string;
	render: () => JSX.Element;
	category?: string;
	description?: string;
}

function slugify(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.substring(0, 80);
}

function CopyButton(props: { text: string }) {
	const [copied, setCopied] = createSignal(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(props.text);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {
			// ignore
		}
	};

	return (
		<button
			type="button"
			class="rt-copy-btn"
			onClick={handleCopy}
			aria-label="Copy"
			title="Copy"
		>
			{copied() ? "Copied!" : "Copy"}
		</button>
	);
}

function enhanceMarkdown(el: HTMLDivElement) {
	const headings = el.querySelectorAll("h1, h2, h3, h4, h5, h6");
	for (const h of headings) {
		const id = slugify(h.textContent ?? "");
		if (id) h.id = id;
	}

	const pres = el.querySelectorAll("pre");
	for (const pre of pres) {
		if (pre.querySelector(".rt-code-copy")) continue;
		const code = pre.querySelector("code");
		const text = code?.textContent ?? pre.textContent ?? "";
		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "rt-code-copy";
		btn.textContent = "Copy";
		btn.setAttribute("aria-label", "Copy code");
		btn.title = "Copy code";
		btn.addEventListener("click", () => {
			navigator.clipboard.writeText(text).catch(() => {});
			const original = btn.textContent;
			btn.textContent = "Copied!";
			setTimeout(() => (btn.textContent = original), 1500);
		});
		pre.appendChild(btn);
	}
}

function MarkdownDoc(props: { source: string }) {
	let el: HTMLDivElement | undefined;

	const renderMarkdown = () => {
		if (!el) return;
		try {
			const str = marked.parse(props.source) as string;
			el.innerHTML = str;
			queueMicrotask(() => enhanceMarkdown(el as HTMLDivElement));
		} catch (err) {
			el.innerHTML = `<p class="rt-markdown__error">Failed to render docs: ${err}</p>`;
		}
	};

	createEffect(renderMarkdown);
	onCleanup(() => {
		el = undefined;
	});

	return (
		<div
			ref={(node) => {
				el = node;
				renderMarkdown();
			}}
			class="rt-markdown"
		/>
	);
}

function TableOfContents(props: { source: string }) {
	const headings = createMemo(() => {
		const list: { depth: number; text: string; id: string }[] = [];
		const regex = /^(#{1,6})\s+(.+)$/gm;
		let match = regex.exec(props.source);
		while (match !== null) {
			const depth = (match[1] ?? "").length;
			const raw = (match[2] ?? "").trim().replace(/`/g, "");
			const id = slugify(raw);
			if (id) list.push({ depth, text: raw, id });
			match = regex.exec(props.source);
		}
		return list;
	});

	const scrollTo = (id: string) => {
		const target = document.getElementById(id);
		target?.scrollIntoView({ behavior: "smooth", block: "start" });
		history.pushState(null, "", `#${id}`);
	};

	return (
		<nav class="rt-toc" aria-label="On this page">
			<div class="rt-toc__title">On this page</div>
			<Show
				when={headings().length > 0}
				fallback={<div class="rt-toc__empty">No headings</div>}
			>
				<ul class="rt-toc__list">
					<For each={headings()}>
						{(h) => (
							<li class={`rt-toc__item rt-toc__item--depth-${h.depth}`}>
								<button
									type="button"
									class="rt-toc__link"
									onClick={() => scrollTo(h.id)}
									aria-label={`Jump to ${h.text}`}
								>
									{h.text}
								</button>
							</li>
						)}
					</For>
				</ul>
			</Show>
		</nav>
	);
}

function WorkspaceView(props: {
	id: string;
	label: string;
	category: string;
	description: string;
	path: string;
	type: "rust" | "npm";
}) {
	const source = () => docs[props.id] ?? "";

	return (
		<div class="rt-workspace">
			<div class="rt-workspace__meta">
				<Badge variant={props.type === "rust" ? "info" : "default"}>
					{props.type.toUpperCase()}
				</Badge>
				<Tag>{props.category}</Tag>
			</div>
			<div class="rt-workspace__desc">
				<Text as="p">{props.description}</Text>
			</div>
			<div class="rt-workspace__path">
				<Text as="span" variant="dim">
					Path
				</Text>
				<div class="rt-workspace__path-row">
					<code class="rt-workspace__path-code">{props.path}</code>
					<CopyButton text={props.path} />
				</div>
			</div>
			<div class="rt-workspace__body">
				<div class="rt-workspace__docs">
					<MarkdownDoc source={source()} />
				</div>
				<aside class="rt-workspace__toc">
					<TableOfContents source={source()} />
				</aside>
			</div>
		</div>
	);
}

export const newSections: Section[] = workspaces.map((w) => ({
	id: w.id,
	label: w.label,
	category: w.category,
	description: w.description,
	render: () => (
		<ComponentDemo title={w.label} description={w.description}>
			<WorkspaceView {...w} />
		</ComponentDemo>
	),
}));
