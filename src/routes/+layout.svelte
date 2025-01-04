<script>
	import censor from '/assets/censor.gif';
	import picture from '/assets/picture.png';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.url.pathname} | allissa's comfy burrow</title>
	<meta name="description" content="the personal website of allissa" />
	<meta content="#FFC0CB" data-react-helmet="true" name="theme-color" />
	<meta property="og:title" content="allissa's comfy burrow | {$page.url.pathname}" />
	<meta property="og:description" content="the personal website of allissa" />
	<meta property="og:url" content="https://itzzen.net{$page.url.pathname}" />
	<meta property="og:image" content={picture} />
</svelte:head>

<header>
	<h1>allissa's comfy burrow</h1>
	<p><a href="https://en.wikipedia.org/wiki/Live_Forever_(Oasis_song)"><i>“You and I are gonna live forever”</i></a></p>
</header>

<main>
	<nav>
		<div class="links">
			<a href="/" class:active={$page.url.pathname == '/'}><i class="fa-solid fa-house"></i> home</a>
			<a href="/blog/" class:active={$page.url.pathname == '/blog/'}><i class="fa-solid fa-newspaper"></i> my blog</a>
			<a href="/about" class:active={$page.url.pathname == '/about/'}><i class="fa-solid fa-address-card"></i> about me</a>
			<a href="/projects" class:active={$page.url.pathname == '/projects/'}><i class="fa-solid fa-code"></i> projects</a>
			<a href="/contact" class:active={$page.url.pathname == '/contact/'}><i class="fa-solid fa-paper-plane"></i> contact</a>
			<a href="/presence" class:active={$page.url.pathname == '/presence/'}><i class="fa-solid fa-user"></i> presence</a>
			<a href="/donate" class:active={$page.url.pathname == '/donate/'}><i class="fa-solid fa-piggy-bank"></i> donate</a>
		</div>
		<div class="images">
			<hr />
			<img src={picture} alt="kanna kamui looking up" title="me.png" id="picture" />
			<hr />
			<a href="https://www.mabsland.com/Adoption.html" id="censor"><img src={censor} alt="website content is rated G" title="This site is rated G however external links may not be rated." /></a>
		</div>
	</nav>

	<article>
		<slot />
	</article>
</main>

<footer>
	<p><i>made with</i> ❤ <i>by allissa | <i>site last modified January 4th 2025</i> | <a href="https://codeberg.org/itzzen/www">source code viewable here</a></i></p>
</footer>
