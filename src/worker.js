export default {
	async fetch(request, env) {
		try {
			return await env.ASSETS.fetch(request);
		} catch (e) {
			return new Response(`Not found: ${e.message}\n${e.stack}`, {
				status: 404,
			});
		}
	},
};
