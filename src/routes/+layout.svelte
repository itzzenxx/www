<script lang="ts">
	import avatar138 from '/assets/avatar-138px.webp';
	import avatar276 from '/assets/avatar-276px.webp';
	import avatar from '/assets/avatar.webp';
	import { page } from '$app/state';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>{page.url.pathname} | zen's comfy burrow</title>
	<meta name="description" content="the personal website of zen" />
	<meta content="#d3d3d3" name="theme-color" />
	<meta property="og:title" content="zen's comfy burrow | {page.url.pathname}" />
	<meta property="og:description" content="the personal website of zen" />
	<meta property="og:url" content="https://itzzen.net{page.url.pathname}" />
	<meta property="og:image" content={avatar} />
</svelte:head>

<header>
	<a href="/"><h1>zen's comfy burrow</h1></a>
	<p>🌺 🦋 ⚡ 🪻 💻 🌼 ❄️ 🌙</p>
</header>

<main>
	<aside>
		<nav>
			<a href="/" class:active={page.url.pathname == '/'}><i class="icons house"></i> home</a>
			<a href="/about/" class:active={page.url.pathname == '/about/'}><i class="icons address-card"></i> about us</a>
			<a href="/blog/" class:active={page.url.pathname == '/blog/'}><i class="icons newspaper"></i> our blog</a>
			<a href="/contact/" class:active={page.url.pathname == '/contact/'}><i class="icons paper-plane"></i> contact</a>
			<a href="/donate/" class:active={page.url.pathname == '/donate/'}><i class="icons coins"></i> donate</a>
			<a href="/links/" class:active={page.url.pathname == '/links/'}><i class="icons earth"></i> links</a>
			<a href="/presence/" class:active={page.url.pathname == '/presence/'}><i class="icons share-nodes"></i> presence</a>
			<a href="/projects/" class:active={page.url.pathname == '/projects/'}><i class="icons terminal"></i> projects</a>
		</nav>
		<hr />
		<a href={avatar} class="avatar"><img src={avatar} alt="a waxing crescent moon" title="me.webp" srcset="{avatar138} 138w, {avatar276} 276w, {avatar} 512w" sizes="138px" /></a>
	</aside>

	<article>
		{@render children?.()}
	</article>
</main>

<footer>
	<p><i>made with</i> ❤ <i>by zen | <i>site last modified 2026-03-08</i> | <a href="https://codeberg.org/itzzen/www">source code viewable here</a></i></p>
</footer>
