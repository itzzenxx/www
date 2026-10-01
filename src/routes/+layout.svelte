<script lang="ts">
	import avatar138 from '$lib/assets/avatar-138px.webp';
	import avatar276 from '$lib/assets/avatar-276px.webp';
	import avatar from '$lib/assets/avatar.webp';
	import favicon16 from '$lib/assets/favicon-16.png';
	import favicon32 from '$lib/assets/favicon-32.png';
	import appletouchicon from '$lib/assets/apple-touch-icon.png';
	import { page } from '$app/state';
	interface Props {
		children?: import('svelte').Snippet;
	}
	let { children }: Props = $props();
</script>

<svelte:head>
	<title>{page.url.pathname} | zen's comfy burrow</title>
	<link rel="icon" href={favicon16} type="image/png" sizes="16x16" />
	<link rel="icon" href={favicon32} type="image/png" sizes="32x32" />
	<link rel="apple-touch-icon" href={appletouchicon} />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="the personal website of zen" />
	<meta content="#d3d3d3" name="theme-color" />
	<meta property="og:title" content="zen's comfy burrow | {page.url.pathname}" />
	<meta property="og:description" content="the personal website of zen" />
	<meta property="og:url" content="https://itzzen.net{page.url.pathname}" />
	<meta property="og:image" content={avatar} />
</svelte:head>

<header>
	<a href="/"><h1>zen's comfy burrow</h1></a>
</header>

<main>
	<aside>
		<nav>
			<a href="/" class:active={page.url.pathname == '/'}><i class="icons house"></i> home</a>
			<a href="/about/" class:active={page.url.pathname == '/about/'}><i class="icons address-card"></i> about us</a>
			<a href="/blog/" class:active={page.url.pathname == '/blog/'}><i class="icons newspaper"></i> our blog</a>
			<a href="/contact/" class:active={page.url.pathname == '/contact/'}><i class="icons paper-plane"></i> contact</a>
			<a href="/portfolio/" class:active={page.url.pathname == '/portfolio/'}><i class="icons briefcase"></i> portfolio</a>
			<a href="/social/" class:active={page.url.pathname == '/social/'}><i class="icons share-nodes"></i> social</a>
		</nav>
		<hr />
		<a href={avatar} class="avatar"><img src={avatar} alt="a waxing crescent moon" title="me.webp" srcset="{avatar138} 138w, {avatar276} 276w, {avatar} 512w" sizes="138px" /></a>
	</aside>

	<article>
		{@render children?.()}
	</article>
</main>

<footer>
	<p><i>made with</i> ❤ <i>by zen | <i>site last modified 2026-10-01</i> | <a href="https://github.com/itzzenxx/www">source code viewable here</a></i></p>
</footer>

<style>
	:root {
		--textColor: black;
		--backgroundColor: lightgrey;
		--linkColor: darkblue;
		--quoteColor: black;
		--tableColor: black;
		--tableOddBackgroundColor: rgba(0, 0, 0, 0.25);
		--tableEvenBackgroundColor: rgba(0, 0, 0, 0.1);
		--navBackgroundColor: rgba(211, 211, 211, 0.8);
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--textColor: lightgrey;
			--backgroundColor: black;
			--linkColor: lightblue;
			--quoteColor: white;
			--tableColor: darkgrey;
			--tableOddBackgroundColor: rgba(255, 255, 255, 0.25);
			--tableEvenBackgroundColor: rgba(255, 255, 255, 0.1);
			--navBackgroundColor: rgba(0, 0, 0, 0.8);
		}
	}

	:global(body) {
		background-color: var(--backgroundColor);
		font-family: sans-serif;
	}

	article :global {
		h2,
		h3,
		h4 {
			color: var(--textColor);
		}
	}

	aside,
	article :global {
		.icons {
			display: inline-block;
			width: 1.25rem;
			vertical-align: -5px;
			margin-top: -5px;
			margin-bottom: -5px;
			height: 2rem;
			position: relative;
			background-color: var(--textColor);
			mask-repeat: no-repeat;
			mask-position: center;
		}

		a .icons {
			background-color: var(--linkColor);
		}
	}

	header,
	main,
	footer :global {
		a {
			color: var(--linkColor);
		}
		p {
			color: var(--textColor);
		}
	}

	aside,
	article :global {
		hr {
			width: 100%;
			margin: 10px 0 10px 0;
			border-top: 1px solid var(--textColor);
		}
	}

	header {
		display: flex;
		align-items: center;
		gap: 40px;
	}

	header h1 {
		font-family: serif;
		color: var(--textColor);
	}

	main {
		display: flex;
	}

	aside {
		background-color: var(--navBackgroundColor);
		width: 138px;
		top: 10px;
		position: sticky;
		align-self: start;
		margin: 10px;
	}

	aside nav {
		display: flex;
		flex-flow: column;
		gap: 12px;
	}

	aside nav a {
		text-decoration: none;
	}

	aside nav .active {
		font-weight: bold;
	}

	aside .avatar {
		margin: 0 auto;
	}

	aside .avatar img {
		width: 138px;
		height: 138px;
	}

	article {
		max-width: 612px;
		width: 100%;
		padding-left: 10px;
		border-left: 1px var(--textColor) solid;
	}

	.address-card {
		mask-image: url($lib/assets/icons/address-card.svg);
	}

	.briefcase {
		mask-image: url($lib/assets/icons/briefcase.svg);
	}

	.house {
		mask-image: url($lib/assets/icons/house.svg);
	}

	.newspaper {
		mask-image: url($lib/assets/icons/newspaper.svg);
	}

	.paper-plane {
		mask-image: url($lib/assets/icons/paper-plane.svg);
	}

	.share-nodes {
		mask-image: url($lib/assets/icons/share-nodes.svg);
	}

	@media screen and (max-width: 450px) {
		main {
			flex-flow: column;
		}
		aside {
			border-bottom: 1px var(--textColor) solid;
			width: 100%;
			display: flex;
			justify-content: space-around;
			flex-direction: column-reverse;
			position: sticky;
			top: -90px;
			margin: unset;
			padding-bottom: 10px;
			border: unset;
		}
		aside hr {
			border: none;
		}
		aside nav {
			flex-flow: wrap;
			min-width: unset;
			max-width: unset;
			justify-content: space-around;
		}
		aside .avatar img {
			height: 80px;
			width: 80px;
		}
		article {
			border: unset;
			padding: unset;
			position: static;
			padding-bottom: 8px;
			border-top: 1px var(--textColor) solid;
			border-bottom: 1px var(--textColor) solid;
		}
	}
</style>
