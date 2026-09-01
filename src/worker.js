export default {
	async fetch(request, env) {
		if (request.method === "OPTIONS") {
			return new Response(null, {
				status: 204,
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
					"Access-Control-Allow-Headers": "*",
				},
			});
		}

		try {
			const response = await env.ASSETS.fetch(request);
			const headers = new Headers(response.headers);
			headers.set("Access-Control-Allow-Origin", "*");
			return new Response(response.body, {
				status: response.status,
				statusText: response.statusText,
				headers,
			});
		} catch (e) {
			return new Response(`Not found: ${e.message}\n${e.stack}`, {
				status: 404,
			});
		}
	},
};
