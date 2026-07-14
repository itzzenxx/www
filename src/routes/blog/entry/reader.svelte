<script lang="ts">
	interface Props {
		title: string;
		date: string;
		author: string;
		category: string;
		modified: string;
		children?: import('svelte').Snippet;
	}

	let { title, date, author, category, modified, children }: Props = $props();
</script>

<p><a href="https://itzzen.net/blog"><i class="icons arrow-left"></i> back to our blog</a></p>

<h2>{title}</h2>
<p>publish date: {date}</p>
{#if modified}
	<p>modified date: {modified}</p>
{/if}
<p>author: {author} (<a href="mailto:itzzen@itzzen.net">itzzen@itzzen.net</a>)</p>
<p>category: {category}</p>
<hr />
{@render children?.()}

<style>
	.arrow-left {
		mask-image: url($lib/assets/icons/arrow-left.svg);
	}
	:global {
		blockquote {
			border-left: 2px solid var(--quoteColor);
			margin-left: 0px;
		}
		blockquote p {
			padding-left: 10px;
			font-style: italic;
		}
		img,
		video {
			max-width: 400px;
			width: 100%;
			height: auto;
		}
		code {
			overflow-wrap: anywhere;
		}
	}
</style>
