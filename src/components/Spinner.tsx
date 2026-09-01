import "./spinner.css";

export interface SpinnerProps {
	size?: "sm" | "md" | "lg";
	label?: string;
}

export function Spinner(props: SpinnerProps) {
	const size = () => props.size ?? "md";
	return (
		<div class="rt-spinner" classList={{ [`rt-spinner--${size()}`]: true }}>
			<span class="rt-spinner__ring" aria-hidden="true" />
			{props.label && <span class="rt-spinner__label">{props.label}</span>}
		</div>
	);
}
