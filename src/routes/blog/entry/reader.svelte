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
	export let author;
	/**
	 * @type string
	 */
	export let category;
	/**
	 * @type string
	 */
	export let modified;
</script>

<p><a href="https://itzzen.net/blog"><i class="fa-solid fa-arrow-left"></i> back to my blog</a></p>

<h2>{title}</h2>
<p>publish date: {date}</p>
{#if modified}
	<p>modified date: {modified}</p>
{/if}
<p>author: {author} (<a href="mailto:itzzen@itzzen.net">itzzen@itzzen.net</a>)</p>
<p>category: {category}</p>
<hr />
<slot />
