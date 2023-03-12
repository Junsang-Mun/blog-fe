<script>
	//@ts-nocheck
	import { onMount } from "svelte";
	const apiUrl = 'http://localhost:8080/api'
	let data = [];

	onMount(() => {
		fetch(`${apiUrl}/posts`).then((r) => {
			r.json().then((j) => {
				data = j.data;
			});
		}).catch((e) => {
			console.error(e);
			data = [{title: "Sorry, something went wrong", body: "Please check again later."}]
		})
	});
	const displayContent = (id) => {
		console.log(id);
	}
</script>

{#each data as post}
	<h1>{post.title}</h1>
	<p>{@html post.body}</p>
	{#if post.id !== undefined}
		<a on:click={displayContent(post.id)} href="/post/{post.id}">Go to post</a>
	{/if}
	<br>
{/each}