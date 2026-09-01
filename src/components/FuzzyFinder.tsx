import { createSignal, For } from "solid-js";
import "./fuzzy-finder.css";

export interface FuzzyItem {
	id: string;
	label: string;
}

export interface Props {
	items: FuzzyItem[];
	placeholder?: string;
	onSelect?: (item: FuzzyItem) => void;
	emptyText?: string;
}

export function FuzzyFinder(props: Props) {
	const [query, setQuery] = createSignal("");

	const filtered = () => {
		const q = query().toLowerCase();
		if (!q) return props.items;
		return props.items.filter((item) => item.label.toLowerCase().includes(q));
	};

	return (
		<div class="rt-fuzzy-finder">
			<input
				class="rt-fuzzy-finder-input"
				type="text"
				value={query()}
				onInput={(e) => setQuery(e.currentTarget.value)}
				placeholder={props.placeholder ?? "Search..."}
			/>
			<ul class="rt-fuzzy-finder-list">
				<For each={filtered()}>
					{(item) => (
						<li
							class="rt-fuzzy-finder-item"
							onClick={() => props.onSelect?.(item)}
						>
							{item.label}
						</li>
					)}
				</For>
			</ul>
			{filtered().length === 0 && (
				<div class="rt-fuzzy-finder-empty">
					{props.emptyText ?? "No results"}
				</div>
			)}
		</div>
	);
}
