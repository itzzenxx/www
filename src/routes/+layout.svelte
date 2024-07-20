<script>
	import { page } from '$app/stores';
	import picture from '/assets/picture.png';
	import '/static/css/main.css';
</script>

<svelte:head>
	<title>allissa's comfy burrow</title>
	<meta name="description" content="this is the personal website of allissa" />
</svelte:head>

<header>
	<h1>allissa's comfy burrow</h1>
	<p><a href="https://tube.constellatory.net/watch?v=LwvMqNodWOs&t=15s"><i>“AcillateM” - James Hetfield</i></a></p>
</header>

<main>
	<nav>
		<a href="/" class:active={$page.url.pathname == '/'}><i class="fa-solid fa-house"></i> home</a>
		<a href="/meta" class:active={$page.url.pathname == '/meta/'}><i class="fa-solid fa-globe"></i> meta</a>
		<a href="/blog/" class:active={$page.url.pathname == '/blog/'}><i class="fa-solid fa-newspaper"></i> my blog</a>
		<a href="/about" class:active={$page.url.pathname == '/about/'}><i class="fa-solid fa-address-card"></i> about me</a>
		<a href="/projects" class:active={$page.url.pathname == '/projects/'}><i class="fa-solid fa-code"></i> projects</a>
		<a href="/contact" class:active={$page.url.pathname == '/contact/'}><i class="fa-solid fa-paper-plane"></i> contact</a>
		<a href="/presence" class:active={$page.url.pathname == '/presence/'}><i class="fa-solid fa-user"></i> presence</a>
		<a href="/donate" class:active={$page.url.pathname == '/donate/'}><i class="fa-solid fa-money-bill"></i> donate</a>
		<hr />
		<a href="https://www.last.fm/user/itzzen" target="_blank"><i class="fa-brands fa-lastfm"></i> now playing <i class="shrink fa-solid fa-arrow-up-right-from-square"></i></a>
		<a href="https://matrix.to/#/#allissas-comfy-burrow:constellatory.net" target="_blank"><i class="fa-solid fa-igloo"></i> the burrow <i class="shrink fa-solid fa-arrow-up-right-from-square"></i></a>
		<a href="https://cloud.itzzen.net/s/mTkjfis3bx8cPar" target="_blank"><i class="fa-solid fa-camera"></i> my photos <i class="shrink fa-solid fa-arrow-up-right-from-square"></i></a>
		<hr />
		<img alt="kanna kamui looking down" src={picture} id="picture" />
	</nav>

	<article>
		<slot />
	</article>
</main>

<footer>
	<p><i>made with</i> ❤ <i>by allissa | <i>site last modified July 20th 2024</i> | <a href="https://codeberg.org/itzzen/www">source code viewable here</a></i></p>
</footer>

<style>
	.shrink {
		transform: scale(0.65);
		transform-origin: top left;
	}
</style>
