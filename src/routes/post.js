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

export async function _createArticle(title, article, tag) {
	fetch(`${import.meta.env.VITE_API_URL}/items`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			"item": {
				"title": title,
				"article": article,
				"tag": tag,
				"date": toStringByFormatting(new Date())
			}
		}),
		'X-API-KEY': import.meta.env.VITE_X_API_KEY,
	})
}

export async function _readArticle(key) {
	fetch(`${import.meta.env.VITE_API_URL}/items/${key}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
		'X-API-KEY': import.meta.env.VITE_X_API_KEY,
	})
}

export async function _deleteArticle(article) {
	fetch(`${import.meta.env.VITE_API_URL}/items`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(article),
		'X-API-KEY': import.meta.env.VITE_X_API_KEY,
	})
}
