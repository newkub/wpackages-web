import "./search-input.css";

export interface SearchInputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

export function SearchInput(props: SearchInputProps) {
	return (
		<div class="rt-search">
			<span class="rt-search__icon" aria-hidden="true" />
			<input
				class="rt-search__input"
				type="search"
				value={props.value}
				onInput={(e) => props.onChange(e.currentTarget.value)}
				placeholder={props.placeholder ?? "Search components..."}
				aria-label="Search components"
			/>
			{props.value && (
				<button
					class="rt-search__clear"
					onClick={() => props.onChange("")}
					type="button"
					aria-label="Clear search"
				>
					<span aria-hidden="true">x</span>
				</button>
			)}
		</div>
	);
}
