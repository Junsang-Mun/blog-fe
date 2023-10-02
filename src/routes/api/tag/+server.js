import { json, error } from '@sveltejs/kit';

export async function POST({ request }) {
	const tag = request.body.get('tag');
	try {
		const data = await fetch(`${import.meta.env.VITE_DATABASE_URL}/query`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': import.meta.env.VITE_X_API_KEY,
			},
			body: JSON.stringify({
				"query": [{
					"tag": tag,
				}]
			}),
		});
		return new Response(data.json());
	} catch (e) {
		throw error(400, e);
	}
}

/*
export async function searchArticleByTag(tag) {
	try {
		const data = await fetch(`${import.meta.env.VITE_DATABASE_URL}/query`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': import.meta.env.VITE_X_API_KEY,
			},
			body: JSON.stringify({
				"query": [{
					"tag": tag,
				}]
			}),
		})
		return data.json();
	} catch (error) {
		console.error('Error:', error);
	}
}
*/