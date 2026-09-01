import { createSignal, type JSX, Show } from "solid-js";
import "./popup.css";

export interface PopupProps {
	trigger: (open: () => void) => JSX.Element;
	title?: string;
	children: JSX.Element;
	size?: "small" | "medium" | "large";
}

export function Popup(props: PopupProps) {
	const [isOpen, setIsOpen] = createSignal(false);

	function close() {
		setIsOpen(false);
	}

	return (
		<>
			{props.trigger(() => setIsOpen(true))}
			<Show when={isOpen()}>
				<div class="rt-popup-overlay" onClick={close}>
					<div
						class={`rt-popup rt-popup--${props.size ?? "medium"}`}
						onClick={(e) => e.stopPropagation()}
						role="dialog"
						aria-modal="true"
					>
						{props.title && <div class="rt-popup-title">{props.title}</div>}
						<div class="rt-popup-body">{props.children}</div>
						<div class="rt-popup-actions">
							<button
								class="rt-btn rt-btn--primary"
								onClick={close}
								type="button"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</Show>
		</>
	);
}
