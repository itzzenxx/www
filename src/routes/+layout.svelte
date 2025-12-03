<script>
	import avatar from '/assets/avatar.png';
	import { page } from '$app/state';
	import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<svelte:head>
	<title>{page.url.pathname} | allissa's comfy burrow</title>
	<meta name="description" content="the personal website of allissa" />
	<meta content="#d3d3d3" data-react-helmet="true" name="theme-color" />
	<meta property="og:title" content="allissa's comfy burrow | {page.url.pathname}" />
	<meta property="og:description" content="the personal website of allissa" />
	<meta property="og:url" content="https://itzzen.net{page.url.pathname}" />
	<meta property="og:image" content={avatar} />
</svelte:head>

<header>
	<h1>allissa's comfy burrow</h1>
	<div class="imood-holder"><p><i>is feeling</i></p><a href="https://www.imood.com/users/itzzen"><img class="imood" alt="The current mood of itzzen at www.imood.com" /></a></div>
</header>

<main>
	<nav>
		<div class="links">
			<a href="/" class:active={page.url.pathname == '/'}><i class="fa-solid fa-house"></i> home</a>
			<a href="/blog/" class:active={page.url.pathname == '/blog/'}><i class="fa-solid fa-newspaper"></i> our blog</a>
			<a href="/about" class:active={page.url.pathname == '/about/'}><i class="fa-solid fa-address-card"></i> about us</a>
			<a href="/projects" class:active={page.url.pathname == '/projects/'}><i class="fa-solid fa-code"></i> projects</a>
			<a href="/services" class:active={page.url.pathname == '/services/'}><i class="fa-solid fa-server"></i> services</a>
			<a href="/resources" class:active={page.url.pathname == '/resources/'}><i class="fa-solid fa-folder"></i> resources</a>
			<a href="/contact" class:active={page.url.pathname == '/contact/'}><i class="fa-solid fa-paper-plane"></i> contact</a>
			<a href="/donate" class:active={page.url.pathname == '/donate/'}><i class="fa-solid fa-piggy-bank"></i> donate</a>
		</div>
		<hr />
		<img src={avatar} alt="a tired kobayashi" title="me.png" class="avatar" />
	</nav>

	<article>
		<slot />
	</article>
</main>

<footer>
	<p><i>made with</i> ❤ <i>by allissa system | <i>site last modified 2025-12-03</i> | <a href="https://codeberg.org/itzzen/www">source code viewable here</a></i></p>
</footer>
