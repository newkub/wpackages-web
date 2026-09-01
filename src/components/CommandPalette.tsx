import { createSignal, For, Show } from "solid-js";
import "./command-palette.css";

export interface CommandItem {
	id: string;
	label: string;
}

export interface Props {
	items: CommandItem[];
	isOpen: boolean;
	onClose: () => void;
	onSelect?: (item: CommandItem) => void;
	placeholder?: string;
	emptyText?: string;
}

export function CommandPalette(props: Props) {
	const [query, setQuery] = createSignal("");

	const filtered = () => {
		const q = query().toLowerCase();
		if (!q) return props.items;
		return props.items.filter((item) => item.label.toLowerCase().includes(q));
	};

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === "Escape") {
			props.onClose();
		} else if (e.key === "Enter") {
			const first = filtered()[0];
			if (first) {
				props.onSelect?.(first);
				props.onClose();
			}
		}
	}

	return (
		<Show when={props.isOpen}>
			<div class="rt-command-palette-overlay" onClick={props.onClose}>
				<div
					class="rt-command-palette"
					onClick={(e) => e.stopPropagation()}
					role="dialog"
					aria-modal="true"
				>
					<input
						class="rt-command-palette-input"
						type="text"
						value={query()}
						onInput={(e) => setQuery(e.currentTarget.value)}
						onKeyDown={onKeyDown}
						placeholder={props.placeholder ?? "Type a command..."}
						autofocus
					/>
					<ul class="rt-command-palette-list">
						<For each={filtered()}>
							{(item) => (
								<li
									class="rt-command-palette-item"
									onClick={() => {
										props.onSelect?.(item);
										props.onClose();
									}}
								>
									{item.label}
								</li>
							)}
						</For>
					</ul>
					<Show when={filtered().length === 0}>
						<div class="rt-command-palette-empty">
							{props.emptyText ?? "No results"}
						</div>
					</Show>
				</div>
			</div>
		</Show>
	);
}
