import { text, error } from '@sveltejs/kit';

export async function GET() {
	const databaseId = import.meta.env.VITE_NOTION_PAGE_ID;
	const notionApiKey = import.meta.env.VITE_NOTION_API_KEY;

	try {
		const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${notionApiKey}`,
				'Notion-Version': '2022-06-28'
			}
		});
		// console.log(await response.json());
		if (response.status === 200 || response.status === 201) {
			const data = await response.json();
			return new Response(JSON.stringify(data));
		}
		throw error(500, 'Internal Database Error');

	} catch (e) {
		console.error(e);
	}
}
