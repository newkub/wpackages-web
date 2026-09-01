import { For } from "solid-js";
import "./breadcrumbs.css";

export interface Props {
	segments: string[];
	separator?: string;
	onSelect?: (index: number) => void;
}

export function Breadcrumbs(props: Props) {
	const sep = () => props.separator ?? ">";

	return (
		<nav class="rt-breadcrumbs" aria-label="Breadcrumbs">
			<For each={props.segments}>
				{(segment, i) => (
					<>
						<button
							class="rt-breadcrumb-segment"
							onClick={() => props.onSelect?.(i())}
							type="button"
							aria-label={`Select ${segment}`}
						>
							{segment}
						</button>
						{i() < props.segments.length - 1 && (
							<span class="rt-breadcrumb-separator">{sep()}</span>
						)}
					</>
				)}
			</For>
		</nav>
	);
}
