<script>
	import 'carbon-components-svelte/css/g80.css';
	import { readArticle } from '$lib/api.js';
	import SvelteMarkdown from 'svelte-markdown';
	export let data;

	const copyUrl = (key) => {
		navigator.clipboard.writeText(`https://junsang.dev/?article=${key}`);
	}
</script>

<style>
	svg {
		cursor: pointer;
	}
	svg:hover {
		color: #ffffff99;
	}
	.titleBar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.tag {
		background-color: azure;
		color: black;
		padding-top: 0.2em;
		padding-bottom: 0.2em;
		padding-left: 0.4em;
		padding-right: 0.4em;
		border-radius: 0.2em;
		width: fit-content;
	}
</style>

{#await readArticle(data)}
	<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; padding-top:5rem">
		<p> 로딩 중... </p>
	</div>
{:then r}
	<div class=titleBar>
		<h1 style="font-weight: 900; cursor: pointer;" on:click={() => copyUrl(r.key)}>{r.title}</h1>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="2rem" height="2rem" on:click={()=>{copyUrl(r.key)}}><rect width="256" height="256" fill="none"/><path d="M131.88,192l-9.94,9.94a48,48,0,0,1-67.88-67.88L78.17,110A48,48,0,0,1,144,108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M124.12,64l9.94-9.94a48,48,0,0,1,67.88,67.88l-24.11,24.11A48,48,0,0,1,112,148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
	</div>
	<p>{r.date}</p>
	<p class=tag>{r.tag}</p>
	<br>
	<hr>
	<br>
	<SvelteMarkdown source={r.article} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
