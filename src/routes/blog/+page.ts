import { fetchMarkdownPosts } from '$lib/utils/blogEntries.js';

export const load = async () => {
	const posts = await fetchMarkdownPosts();
	return { posts };
};
