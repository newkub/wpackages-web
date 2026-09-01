import { For } from "solid-js";
import "./table.css";

export interface TableColumn {
	key: string;
	header: string;
	width?: string;
}

export interface TableProps {
	columns: TableColumn[];
	rows: Record<string, string>[];
}

export function Table(props: TableProps) {
	return (
		<table class="rt-table">
			<thead>
				<tr>
					<For each={props.columns}>
						{(col) => <th style={{ width: col.width }}>{col.header}</th>}
					</For>
				</tr>
			</thead>
			<tbody>
				<For each={props.rows}>
					{(row) => (
						<tr>
							<For each={props.columns}>
								{(col) => <td>{row[col.key] ?? ""}</td>}
							</For>
						</tr>
					)}
				</For>
			</tbody>
		</table>
	);
}
