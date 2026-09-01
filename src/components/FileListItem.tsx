import { Show } from "solid-js";
import "./file-list-item.css";

export interface Props {
	name: string;
	type: "file" | "dir";
	size?: string;
	modified?: string;
	permissions?: string;
	gitStatus?: string;
	indent?: number;
	selected?: boolean;
	onClick?: () => void;
}

const gitColor: Record<string, string> = {
	M: "rt-git-modified",
	A: "rt-git-added",
	D: "rt-git-deleted",
	"??": "rt-git-untracked",
	U: "rt-git-updated",
};

export function FileListItem(props: Props) {
	const icon = () => (props.type === "dir" ? "▸" : "▫");

	return (
		<div
			class={`rt-file-list-item ${props.selected ? "rt-file-list-item--selected" : ""}`}
			onClick={props.onClick}
			role="button"
			style={{ "padding-left": `${(props.indent ?? 0) * 16}px` }}
		>
			<span class="rt-file-list-icon">{icon()}</span>
			<span class="rt-file-list-name">{props.name}</span>
			<Show when={props.size}>
				<span class="rt-file-list-size">{props.size}</span>
			</Show>
			<Show when={props.modified}>
				<span class="rt-file-list-modified">{props.modified}</span>
			</Show>
			<Show when={props.permissions}>
				<span class="rt-file-list-perms">{props.permissions}</span>
			</Show>
			<Show when={props.gitStatus}>
				<span
					class={`rt-file-list-git ${gitColor[props.gitStatus ?? ""] ?? ""}`}
				>
					{props.gitStatus}
				</span>
			</Show>
		</div>
	);
}
