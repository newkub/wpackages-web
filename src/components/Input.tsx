import { createSignal } from "solid-js";
import "./input.css";

export interface InputProps {
	placeholder?: string;
	label?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export function Input(props: InputProps) {
	const [value, setValue] = createSignal(props.value ?? "");

	function onInput(e: InputEvent & { currentTarget: HTMLInputElement }) {
		const v = e.currentTarget.value;
		setValue(v);
		props.onChange?.(v);
	}

	return (
		<label class="rt-input-label">
			{props.label && <span class="rt-input-title">{props.label}</span>}
			<input
				class="rt-input"
				type="text"
				value={value()}
				placeholder={props.placeholder}
				onInput={onInput}
			/>
		</label>
	);
}
