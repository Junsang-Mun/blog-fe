<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import 'carbon-components-svelte/css/g80.css';
	import Article from '$lib/article.svelte';
	import Tag from '$lib/tag.svelte';
	import Search from '$lib/search.svelte';
	import Write from '$lib/write.svelte'
	import Copyright from '$lib/copyright.svelte'
	import Main from '$lib/main.svelte';
	import {
		Header,
		HeaderUtilities,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		SideNav,
		SideNavItems,
		SideNavLink,
		SkipToContent,
		Content,
		SideNavDivider
	} from 'carbon-components-svelte';
	let isSideNavOpen = false;
	let pageToShow = 'main';
	let data = '최근';
	const urlParam = $page.url.searchParams.get('article');
	const loggedIn = true;

	function changePageToShow(new_page, new_data) {
		pageToShow = new_page;
		data = new_data;
	}
	onMount(() => {
		if (urlParam) {
			changePageToShow('article', urlParam);
		}
	});
</script>

<Header platformName="💻개발바닥🐶" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		<HeaderNavItem href="/" text="💻개발바닥🐶 홈" on:click={() => changePageToShow('main')}/>
		<HeaderNavItem href="/" text="최근 포스트" on:click={() => changePageToShow('tag', '최근')}/>
		<HeaderNavMenu text="Contacts" >
			<HeaderNavItem href="mailto:mun.js@aol.com" text="Mail" />
			<HeaderNavItem href="https://github.com/Junsang-Mun" text="GitHub" />
			<HeaderNavItem href="https://www.linkedin.com/in/%EC%A4%80%EC%83%81-%EB%AC%B8-b567b027a/" text="LinkedIn" />
		</HeaderNavMenu>
	</HeaderNav>
	<HeaderUtilities>
	</HeaderUtilities>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink href="/" text="💻개발바닥🐶 홈" on:click={() => changePageToShow('main')}/>
			<SideNavDivider />
		<SideNavLink text="모든 글 📝" on:click={() => changePageToShow('tag', '모든 글')}/>
		<SideNavLink text="개발 🐶🐾" on:click={() => changePageToShow('tag', '개발')} />
		<SideNavLink text="커뮤니티 🎤" on:click={() => changePageToShow('tag', '커뮤니티')}/>
		<SideNavLink text="일상 🏡" on:click={() => changePageToShow('tag', '일상')}/>
		<SideNavDivider />
		<SideNavLink text="검색 🔎" on:click={() => changePageToShow('search')}/>
		<SideNavLink text="Copyright Notice" on:click={() => changePageToShow('copyright')}/>
		{#if loggedIn}
			<SideNavDivider />
			<SideNavLink text="Admin: 글 쓰기" on:click={() => changePageToShow('write')}/>
		{/if}
	</SideNavItems>
</SideNav>

<Content>
	{#if pageToShow == 'tag'}
		<Tag on:updateView={(event) => changePageToShow(event.detail.new_page, event.detail.new_data)} {data}/>
	{:else if pageToShow == 'copyright'}
		<Copyright {data}/>
	{:else if pageToShow == 'article'}
		<Article {data}/>
	{:else if pageToShow == 'search'}
		<Search {data}/>
	{:else if pageToShow == 'write'}
		<Write />
	{:else}
		<Main {data}/>
	{/if}
</Content>
