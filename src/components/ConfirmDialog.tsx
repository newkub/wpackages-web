import { Show } from "solid-js";
import "./confirm-dialog.css";

export interface Props {
	open: boolean;
	title?: string;
	message: string;
	onConfirm: () => void;
	onCancel: () => void;
	confirmText?: string;
	cancelText?: string;
}

export function ConfirmDialog(props: Props) {
	return (
		<Show when={props.open}>
			<div class="rt-confirm-overlay" onClick={props.onCancel}>
				<div
					class="rt-confirm-dialog"
					onClick={(e) => e.stopPropagation()}
					role="alertdialog"
					aria-modal="true"
				>
					<Show when={props.title}>
						<div class="rt-confirm-title">{props.title}</div>
					</Show>
					<div class="rt-confirm-message">{props.message}</div>
					<div class="rt-confirm-actions">
						<button
							class="rt-btn rt-confirm-btn--secondary"
							onClick={props.onCancel}
							type="button"
						>
							{props.cancelText ?? "No"}
						</button>
						<button class="rt-btn" onClick={props.onConfirm} type="button">
							{props.confirmText ?? "Yes"}
						</button>
					</div>
				</div>
			</div>
		</Show>
	);
}
