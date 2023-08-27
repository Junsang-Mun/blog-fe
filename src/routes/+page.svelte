<script>
	import { isDarkMode } from '../stores/theme.js';
	import { onMount } from 'svelte';
	
	function openUrl(url) {
		window.open(url, "_blank");
	}
	onMount(() => {
		const unsubscribe = isDarkMode.subscribe((value) => {
			if (value) {
				document.body.classList.add('dark');
				console.log(document.body.classList);
			} else {
				document.body.classList.remove('dark');
				console.log(document.body.classList);
			}
		});

		return unsubscribe;
	});
</script>

<div class="page">
	<div id="main">
		<h1 id="title">제주고양이 - ChejuCat</h1>
		<div id="outlinks">
			<button class="social" id="linkedin" on:click={() => openUrl("https://www.linkedin.com/in/%EC%A4%80%EC%83%81-%EB%AC%B8-b567b027a/")}><img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="To My LinkedIn Profile"/></button>
			<button class="social round" id="github" on:click={() => openUrl("https://github.com/Junsang-Mun")}><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="To My GitHub Profile"/></button>
			<button class="social round" id="facebook" on:click={() => openUrl("https://www.facebook.com/profile.php?id=100032805280715")}><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="To My Facebook Profile"/></button>
		</div>
	</div>

	<label class="switch">
		<input type="checkbox" bind:checked={$isDarkMode} />
		<span class="slider round" />
	</label>
</div>
