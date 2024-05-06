import { fetchMarkdownPosts } from '$lib/utils/blogEntries.js';

export const prerender = true;
export const GET = async () => {
	const posts = JSON.parse(JSON.stringify(await fetchMarkdownPosts()));
	const body = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
<pubDate>Sat, 13 Apr 2024 00:00:00 GMT</pubDate>
<title>allissa's write ups</title>
<link>https://itzzen.net/writeups</link>
<description>allissa's write ups</description>
${posts
	.map(
		(post: { meta: { title: any; date: string | number | Date }; path: any; content: { html: any } }) => `
<item>
<title>${post.meta.title}</title>
<link>https://itzzen.net${post.path}</link>
<guid>https://itzzen.net/writeups</guid>
<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
<description>
<![CDATA[${post.content.html}]]>
</description>
</item>`
	)
	.join('')}
</channel>
    
</rss>`;

	const headers: Headers = new Headers({
		'Content-Type': 'text/rss+xml; charset=utf-8',
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Disposition': 'inline; filename=rss.xml'
	});
	return new Response(body, { headers });
};
