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
		const response = await fetch(`${import.meta.env.VITE_DATABASE_URL}/items`, {
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
		const data = await fetch(`${import.meta.env.VITE_DATABASE_URL}/items/${key}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': import.meta.env.VITE_X_API_KEY,
			},
		});
		return data.json();
	} catch (error) {
		console.error('Error:', error);
	}
}

export async function deleteArticle(article) {
	try {
		await fetch(`${import.meta.env.VITE_DATABASE_URL}/items`, {
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

export async function searchArticleByTag(tag) {
	try {
		if (tag === '모든 글') { ///////////////////////////////////////////
			return (readArticle()); ///////////////////////////////////////
		} /////////////////////////////////////////////////////////////////
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