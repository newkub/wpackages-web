import { createSignal, For } from "solid-js";
import "./toast-manager.css";

export type ToastLevel = "info" | "success" | "warning" | "error";

export interface ToastItem {
	id: string;
	message: string;
	level: ToastLevel;
}

export interface Props {
	initial?: ToastItem[];
}

export function ToastManager(props: Props) {
	const [toasts, setToasts] = createSignal(props.initial ?? []);
	let nextId = toasts().length + 1;

	function add(message: string, level: ToastLevel = "info") {
		const id = String(nextId++);
		setToasts((prev) => [...prev, { id, message, level }]);
	}

	function dismiss(id: string) {
		setToasts((prev) => prev.filter((t) => t.id !== id));
	}

	return (
		<div class="rt-toast-manager">
			<div class="rt-toast-manager-controls">
				<button
					class="rt-btn"
					onClick={() => add("Info toast", "info")}
					type="button"
				>
					Add info
				</button>
				<button
					class="rt-btn"
					onClick={() => add("Success toast", "success")}
					type="button"
				>
					Add success
				</button>
				<button
					class="rt-btn"
					onClick={() => add("Warning toast", "warning")}
					type="button"
				>
					Add warning
				</button>
				<button
					class="rt-btn"
					onClick={() => add("Error toast", "error")}
					type="button"
				>
					Add error
				</button>
			</div>
			<div class="rt-toast-manager-list" role="region" aria-live="polite">
				<For each={toasts()}>
					{(toast) => (
						<div
							class={`rt-toast-manager-item rt-toast-manager-item--${toast.level}`}
						>
							<span>{toast.message}</span>
							<button
								class="rt-toast-manager-close"
								onClick={() => dismiss(toast.id)}
								type="button"
								aria-label="Dismiss"
							>
								×
							</button>
						</div>
					)}
				</For>
			</div>
		</div>
	);
}
