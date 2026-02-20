<script>
	export let data;
	import validrss from "/assets/buttons/validrss.png";
	import validatom from "/assets/buttons/validatom.png";
</script>

## Our blog

<table>
<th>title</th>
<th>category</th>
<th>author</th>
<th>published</th>
{#each data.posts as post}
<tr><td><a href="{post.path}">{post.meta.title}</a></td><td>{post.meta.category}</td><td>{post.meta.author}</td><td>{post.meta.date}</td></tr>
{/each}
</table>

## Get notified

- [<i class="fa-solid fa-atom"></i> atom feed](/blog/atom.xml)
- [<i class="fa-solid fa-rss"></i> legacy rss feed](/blog/rss.xml)

<a href="https://validator.w3.org/feed/check.cgi?url=https%3A//itzzen.net/blog/atom.xml"><img src="{validatom}" alt="valid atom" class="button"></a>
<a href="https://validator.w3.org/feed/check.cgi?url=https%3A//itzzen.net/blog/rss.xml"><img src="{validrss}" alt="valid rss" class="button"></a>
