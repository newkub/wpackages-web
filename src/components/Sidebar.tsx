import { For, type JSX, Show } from "solid-js";
import "./sidebar.css";

export interface SidebarSection {
	title: string;
	children: JSX.Element;
}

export interface Props {
	title?: string;
	sections: SidebarSection[];
}

export function Sidebar(props: Props) {
	return (
		<aside class="rt-sidebar">
			<Show when={props.title}>
				<div class="rt-sidebar-title">{props.title}</div>
			</Show>
			<For each={props.sections}>
				{(section) => (
					<div class="rt-sidebar-section">
						<div class="rt-sidebar-section-title">{section.title}</div>
						<div class="rt-sidebar-section-body">{section.children}</div>
					</div>
				)}
			</For>
		</aside>
	);
}
