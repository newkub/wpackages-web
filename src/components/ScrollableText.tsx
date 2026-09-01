import "./scrollable-text.css";

export interface Props {
	content: string;
	maxHeight?: string;
}

export function ScrollableText(props: Props) {
	return (
		<div
			class="rt-scrollable-text"
			style={{ "max-height": props.maxHeight ?? "160px" }}
		>
			<p class="rt-scrollable-text-paragraph">{props.content}</p>
		</div>
	);
}
