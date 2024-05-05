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

<p><a href="/writeups"><i class="fa-solid fa-arrow-left"></i> back to my writeups</a></p>

<h1>{title}</h1>
<p>publish date: {date}</p>
<p>author: itzzen@tutamail.com</p>
<hr />
<slot />
