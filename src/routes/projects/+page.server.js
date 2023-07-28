import { projects } from '$lib/db/projects.js';

export function load() {
    return {
        summaries: projects.map((project) => ({
            year: project.year,
            name: project.name,
            description: project.description,
            github: project.github,
            website: project.website,
            image: project.image,
        }))
    };
}