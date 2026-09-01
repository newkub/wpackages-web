import { type JSX, Show } from "solid-js";
import "./peek.css";

export interface Props {
	open: boolean;
	onClose: () => void;
	content: string | JSX.Element;
	title?: string;
}

export function Peek(props: Props) {
	return (
		<Show when={props.open}>
			<div class="rt-peek-overlay" onClick={props.onClose}>
				<div
					class="rt-peek"
					onClick={(e) => e.stopPropagation()}
					role="dialog"
					aria-modal="true"
				>
					<Show when={props.title}>
						<div class="rt-peek-title">{props.title}</div>
					</Show>
					<div class="rt-peek-body">
						{typeof props.content === "string" ? (
							<pre class="rt-peek-pre">{props.content}</pre>
						) : (
							props.content
						)}
					</div>
					<div class="rt-peek-actions">
						<button class="rt-btn" onClick={props.onClose} type="button">
							Close
						</button>
					</div>
				</div>
			</div>
		</Show>
	);
}
