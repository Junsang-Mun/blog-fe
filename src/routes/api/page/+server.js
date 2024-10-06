import { error } from '@sveltejs/kit';

export async function GET({ url }) {
	const pageId = url.searchParams.get('pageId');
	const notionApiKey = import.meta.env.VITE_NOTION_API_KEY;

	if (!pageId) {
		throw error(400, 'Missing pageId parameter');
	}

	try {
		const notionUrl = new URL(`https://api.notion.com/v1/pages/${pageId}`);

		const response = await fetch(notionUrl, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${notionApiKey}`,
				'Notion-Version': '2022-06-28'
			}
		});

		if (!response.ok) {
			throw error(response.status, `Notion API error: ${response.statusText}`);
		}

		const data = await response.json();
		return {
			status: 200,
			body: {
				results: data
			}
		};
	} catch (e) {
		console.error('Error:', e);
		throw error(500, 'Error fetching blocks from Notion API');
	}
}
