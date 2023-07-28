import { blogs } from '$lib/db/blogs.js';

export function load() {
    return {
        summaries: blogs.map((blog) => ({
            slug: blog.slug,
            title: blog.title,
            description: blog.description,
            date: blog.date,
            color: blog.color,
            image: blog.image,
        }))
    };
}