<script>
	/**
	 * @type string
	 */
	export let title;
	/**
	 * @type string
	 */
	export let date;
	/**
	 * @type string
	 */
	export let modified;
</script>

<svelte:head>
	<title>{title} | allissa's blog</title>
	<meta name="description" content="allissa's comfy blog" />
	<meta property="og:title" content="{title} | allissa's blog" />
	<meta property="og:description" content="allissa's comfy blog" />
</svelte:head>

<p><a href="https://itzzen.net/blog"><i class="fa-solid fa-arrow-left"></i> back to my blog</a></p>

<h2>{title}</h2>
<p>publish date: {date}</p>
{#if modified}
	<p>modified date: {modified}</p>
{/if}
<p>author: itzzen@tutamail.com</p>
<hr />
<slot />
