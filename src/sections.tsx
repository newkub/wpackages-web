import type { JSX } from "solid-js";
import { createSignal } from "solid-js";
import { Badge } from "./components/Badge";
import { ComponentDemo } from "./components/ComponentDemo";
import { Tag } from "./components/Tag";
import { Text } from "./components/Text";
import { workspaces } from "./workspaces";
import "./sections.css";

export interface Section {
	id: string;
	label: string;
	render: () => JSX.Element;
	category?: string;
	description?: string;
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
			aria-label="Copy path"
			title="Copy path"
		>
			{copied() ? "Copied!" : "Copy"}
		</button>
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
