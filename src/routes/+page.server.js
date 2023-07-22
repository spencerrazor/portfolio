import { PUBLIC_OPENAI_API_KEY } from '$env/static/public';

export async function load() {
    
    return {'key':PUBLIC_OPENAI_API_KEY};
}