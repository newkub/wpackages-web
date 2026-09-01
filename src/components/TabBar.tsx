import { For } from "solid-js";
import "./tab-bar.css";

export interface Tab {
	id: string;
	label: string;
	icon?: string;
}

export interface Props {
	tabs: Tab[];
	active: string;
	onSelect: (id: string) => void;
}

export function TabBar(props: Props) {
	return (
		<div class="rt-tab-bar" role="tablist">
			<For each={props.tabs}>
				{(tab) => (
					<button
						class={`rt-tab-bar-item ${props.active === tab.id ? "rt-tab-bar-item--active" : ""}`}
						classList={{ "rt-tab-bar-item--active": props.active === tab.id }}
						role="tab"
						aria-selected={props.active === tab.id}
						onClick={() => props.onSelect(tab.id)}
						type="button"
					>
						{tab.icon && <span class="rt-tab-bar-icon">{tab.icon}</span>}
						<span>{tab.label}</span>
					</button>
				)}
			</For>
		</div>
	);
}
