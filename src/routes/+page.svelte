<script>
	import 'carbon-components-svelte/css/g80.css';
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
</script>

<Header platformName="💻개발바닥🐶" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		<HeaderNavItem href="/" text="💻개발바닥🐶 홈" />
		<HeaderNavItem href="/" text="최근 포스트" />
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
		<SideNavLink text="개발 🐶🐾" />
		<SideNavLink text="커뮤니티 🎤" />
		<SideNavLink text="일상 🏡" />
		<SideNavDivider />
		<SideNavLink text="검색 🔎" />
	</SideNavItems>
</SideNav>

<Content>
	<slot>
		<h1>💻 개발바닥 🐶</h1>
		<br/>
		<p>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
			Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
			Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
			Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
			Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
			Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
		</p>
		<br/>
		<p>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
			Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
			Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
			Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
			Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
			Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
		</p>
		<br/>
		<p>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
			Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
			Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
			Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
			Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
			Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
		</p>
	</slot>
</Content>
