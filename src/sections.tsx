import type { JSX } from "solid-js";
import { Badge } from "./components/Badge";
import { ComponentDemo } from "./components/ComponentDemo";
import { Tag } from "./components/Tag";
import { Text } from "./components/Text";
import { workspaces } from "./workspaces";

export interface Section {
	id: string;
	label: string;
	render: () => JSX.Element;
	category?: string;
	description?: string;
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
		<div style={{ display: "flex", "flex-direction": "column", gap: "12px" }}>
			<div style={{ display: "flex", gap: "8px", "align-items": "center" }}>
				<Badge variant={props.type === "rust" ? "info" : "default"}>
					{props.type.toUpperCase()}
				</Badge>
				<Tag>{props.category}</Tag>
			</div>
			<Text as="p" variant="dim">
				Path: <code>{props.path}</code>
			</Text>
			<Text as="p">{props.description}</Text>
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
