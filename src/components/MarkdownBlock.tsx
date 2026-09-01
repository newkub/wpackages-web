import type { JSX } from "solid-js";
import "./markdown-block.css";

export interface Props {
	content: string;
}

function processInline(text: string): JSX.Element {
	const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_)/g);
	return (
		<>
			{parts.map((part) => {
				if (part.startsWith("**") && part.endsWith("**")) {
					return <strong>{part.slice(2, -2)}</strong>;
				}
				if (part.startsWith("*") && part.endsWith("*")) {
					return <em>{part.slice(1, -1)}</em>;
				}
				if (part.startsWith("_") && part.endsWith("_")) {
					return <em>{part.slice(1, -1)}</em>;
				}
				return part;
			})}
		</>
	);
}

export function MarkdownBlock(props: Props) {
	const blocks: JSX.Element[] = [];
	let listItems: JSX.Element[] = [];
	let listType: "ul" | "ol" | null = null;

	function flushList() {
		if (listItems.length && listType) {
			const Tag = listType;
			blocks.push(<Tag class="rt-markdown-block-list">{listItems}</Tag>);
			listItems = [];
			listType = null;
		}
	}

	for (const raw of props.content.split("\n")) {
		const line = raw.replace(/\r$/, "");
		const heading = line.match(/^(#{1,6})\s+(.*)$/);

		if (heading) {
			flushList();
			const hashes = heading[1] ?? "";
			const text = heading[2] ?? "";
			const level = Math.min(6, hashes.length) as 1 | 2 | 3 | 4 | 5 | 6;
			const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
			blocks.push(
				<Tag
					class={`rt-markdown-block-heading rt-markdown-block-heading--${level}`}
				>
					{processInline(text)}
				</Tag>,
			);
			continue;
		}

		if (line.match(/^[-*]\s+/)) {
			if (listType && listType !== "ul") flushList();
			listType = "ul";
			listItems.push(
				<li class="rt-markdown-block-li">
					{processInline(line.replace(/^[-*]\s+/, ""))}
				</li>,
			);
			continue;
		}

		const numbered = line.match(/^(\d+)\.\s+(.*)$/);
		if (numbered) {
			if (listType && listType !== "ol") flushList();
			listType = "ol";
			const text = numbered[2] ?? "";
			listItems.push(
				<li class="rt-markdown-block-li">{processInline(text)}</li>,
			);
			continue;
		}

		if (line.trim() === "") {
			flushList();
			continue;
		}

		flushList();
		blocks.push(
			<p class="rt-markdown-block-paragraph">{processInline(line)}</p>,
		);
	}

	flushList();

	return <div class="rt-markdown-block">{blocks}</div>;
}
