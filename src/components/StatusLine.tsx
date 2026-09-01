import type { JSX } from "solid-js";
import "./status-line.css";

export interface Props {
	left?: JSX.Element;
	center?: JSX.Element;
	right?: JSX.Element;
}

export function StatusLine(props: Props) {
	return (
		<div class="rt-status-line">
			<span class="rt-status-line-left">{props.left}</span>
			<span class="rt-status-line-center">{props.center}</span>
			<span class="rt-status-line-right">{props.right}</span>
		</div>
	);
}
