import { skills } from '$lib/db/skills.js';

export function load() {
    return {
        summaries: skills.map((skill) => ({
            technology: skill.technology,
            profiency: skill.profiency,
            experience: skill.experience,
            type: skill.type,
        }))
    };
}