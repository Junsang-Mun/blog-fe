export async function load({ params, url }) {
	try {
		const response = await fetch(`${url.origin}/api/post/?pageId=${params.slug}`, {
			method: 'GET',
		});
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		console.log(data);
		return { data };
	} catch (error) {
		console.error('Error:', error);
		return {
			status: 500,
			error: new Error('Failed to fetch data')
		};
	}
}