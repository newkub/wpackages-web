import { createSignal, For } from "solid-js";
import "./list.css";

export interface ListItemData {
	id: string;
	label: string;
}

export interface ListProps {
	items: ListItemData[];
	ariaLabel: string;
	onSelect?: (item: ListItemData) => void;
}

/** List renders a keyboard-navigable listbox similar to ratatui's List widget. */
export function List(props: ListProps) {
	const [activeIndex, setActiveIndex] = createSignal(0);

	function move(delta: number) {
		const len = props.items.length;
		if (len === 0) return;
		setActiveIndex((i) => (i + delta + len) % len);
	}

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === "ArrowDown") {
			e.preventDefault();
			move(1);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			move(-1);
		} else if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			const item = props.items[activeIndex()];
			if (item) props.onSelect?.(item);
		}
	}

	return (
		<ul
			class="rt-list"
			role="listbox"
			tabindex="0"
			aria-label={props.ariaLabel}
			aria-activedescendant={props.items[activeIndex()]?.id}
			onKeyDown={onKeyDown}
		>
			<For each={props.items}>
				{(item, i) => (
					<li
						id={item.id}
						role="option"
						aria-selected={i() === activeIndex()}
						class={`rt-list-item ${i() === activeIndex() ? "rt-list-item--active" : ""}`}
						onClick={() => {
							setActiveIndex(i());
							props.onSelect?.(item);
						}}
					>
						<span class="rt-list-marker">
							{i() === activeIndex() ? ">" : " "}
						</span>
						{item.label}
					</li>
				)}
			</For>
		</ul>
	);
}
