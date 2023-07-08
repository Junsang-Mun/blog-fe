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
			window.location.href = `/404`;
		})
	});
	const displayContent = (id) => {
		console.log(id);
		window.location.href = `/post/${id}`;
	}
</script>

{#each data as post}
	<h1 on:click={displayContent(post.id)} on:keydown={() => {}} class="underline">{post.title}</h1>
	<p>{@html post.body.split(' ').slice(0,5).join(' ') + '...'}</p>
	<br>
{/each}