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
	<p><a href="https://en.wikipedia.org/wiki/Live_Forever_(Oasis_song)"><i>“You and I are gonna live forever”</i></a></p>
</header>

<main>
	<nav>
		<a href="/" class:active={$page.url.pathname == '/'}><i class="fa-solid fa-house"></i> home</a>
		<a href="/blog/" class:active={$page.url.pathname == '/blog/'}><i class="fa-solid fa-newspaper"></i> my blog</a>
		<a href="/about" class:active={$page.url.pathname == '/about/'}><i class="fa-solid fa-address-card"></i> about me</a>
		<a href="/projects" class:active={$page.url.pathname == '/projects/'}><i class="fa-solid fa-code"></i> projects</a>
		<a href="/contact" class:active={$page.url.pathname == '/contact/'}><i class="fa-solid fa-paper-plane"></i> contact</a>
		<a href="/presence" class:active={$page.url.pathname == '/presence/'}><i class="fa-solid fa-user"></i> presence</a>
		<a href="/donate" class:active={$page.url.pathname == '/donate/'}><i class="fa-solid fa-piggy-bank"></i> donate</a>
		<hr />
		<a href="https://www.last.fm/user/itzzen"><i class="fa-brands fa-lastfm"></i> now playing</a>
		<a href="https://matrix.to/#/#allissas-comfy-burrow:constellatory.net"><i class="fa-solid fa-igloo"></i> the burrow</a>
		<a href="https://cloud.itzzen.net/s/mTkjfis3bx8cPar"><i class="fa-solid fa-camera"></i> my photos</a>
		<hr />
		<img alt="kanna kamui looking down" src={picture} id="picture" />
	</nav>

	<article>
		<slot />
	</article>
</main>

<footer>
	<p><i>made with</i> ❤ <i>by allissa | <i>site last modified July 22th 2024</i> | <a href="https://codeberg.org/itzzen/www">source code viewable here</a></i></p>
</footer>
