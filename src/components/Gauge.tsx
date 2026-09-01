import "./gauge.css";

export interface GaugeProps {
	label?: string;
	value: number;
	max?: number;
	color?: "primary" | "success" | "warning" | "danger";
}

export function Gauge(props: GaugeProps) {
	const max = props.max ?? 100;
	const ratio = Math.max(0, Math.min(1, props.value / max));
	const percent = Math.round(ratio * 100);
	return (
		<div class="rt-gauge">
			<div class="rt-gauge-track">
				<div
					class={`rt-gauge-fill rt-gauge-fill--${props.color ?? "primary"}`}
					style={{ width: `${percent}%` }}
				/>
			</div>
			<div class="rt-gauge-label">
				{props.label ?? ""} {percent}%
			</div>
		</div>
	);
}
