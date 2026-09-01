import "./statusbar.css";

export interface StatusBarProps {
	left?: string;
	center?: string;
	right?: string;
}

export function StatusBar(props: StatusBarProps) {
	return (
		<div class="rt-statusbar">
			<span class="rt-statusbar-left">{props.left ?? ""}</span>
			<span class="rt-statusbar-center">{props.center ?? ""}</span>
			<span class="rt-statusbar-right">{props.right ?? ""}</span>
		</div>
	);
}
