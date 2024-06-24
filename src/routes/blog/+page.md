<script>
	export let data;
	import validrss from "/assets/validrss.png";
	import validatom from "/assets/validatom.png";
</script>

## my website blog

very infrequently I will write a thing and post it onto this website, my entries are shown here:

<ul>
{#each data.posts as post}
<li><a href="{post.path}">{post.meta.title}</a> | {post.meta.date}</li>
{/each}
</ul>

## get notified

I have an atom feed and a rss feed if you wish to be notified whenever I write something

- [<i class="fa-solid fa-atom"></i> atom feed](/blog/atom.xml)
- [<i class="fa-solid fa-rss"></i> legacy rss feed](/blog/rss.xml)

![valid rss]({validatom})
![valid rss]({validrss})
