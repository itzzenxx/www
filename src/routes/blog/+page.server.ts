import { fetchMarkdownPosts } from '$lib/utils/blogEntries';

export const load = async () => {
	return { posts: await fetchMarkdownPosts() };
};
