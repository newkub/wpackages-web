import { For, type JSX } from "solid-js";
import "./multi-column-layout.css";

export interface Props {
	columns: { width: string; children: JSX.Element }[];
}

export function MultiColumnLayout(props: Props) {
	return (
		<div class="rt-multi-column-layout">
			<For each={props.columns}>
				{(column) => (
					<div class="rt-multi-column" style={{ width: column.width }}>
						{column.children}
					</div>
				)}
			</For>
		</div>
	);
}
