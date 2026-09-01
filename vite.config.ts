import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

function removeCrossorigin() {
	return {
		name: "remove-crossorigin",
		transformIndexHtml(html: string) {
			return html.replace(/\s+crossorigin(="anonymous")?/g, "");
		},
		enforce: "post" as const,
	};
}

export default defineConfig({
	plugins: [solid(), removeCrossorigin()],
	server: {
		port: 5173,
	},
	build: {
		target: "esnext",
		outDir: "dist",
	},
});
