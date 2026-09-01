import "./placeholder.css";

export type PlaceholderKind = "loading" | "empty" | "error";

export interface Props {
	kind: PlaceholderKind;
	message?: string;
}

const defaultMessage: Record<PlaceholderKind, string> = {
	loading: "Loading...",
	empty: "No items found",
	error: "Something went wrong",
};

const icon: Record<PlaceholderKind, string> = {
	loading: "◌",
	empty: "○",
	error: "×",
};

export function Placeholder(props: Props) {
	const text = () => props.message ?? defaultMessage[props.kind];

	return (
		<div class={`rt-placeholder rt-placeholder--${props.kind}`}>
			<span class="rt-placeholder-icon">{icon[props.kind]}</span>
			<span class="rt-placeholder-message">{text()}</span>
		</div>
	);
}
