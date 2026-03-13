import { render } from 'svelte/server';

export const fetchMarkdownPosts = async () => {
	const files = Object.entries(import.meta.glob('/src/routes/blog/entry/*/+page.md'));
	const posts = await Promise.all(
		files.map(async ([path, resolver]) => {
			const { metadata }: object = await resolver();
			const post: object = await resolver();
			const { html }: html = render(post.default);
			return {
				meta: metadata,
				path: path.slice(11, -8),
				content: html
			};
		})
	);
	const sorted = posts.sort((a, b) => {
		const bPost: object = new Date(b.meta.date);
		const aPost: object = new Date(a.meta.date);
		return bPost - aPost;
	});
	return sorted;
};
