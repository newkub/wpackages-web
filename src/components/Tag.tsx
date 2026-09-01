import "./tag.css";

export interface TagProps {
	children: string;
	onRemove?: () => void;
}

export function Tag(props: TagProps) {
	return (
		<span class="rt-tag">
			<span class="rt-tag__label">{props.children}</span>
			{props.onRemove && (
				<button
					class="rt-tag__remove"
					onClick={props.onRemove}
					type="button"
					aria-label={`Remove ${props.children}`}
				>
					×
				</button>
			)}
		</span>
	);
}
