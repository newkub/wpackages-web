import "./footer.css";

export interface FooterProps {
	items: [string, string][];
}

export function Footer(props: FooterProps) {
	return (
		<footer class="rt-footer">
			{props.items.map(([key, desc]) => (
				<span class="rt-footer-item">
					<span class="rt-footer-key">{key}</span>
					<span class="rt-footer-sep">:</span>
					<span class="rt-footer-desc">{desc}</span>
				</span>
			))}
		</footer>
	);
}
