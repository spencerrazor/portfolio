import { blogs } from '$lib/db/blogs.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {

    const blog = blogs.find((blog) => blog.slug === params.slug);

    if (!blog) throw error(404);

    return {
        blog
        }
};