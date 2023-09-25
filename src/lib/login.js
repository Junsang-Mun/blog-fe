export async function getAccessToken(code) {
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
	return data.access_token;
}
