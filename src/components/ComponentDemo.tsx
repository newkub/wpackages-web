import type { JSX } from "solid-js";
import "./component-demo.css";

export interface ComponentDemoProps {
	title: string;
	description?: string;
	children: JSX.Element;
}

export function ComponentDemo(props: ComponentDemoProps) {
	return (
		<article class="rt-component-demo">
			<header class="rt-component-demo__header">
				<h2 class="rt-component-demo__title">{props.title}</h2>
				{props.description && (
					<p class="rt-component-demo__desc">{props.description}</p>
				)}
			</header>
			<div class="rt-component-demo__stage">{props.children}</div>
		</article>
	);
}
