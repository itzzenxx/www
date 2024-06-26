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
	<p><a href="https://tube.constellatory.net/watch?v=bdT8ixdxPX4"><i>“All around the world, you've gotta spread the word!”</i></a></p>
</header>

<main>
	<nav>
		<a href="/" class:active={$page.url.pathname == '/'}><i class="fa-solid fa-house"></i> home</a>
		<a href="/meta" class:active={$page.url.pathname == '/meta/'}><i class="fa-solid fa-globe"></i> meta</a>
		<a href="/blog/" class:active={$page.url.pathname == '/blog/'}><i class="fa-solid fa-newspaper"></i> my blog</a>
		<a href="/about" class:active={$page.url.pathname == '/about/'}><i class="fa-solid fa-address-card"></i> about me</a>
		<a href="/contact" class:active={$page.url.pathname == '/contact/'}><i class="fa-solid fa-paper-plane"></i> contact</a>
		<a href="/socials" class:active={$page.url.pathname == '/socials/'}><i class="fa-solid fa-thumbs-up"></i> socials</a>
		<a href="/projects" class:active={$page.url.pathname == '/projects/'}><i class="fa-solid fa-hammer"></i> projects</a>
		<a href="/donate" class:active={$page.url.pathname == '/donate/'}><i class="fa-solid fa-money-bill"></i> donate</a>
		<a href="https://cloud.itzzen.net/s/mTkjfis3bx8cPar"><i class="fa-solid fa-camera"></i> camera <i class="shrink fa-solid fa-arrow-up-right-from-square"></i></a>
		<a href="https://cloud.itzzen.net/s/Gdk99krDRYiRc42"><i class="fa-solid fa-folder"></i> files <i class="shrink fa-solid fa-arrow-up-right-from-square"></i></a>
		<hr />
		<img alt="kanna kamui looking kinda sad" src={picture} id="picture" />
	</nav>

	<article>
		<slot />
	</article>
</main>

<footer>
	<p><i><a href="https://codeberg.org/itzzen/www/commits/branch/main">site last modified June 26th 2024</a></i> | <i>made with</i> ❤ <i>by allissa | <a href="https://codeberg.org/itzzen/www">source code viewable here</a></i></p>
</footer>

<style>
	.shrink {
		transform: scale(0.65);
		transform-origin: top left;
	}
</style>
