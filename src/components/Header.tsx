import type { JSX } from "solid-js";
import "./header.css";

export interface HeaderProps {
	title: string;
	subtitle?: JSX.Element;
}

export function Header(props: HeaderProps) {
	return (
		<header class="rt-header">
			<div class="rt-header-title">{props.title}</div>
			{props.subtitle && <div class="rt-header-subtitle">{props.subtitle}</div>}
		</header>
	);
}
