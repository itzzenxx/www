<script lang="ts">
	interface Props {
		/**
		 * @type string
		 */
		title: any;
		/**
		 * @type string
		 */
		date: any;
		/**
		 * @type string
		 */
		author: any;
		/**
		 * @type string
		 */
		category: any;
		/**
		 * @type string
		 */
		modified: any;
		children?: import('svelte').Snippet;
	}

	let { title, date, author, category, modified, children }: Props = $props();
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
{@render children?.()}
