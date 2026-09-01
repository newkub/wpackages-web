import { render } from "solid-js/web";
import { App } from "./App";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("root element not found");
const root = rootEl;

function showError(error: unknown) {
	const message =
		error instanceof Error
			? `${error.message}\n${error.stack ?? ""}`
			: String(error);
	root.innerHTML = `
		<div style="padding: 24px; color: #ff6b6b; font-family: monospace; white-space: pre-wrap; overflow: auto;">
			<h1 style="font-size: 18px; margin: 0 0 12px; color: #ff6b6b;">Runtime error</h1>
			${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
		</div>
	`;
}

window.addEventListener("error", (event) => {
	showError(event.error ?? event.message);
});

window.addEventListener("unhandledrejection", (event) => {
	showError(event.reason);
});

try {
	render(() => <App />, root);
} catch (error) {
	showError(error);
}
