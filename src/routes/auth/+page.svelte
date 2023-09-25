<script>
	import { onMount } from 'svelte';
	import { getAccessToken } from '$lib/login.js';

	onMount(async () => {
		try {
			const code = new URLSearchParams(window.location.search).get('code');
			if (!code) {
				throw new Error('No code parameter found in the URL.');
			}
			const token = await fetch('/auth').then((res) => console.log(res.json()));
			localStorage.setItem('access_token', token);
			// window.location.href = '/';
		} catch (error) {
			console.error('Error:', error);
		}
	});
</script>

<h1>로그인 중...</h1>
