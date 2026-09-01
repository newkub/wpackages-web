import { For, Show } from "solid-js";
import "./diff-view.css";

export interface Props {
	diff: string;
	showMinimap?: boolean;
}

function getLineClass(line: string): string {
	if (
		line.startsWith("@@") ||
		line.startsWith("diff") ||
		line.startsWith("index") ||
		line.startsWith("---") ||
		line.startsWith("+++")
	) {
		return "meta";
	}
	if (line.startsWith("+")) return "add";
	if (line.startsWith("-")) return "del";
	return "ctx";
}

export function DiffView(props: Props) {
	const lines = () => props.diff.split("\n");

	return (
		<div class="rt-diff-view">
			<Show when={props.showMinimap !== false}>
				<div class="rt-diff-minimap" aria-hidden="true">
					<For each={lines()}>
						{(line) => (
							<div
								class={`rt-diff-minimap-bar rt-diff-minimap-bar--${getLineClass(line)}`}
							/>
						)}
					</For>
				</div>
			</Show>
			<div class="rt-diff-body">
				<For each={lines()}>
					{(line, i) => (
						<div class={`rt-diff-line rt-diff-line--${getLineClass(line)}`}>
							<span class="rt-diff-line-number">{i() + 1}</span>
							<span class="rt-diff-line-content">{line || " "}</span>
						</div>
					)}
				</For>
			</div>
		</div>
	);
}
