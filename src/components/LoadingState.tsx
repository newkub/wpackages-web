import { Spinner } from "./Spinner";
import "./loading-state.css";

export interface LoadingStateProps {
	message?: string;
	size?: "sm" | "md" | "lg";
}

export function LoadingState(props: LoadingStateProps) {
	return (
		<div class="rt-loading-state">
			<Spinner size={props.size} />
			{props.message && (
				<span class="rt-loading-state__message">{props.message}</span>
			)}
		</div>
	);
}
