import { fetchMarkdownPosts } from '$lib/utils/blogEntries.js';

export const prerender = true;
export const GET = async () => {
	const posts = JSON.parse(JSON.stringify(await fetchMarkdownPosts()));
	const body = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
<link href="https://itzzen.net/blog/atom.xml" rel="self" type="application/rss+xml" />
<updated>2024-04-13T00:00:00.000Z</updated>
<title>allissa's blog</title>
<author>
<name>allissa</name>
<email>itzzen@tutamail.com</email>
</author>
<id>urn:uuid:7b459989-5361-486c-9d6d-e337b3510bf1</id>
${posts
	.map(
		(post: { meta: { title: any; date: string | number | Date }; path: any; content: { html: any } }) => `
<entry>
<title>${post.meta.title}</title>
<link href="https://itzzen.net${post.path}"/>
<updated>${new Date(post.meta.date).toISOString()}</updated>
<id>tag:itzzen.net,${post.meta.date}:${post.path}</id>
<summary>${post.meta.title}</summary>
<content type="html">
<![CDATA[${post.content.html}]]>
</content>
</entry>`
	)
	.join('')}

</feed>`;

	const headers: Headers = new Headers({
		'Content-Type': 'text/atom+xml; charset=utf-8',
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Disposition': 'inline; filename=atom.xml'
	});
	return new Response(body, { headers });
};
