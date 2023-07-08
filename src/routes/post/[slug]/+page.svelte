<script>
	import { onMount } from "svelte";
	import { error } from "@sveltejs/kit";
	import { page } from "$app/stores";
	import apiUrl from "../../../urls.svelte";

	let data = {title: '', content: 'Loading... Please wait', date: ''};

	onMount(async () => {
		const result = await fetch(`${apiUrl}/posts/${$page.params.slug}`);
		const json = await result.json();
		console.log(json);
		if (json.success !== true)
			throw error(404, "Not found");
		console.log
		data = {
			title: json.data.title,
			content: json.data.body,
			date: json.data.date,
		};
	});
</script>

{#key data.content}
	<h1>{data.title}</h1>
	<p>{@html data.content}</p>
{/key}
