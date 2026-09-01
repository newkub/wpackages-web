import { createSignal, For, Show } from "solid-js";
import "./autocomplete.css";

export interface AutocompleteOption {
	label: string;
	value: string;
	kind?: string;
}

export interface Props {
	options: AutocompleteOption[];
	value?: string;
	onChange?: (value: string) => void;
	onSelect?: (option: AutocompleteOption) => void;
	placeholder?: string;
}

export function Autocomplete(props: Props) {
	const [value, setValue] = createSignal(props.value ?? "");
	const [isOpen, setIsOpen] = createSignal(false);

	const filtered = () => {
		const q = value().toLowerCase();
		if (!q) return props.options;
		return props.options.filter(
			(opt) =>
				opt.label.toLowerCase().includes(q) ||
				opt.value.toLowerCase().includes(q),
		);
	};

	function onInput(e: InputEvent & { currentTarget: HTMLInputElement }) {
		const v = e.currentTarget.value;
		setValue(v);
		setIsOpen(true);
		props.onChange?.(v);
	}

	function select(option: AutocompleteOption) {
		setValue(option.value);
		setIsOpen(false);
		props.onSelect?.(option);
		props.onChange?.(option.value);
	}

	return (
		<div class="rt-autocomplete">
			<input
				class="rt-autocomplete-input"
				type="text"
				value={value()}
				onInput={onInput}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setTimeout(() => setIsOpen(false), 120)}
				placeholder={props.placeholder ?? "Type to complete..."}
			/>
			<Show when={isOpen() && filtered().length > 0}>
				<ul class="rt-autocomplete-list">
					<For each={filtered()}>
						{(option) => (
							<li class="rt-autocomplete-item" onClick={() => select(option)}>
								<span class="rt-autocomplete-label">{option.label}</span>
								<Show when={option.kind}>
									<span class="rt-autocomplete-kind">{option.kind}</span>
								</Show>
							</li>
						)}
					</For>
				</ul>
			</Show>
		</div>
	);
}
