import type { JSX } from "solid-js";
import "./panel.css";

export interface PanelProps {
	title?: string;
	borderColor?: "default" | "accent" | "warn" | "danger";
	children: JSX.Element;
}

/**
 * Panel mimics a ratatui `Block` with a bordered box and optional title.
 */
export function Panel(props: PanelProps) {
	return (
		<section
			class={`rt-panel rt-panel--${props.borderColor ?? "default"}`}
			role="group"
			aria-label={props.title}
		>
			{props.title && <div class="rt-panel-title">{props.title}</div>}
			<div class="rt-panel-body">{props.children}</div>
		</section>
	);
}
