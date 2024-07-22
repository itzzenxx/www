<script>
	export let data;
	import validrss from "/assets/buttons/validrss.png";
	import validatom from "/assets/buttons/validatom.png";
</script>

<style>
img {
    width: 88px;
    height: 31px;
}
</style>

## My blog

Very infrequently I will write a thing and post it onto this website, my entries are shown here:

<ul>
{#each data.posts as post}
<li><a href="{post.path}">{post.meta.title}</a> | {post.meta.date}</li>
{/each}
</ul>

## Get notified

I have an Atom feed and an RSS feed if you wish to be notified whenever I update my blog

- [<i class="fa-solid fa-atom"></i> atom feed](/blog/atom.xml)
- [<i class="fa-solid fa-rss"></i> legacy rss feed](/blog/rss.xml)

![valid rss]({validatom})
![valid rss]({validrss})
