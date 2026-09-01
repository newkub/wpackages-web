import { createSignal, For, Show } from "solid-js";
import "./file-tree.css";

export interface FileTreeNode {
	name: string;
	type: "file" | "dir";
	children?: FileTreeNode[];
}

export interface Props {
	nodes: FileTreeNode[];
	initialExpanded?: string[];
}

export function FileTree(props: Props) {
	const [expanded, setExpanded] = createSignal(
		new Set(props.initialExpanded ?? []),
	);

	function toggle(name: string) {
		setExpanded((prev) => {
			const next = new Set(prev);
			if (next.has(name)) next.delete(name);
			else next.add(name);
			return next;
		});
	}

	return (
		<ul class="rt-file-tree">
			<For each={props.nodes}>
				{(node) => (
					<TreeNode
						node={node}
						expanded={expanded}
						onToggle={toggle}
						depth={0}
					/>
				)}
			</For>
		</ul>
	);
}

interface NodeProps {
	node: FileTreeNode;
	expanded: () => Set<string>;
	onToggle: (name: string) => void;
	depth: number;
}

function TreeNode(props: NodeProps) {
	const isDir = () => props.node.type === "dir";
	const isOpen = () => props.expanded().has(props.node.name);

	return (
		<li
			class="rt-file-tree-node"
			role="treeitem"
			aria-expanded={isDir() ? isOpen() : undefined}
		>
			<button
				class="rt-file-tree-row"
				onClick={() => isDir() && props.onToggle(props.node.name)}
				type="button"
				style={{ "padding-left": `${props.depth * 16}px` }}
			>
				<Show
					when={isDir()}
					fallback={
						<span class="rt-file-tree-icon rt-file-tree-icon--file">▸</span>
					}
				>
					<span
						class={`rt-file-tree-icon rt-file-tree-icon--dir ${isOpen() ? "rt-file-tree-icon--open" : ""}`}
					>
						{isOpen() ? "▼" : "▶"}
					</span>
				</Show>
				<span class="rt-file-tree-name">{props.node.name}</span>
			</button>
			<Show when={isDir() && isOpen()}>
				<ul class="rt-file-tree-children" role="group">
					<For each={props.node.children ?? []}>
						{(child) => (
							<TreeNode
								node={child}
								expanded={props.expanded}
								onToggle={props.onToggle}
								depth={props.depth + 1}
							/>
						)}
					</For>
				</ul>
			</Show>
		</li>
	);
}
