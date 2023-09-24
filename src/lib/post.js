function addZero(value) {
	if (value >= 10)
		return value;
	return `0${value}`;
}

function toStringByFormatting(source, delimiter = '-') {
	const year = source.getFullYear();
	const month = addZero(source.getMonth() + 1);
	const day = addZero(source.getDate());
	return [year, month, day].join(delimiter);
}

export async function createArticle(title, article, tag) {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/items`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': import.meta.env.VITE_X_API_KEY,
			},
			body: JSON.stringify({
				"item": {
					"title": title,
					"article": article,
					"tag": tag,
					"date": toStringByFormatting(new Date())
				}
			}),
		});
		const data = await response.json();
		console.log('LOG:', data);
	} catch (error) {
		console.error('Error:', error);
	}
}

export async function readArticle(key) {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/items/${key}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': import.meta.env.VITE_X_API_KEY,
			},
		});
	} catch (error) {
		console.error('Error:', error);
	}
}

export async function deleteArticle(article) {
	try {
		await fetch(`${import.meta.env.VITE_API_URL}/items`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': import.meta.env.VITE_X_API_KEY,
			},
			body: JSON.stringify(article),
		});
	} catch (error) {
		console.error('Error:', error);
	}
}
