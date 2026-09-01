import "./empty-state.css";

export interface EmptyStateProps {
	title?: string;
	message?: string;
	icon?: string;
}

export function EmptyState(props: EmptyStateProps) {
	return (
		<div class="rt-empty-state">
			{props.icon && (
				<span class="rt-empty-state__icon" aria-hidden="true">
					{props.icon}
				</span>
			)}
			<div class="rt-empty-state__title">{props.title ?? "No items found"}</div>
			<div class="rt-empty-state__message">
				{props.message ?? "There is nothing to display here."}
			</div>
		</div>
	);
}
