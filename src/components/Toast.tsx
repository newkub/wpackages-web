import { For } from "solid-js";
import "./toast.css";

export type ToastLevel = "info" | "success" | "warning" | "error";

export interface ToastItem {
	id: string;
	message: string;
	level: ToastLevel;
}

export interface ToastProps {
	toasts: ToastItem[];
}

export function Toast(props: ToastProps) {
	return (
		<div class="rt-toast-container" role="region" aria-live="polite">
			<For each={props.toasts}>
				{(toast) => (
					<div class={`rt-toast rt-toast--${toast.level}`}>{toast.message}</div>
				)}
			</For>
		</div>
	);
}
