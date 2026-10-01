<script>
	import validrss from '$lib/assets/buttons/validrss.webp';
	import validatom from '$lib/assets/buttons/validatom.webp';
	let { data } = $props();
</script>

<h2>Our blog</h2>

<table>
	<thead>
		<tr>
			<th>title</th>
			<th>category</th>
			<th>author</th>
			<th>published</th>
		</tr>
	</thead>
	<tbody>
		{#each data.posts as post}
			<tr><td><a href={post.path}>{post.meta.title}</a></td><td>{post.meta.category}</td><td>{post.meta.author}</td><td>{post.meta.date}</td></tr>
		{/each}
	</tbody>
</table>

<h2>Get notified</h2>

<ul>
	<li><a href="/blog/atom.xml" title="download our blog page atom feed"><i class="icons atom"></i> atom feed</a></li>
	<li><a href="/blog/rss.xml" title="download our blog page rss feed"><i class="icons rss"></i> legacy rss feed</a></li>
</ul>

<div class="buttons">
	<a href="https://validator.w3.org/feed/check.cgi?url=https%3A//itzzen.net/blog/atom.xml"><img src={validatom} alt="valid atom" /></a>
	<a href="https://validator.w3.org/feed/check.cgi?url=https%3A//itzzen.net/blog/rss.xml"><img src={validrss} alt="valid rss" /></a>
</div>

<style>
	.buttons {
		display: flex;
		flex-flow: wrap;
		gap: 0 0.32em;
	}
	.buttons img {
		height: 31px;
		width: 88px;
		border: 0;
		image-rendering: pixelated;
	}
	.atom {
		mask-image: url($lib/assets/icons/atom.svg);
	}

	.rss {
		mask-image: url($lib/assets/icons/rss.svg);
	}
	table {
		border-collapse: collapse;
		padding: 5px;
		width: 100%;
		max-width: 612px;
	}

	table th {
		color: var(--textColor);
		border: 2px solid var(--tableColor);
	}

	table tr td {
		color: var(--textColor);
		font-family: monospace;
		padding: 5px;
		border: 2px solid var(--tableColor);
		user-select: all;
	}

	table tr:nth-child(odd) td {
		background-color: var(--tableOddBackgroundColor);
	}

	table tr:nth-child(even) td {
		background-color: var(--tableEvenBackgroundColor);
	}
	li {
		color: var(--textColor);
	}
	li + li {
		margin: 3px 0;
	}
</style>
