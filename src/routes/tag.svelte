<script>
	import { createEventDispatcher } from 'svelte';
	import 'carbon-components-svelte/css/g80.css';
	export let data;
	const dispatch = createEventDispatcher();

	const mock_data = [
		{
			title: '개발을 잘 하는 방법',
			content: '내용1',
			date: '2020-01-01',
			tags: '개발',
			key: 'bf09b-dfy98f'
		},
		{
			title: '청소를 했다',
			content: '내용2',
			date: '2020-01-01',
			tags: '일상',
			key: 'h54av-4f5a4'
		},
		{
			title: '졸지에 커뮤니티로 납치된 나',
			content: '내용3',
			date: '2020-01-01',
			tags: '커뮤니티',
			key: 'sb9f4-avd0u9'
		},
		{
			title: '그런건 없다',
			content: '내용4',
			date: '2020-01-01',
			tags: '개발',
			key: 'veh0a-5hjin'
		},
	];

	const updateView = (key) => {
		dispatch('updateView', {new_page: 'article', new_data: key});
	}
</script>

{#if data == '최근'}
	<h1>최근 포스트</h1>
	<p>최근에 찐 글을 모아두었습니다. 따끈따끈🔥</p>
{:else}
	<h1>{data}</h1>
	<p>{data} 태그로 분류된 기록을 모아두었습니다.</p>
{/if}
<hr style="border: solid 0.05em white;">
{#each mock_data as d}
	{#if data == '최근'}
		<br>
		<div on:click={() => updateView(d.key)} on:keypress={() => updateView(d.key)} style="cursor:pointer">
			<h1>{d.title}</h1>
			<p>{d.date}</p>
			<p>{d.tags}</p>
		</div>
	{:else if d.tags == data}
		<br>
		<div on:click={() => updateView(d.key)} on:keypress={() => updateView(d.key)} style="cursor:pointer">
			<h1>{d.title}</h1>
			<p>{d.date}</p>
			<p>{d.tags}</p>
		</div>
	{/if}
{/each}