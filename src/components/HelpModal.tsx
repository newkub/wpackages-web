import { For, Show } from "solid-js";
import "./help-modal.css";

export interface KeyBinding {
	key: string;
	desc: string;
}

export interface Props {
	open: boolean;
	onClose: () => void;
	title?: string;
	bindings: KeyBinding[];
}

export function HelpModal(props: Props) {
	return (
		<Show when={props.open}>
			<div class="rt-help-modal-overlay" onClick={props.onClose}>
				<div
					class="rt-help-modal"
					onClick={(e) => e.stopPropagation()}
					role="dialog"
					aria-modal="true"
				>
					<div class="rt-help-modal-title">
						{props.title ?? "Keyboard shortcuts"}
					</div>
					<dl class="rt-help-modal-list">
						<For each={props.bindings}>
							{(binding) => (
								<div class="rt-help-modal-row">
									<dt class="rt-help-modal-key">{binding.key}</dt>
									<dd class="rt-help-modal-desc">{binding.desc}</dd>
								</div>
							)}
						</For>
					</dl>
					<div class="rt-help-modal-actions">
						<button class="rt-btn" onClick={props.onClose} type="button">
							Close
						</button>
					</div>
				</div>
			</div>
		</Show>
	);
}
