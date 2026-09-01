import type { JSX } from "solid-js";
import "./text.css";

export type TextVariant =
	| "default"
	| "dim"
	| "accent"
	| "warn"
	| "danger"
	| "bold";

export interface TextProps {
	variant?: TextVariant;
	as?: "p" | "span" | "code";
	children: JSX.Element;
}

const variantClass: Record<TextVariant, string> = {
	default: "",
	dim: "rt-text-dim",
	accent: "rt-text-accent",
	warn: "rt-text-warn",
	danger: "rt-text-danger",
	bold: "rt-text-bold",
};

/** Text renders styled inline/block text similar to ratatui Span/Line styling. */
export function Text(props: TextProps) {
	const Tag = (props.as ?? "p") as "p";
	return (
		<Tag class={variantClass[props.variant ?? "default"]}>{props.children}</Tag>
	);
}
