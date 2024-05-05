import { fetchMarkdownPosts } from '$lib/utils/index.js';

export const load = async () => {
	const posts = await fetchMarkdownPosts();
	return { posts };
};
