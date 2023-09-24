<script>
	import { createEventDispatcher } from "svelte";
	import { searchArticleByTag } from "$lib/api.js";
	import "carbon-components-svelte/css/g80.css";
	export let data;
	let article;
	const dispatch = createEventDispatcher();
	const updateView = (key) => {
		dispatch("updateView", { new_page: "article", new_data: key });
	};
</script>

{#if data == "최근"}
	<h1>최근 포스트</h1>
	<p>최근에 찐 글을 모아두었습니다. 따끈따끈🔥</p>
{:else if data == "모든 글"}
	<h1>{data}</h1>
	<p>모든 글의 모음입니다.</p>
{:else}
	<h1>{data}</h1>
	<p>{data} 태그로 분류된 기록을 모아두었습니다.</p>
{/if}
<hr style="border: solid 0.05em white;" />

{#await searchArticleByTag(data)}
	<p>loading</p>
{:then r}
	{#if r.items && r.items.length > 0}
		{#each r.items as item}
			<h1 style="font-weight: 900; cursor: pointer;" on:click={() => updateView(item.key)}>{item.title}</h1>
			<p>{item.date}</p>
			<p>{item.tag}</p>
			<br>
		{/each}
	{:else}
		<p>No items found</p>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
