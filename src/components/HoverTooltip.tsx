import { createSignal, type JSX, Show } from "solid-js";
import "./hover-tooltip.css";

export interface Props {
	children: JSX.Element;
	content: JSX.Element;
	maxWidth?: number;
}

export function HoverTooltip(props: Props) {
	const [visible, setVisible] = createSignal(false);
	const [pos, setPos] = createSignal({ x: 0, y: 0 });

	return (
		<span
			class="rt-hover-tooltip"
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			onMouseMove={(e) => setPos({ x: e.clientX + 12, y: e.clientY + 12 })}
		>
			{props.children}
			<Show when={visible()}>
				<div
					class="rt-hover-tooltip-popup"
					style={{
						left: `${pos().x}px`,
						top: `${pos().y}px`,
						"max-width": `${props.maxWidth ?? 280}px`,
					}}
				>
					{props.content}
				</div>
			</Show>
		</span>
	);
}
