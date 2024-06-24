<script>
	/**
	 * @type string
	 */
	export let title;
	/**
	 * @type string
	 */
	export let date;
</script>

<p><a href="/blog"><i class="fa-solid fa-arrow-left"></i> back to my blog</a></p>

<h2>{title}</h2>
<p>publish date: {date}</p>
<p>author: itzzen@tutamail.com</p>
<hr />
<slot />
