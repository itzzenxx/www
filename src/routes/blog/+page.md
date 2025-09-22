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

## Our blog

Sometimes we will write a thing and put it on this blog. Here is the list of things we have written:

<ul>
{#each data.posts as post}
<li><a href="{post.path}">{post.meta.title}</a> | {post.meta.author} | {post.meta.date}</li>
{/each}
</ul>

## Get notified

I have an Atom feed and an RSS feed if you wish to be notified whenever I update my blog

- [<i class="fa-solid fa-atom"></i> atom feed](/blog/atom.xml)
- [<i class="fa-solid fa-rss"></i> legacy rss feed](/blog/rss.xml)

[![valid atom]({validatom})](https://validator.w3.org/feed/check.cgi?url=https%3A//itzzen.net/blog/atom.xml)
[![valid rss]({validrss})](https://validator.w3.org/feed/check.cgi?url=https%3A//itzzen.net/blog/rss.xml)
