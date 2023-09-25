import { error } from '@sveltejs/kit';

export async function GET({ url }) {
	try {
		const searchParams = new URLSearchParams(url.search);
		const code = searchParams.get('code');
		const response = await fetch('https://github.com/login/oauth/access_token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({
				client_id: import.meta.env.VITE_CLIENT_ID,
				client_secret: import.meta.env.VITE_CLIENT_SECRET,
				code: code
			})
		});
		const data = await response.json();
		console.warn(data);
		return new Response(JSON.stringify({access_token: data.access_token}));
	} catch (e) {
		console.error('eee' + e);
		throw error(500, 'Failed to fetch access token');
	}
}
