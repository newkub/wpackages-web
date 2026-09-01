import { createSignal } from "solid-js";
import "./progress-bar.css";

export interface ProgressBarProps {
	value: number;
	max?: number;
	label?: string;
	color?: "accent" | "warn" | "danger" | "primary";
}

export function ProgressBar(props: ProgressBarProps) {
	const max = () => props.max ?? 100;
	const percentage = () =>
		Math.min(100, Math.max(0, (props.value / max()) * 100));

	return (
		<div class="rt-progress">
			{props.label && (
				<div class="rt-progress__header">
					<span class="rt-progress__label">{props.label}</span>
					<span class="rt-progress__value">{percentage().toFixed(0)}%</span>
				</div>
			)}
			<div class="rt-progress__track">
				<div
					class="rt-progress__fill"
					classList={{
						[`rt-progress__fill--${props.color ?? "accent"}`]: true,
					}}
					style={{ width: `${percentage()}%` }}
					role="progressbar"
					aria-valuenow={props.value}
					aria-valuemax={max()}
					aria-label={props.label ?? "Progress"}
				/>
			</div>
		</div>
	);
}

export function InteractiveProgressBar() {
	const [value, setValue] = createSignal(45);
	return (
		<div class="rt-progress-interactive">
			<ProgressBar value={value()} label="Download" />
			<input
				type="range"
				min={0}
				max={100}
				value={value()}
				onInput={(e) => setValue(Number(e.currentTarget.value))}
				class="rt-progress__input"
				aria-label="Adjust progress"
			/>
		</div>
	);
}
