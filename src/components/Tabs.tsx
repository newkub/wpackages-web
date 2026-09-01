import { createSignal, For } from "solid-js";
import "./tabs.css";

export interface TabsProps {
	labels: string[];
	initial?: number;
	onChange?: (index: number) => void;
}

export function Tabs(props: TabsProps) {
	const [active, setActive] = createSignal(props.initial ?? 0);

	function select(index: number) {
		setActive(index);
		props.onChange?.(index);
	}

	return (
		<div class="rt-tabs" role="tablist">
			<For each={props.labels}>
				{(label, i) => (
					<button
						class="rt-tab"
						classList={{ "rt-tab--active": active() === i() }}
						role="tab"
						aria-selected={active() === i()}
						onClick={() => select(i())}
						type="button"
					>
						{label}
					</button>
				)}
			</For>
		</div>
	);
}
