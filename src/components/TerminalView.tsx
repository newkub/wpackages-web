import { For, type JSX } from "solid-js";
import "./terminal-view.css";

export interface Props {
	content: string;
}

const basicFg = [
	"#000000",
	"#c0392b",
	"#27ae60",
	"#f39c12",
	"#3498db",
	"#9b59b6",
	"#1abc9c",
	"#ecf0f1",
];
const brightFg = [
	"#7f8c8d",
	"#e74c3c",
	"#2ecc71",
	"#f1c40f",
	"#4aa3df",
	"#bb8fce",
	"#76d7c4",
	"#f4f6f7",
];
const basicBg = [
	"#000000",
	"#c0392b",
	"#27ae60",
	"#f39c12",
	"#3498db",
	"#9b59b6",
	"#1abc9c",
	"#ecf0f1",
];
const brightBg = [
	"#7f8c8d",
	"#e74c3c",
	"#2ecc71",
	"#f1c40f",
	"#4aa3df",
	"#bb8fce",
	"#76d7c4",
	"#f4f6f7",
];

function color256(n: number): string {
	const idx = Math.max(0, Math.min(255, n));
	if (idx < 16)
		return idx < 8
			? (basicFg[idx] ?? "#000000")
			: (brightFg[idx - 8] ?? "#000000");
	if (idx >= 232) {
		const v = 8 + (idx - 232) * 10;
		const hex = v.toString(16).padStart(2, "0");
		return `#${hex}${hex}${hex}`;
	}
	const i = idx - 16;
	const r = Math.floor(i / 36);
	const g = Math.floor((i % 36) / 6);
	const b = i % 6;
	const rv = r === 0 ? 0 : r * 40 + 55;
	const gv = g === 0 ? 0 : g * 40 + 55;
	const bv = b === 0 ? 0 : b * 40 + 55;
	return `#${rv.toString(16).padStart(2, "0")}${gv.toString(16).padStart(2, "0")}${bv.toString(16).padStart(2, "0")}`;
}

type StyleMap = JSX.CSSProperties;

interface Span {
	style: StyleMap;
	text: string;
}

function parseAnsi(line: string): Span[] {
	const spans: Span[] = [];
	let style: StyleMap = {};
	const regex = new RegExp("\\x1b\\[([\\d;]*)m", "g");
	let last = 0;
	let m: RegExpExecArray | null = regex.exec(line);

	while (m !== null) {
		if (m.index > last) {
			spans.push({ style, text: line.slice(last, m.index) });
		}
		const raw = m[1] ?? "";
		const codes = raw === "" ? [0] : raw.split(";").map(Number);
		let i = 0;
		while (i < codes.length) {
			const c = codes[i] ?? 0;
			switch (c) {
				case 0:
					style = {};
					break;
				case 1:
					style["font-weight"] = "700";
					break;
				case 2:
					style.opacity = "0.6";
					break;
				case 3:
					style["font-style"] = "italic";
					break;
				case 4:
					style["text-decoration"] = "underline";
					break;
				case 22:
					delete style["font-weight"];
					delete style.opacity;
					break;
				case 23:
					delete style["font-style"];
					break;
				case 24:
					delete style["text-decoration"];
					break;
				case 39:
					delete style.color;
					break;
				case 49:
					delete style["background-color"];
					break;
				default:
					if (c >= 30 && c <= 37) style.color = basicFg[c - 30];
					else if (c >= 90 && c <= 97) style.color = brightFg[c - 90];
					else if (c >= 40 && c <= 47)
						style["background-color"] = basicBg[c - 40];
					else if (c >= 100 && c <= 107)
						style["background-color"] = brightBg[c - 100];
					else if ((c === 38 || c === 48) && Number(codes[i + 1]) === 5) {
						const color = color256(Number(codes[i + 2]) || 0);
						if (c === 38) style.color = color;
						else style["background-color"] = color;
						i += 2;
					} else if ((c === 38 || c === 48) && Number(codes[i + 1]) === 2) {
						const r = Number(codes[i + 2]) || 0;
						const g = Number(codes[i + 3]) || 0;
						const b = Number(codes[i + 4]) || 0;
						const color = `rgb(${r},${g},${b})`;
						if (c === 38) style.color = color;
						else style["background-color"] = color;
						i += 4;
					}
			}
			i++;
		}
		last = regex.lastIndex;
		m = regex.exec(line);
	}

	if (last < line.length) {
		spans.push({ style, text: line.slice(last) });
	}

	return spans;
}

export function TerminalView(props: Props) {
	return (
		<div class="rt-terminal-view">
			<For each={props.content.split("\n")}>
				{(line) => (
					<div class="rt-terminal-view-line">
						{parseAnsi(line).map((span) => (
							<span style={span.style}>{span.text}</span>
						))}
					</div>
				)}
			</For>
		</div>
	);
}
