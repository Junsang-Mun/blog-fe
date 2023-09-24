<script>
	import 'carbon-components-svelte/css/g80.css';
	import { createArticle } from '$lib/api.js';

	let title, content, tag;
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		padding: 2rem;
		background-color: #fff;
		border-radius: 0.25rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		color: black;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	input, textarea {
		display: block;
		width: 100%;
		padding: 0.5rem;
		font-size: 1rem;
		line-height: 1.5;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		box-sizing: border-box;
	}

	textarea {
		min-height: 27rem;
	}

	button {
		display: block;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		font-weight: 600;
		color: #fff;
		background-color: #0072c3;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
	}
</style>

<div class="container">
	<h1 style="font-weight: 900;">글 쓰기</h1>
	<hr style="border: solid 0.05em white;">
	<div class="form-group">
		<label for="title">제목</label>
		<input id="title" placeholder="제목" bind:value={title} />
	</div>
	<div class="form-group">
		<label for="content">내용</label>
		<textarea id="content" placeholder="내용" bind:value={content} />
	</div>
	<div class="form-group">
		<label for="tag">태그</label>
		<input id="tag" placeholder="태그" bind:value={tag} />
	</div>
	<button on:click={() => { createArticle(title, content, tag) }}>글 쓰기</button>
</div>