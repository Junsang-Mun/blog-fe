export async function POST({ request }) {
	const { key } = await request.json();

	try {
		const response = await fetch(`${import.meta.env.VITE_DATABASE_URL}/items/${key}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': import.meta.env.VITE_X_API_KEY,
			},
		});

		if (response.status === 200) {
			const responseData = await response.json();
			return new Response(JSON.stringify(responseData), {
				headers: { 'Content-Type': 'application/json' },
			});
		} else {
			throw new Error(`Internal Server Error, ${response.status}`);
		}
	} catch (error) {
		throw new Error(`Internal Server Error, ${error}`);
	}
}
