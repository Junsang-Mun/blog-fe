import { error } from '@sveltejs/kit';

async function getAllBlocks(pageId, notionApiKey) {
	let allBlocks = [];
	let hasMore = true;
	let startCursor = undefined;

	while (hasMore) {
		const url = new URL(`https://api.notion.com/v1/blocks/${pageId}/children`);
		if (startCursor) {
			url.searchParams.append('start_cursor', startCursor);
		}

		try {
			const response = await fetch(url, {
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
			allBlocks = allBlocks.concat(data.results);
			hasMore = data.has_more;
			startCursor = data.next_cursor;
		} catch (e) {
			console.error('Error fetching blocks:', e);
			throw error(500, 'Error fetching blocks from Notion API');
		}
	}

	return allBlocks;
}

export async function GET({ url }) {
	const pageId = url.searchParams.get('pageId');
	const notionApiKey = import.meta.env.VITE_NOTION_API_KEY;

	if (!pageId) {
		throw error(400, 'Missing pageId parameter');
	}

	try {
		const allBlocks = await getAllBlocks(pageId, notionApiKey);
		return new Response(JSON.stringify({ results: allBlocks }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		console.error(e);
		throw error(500, 'Internal Server Error');
	}
}