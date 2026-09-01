import "./badge.css";

export type BadgeVariant =
	| "default"
	| "success"
	| "warning"
	| "danger"
	| "info"
	| "dim";

export interface BadgeProps {
	variant?: BadgeVariant;
	children: string;
}

export function Badge(props: BadgeProps) {
	return (
		<span
			class="rt-badge"
			classList={{ [`rt-badge--${props.variant ?? "default"}`]: true }}
		>
			{props.children}
		</span>
	);
}
