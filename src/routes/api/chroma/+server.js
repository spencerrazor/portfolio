import { ChromaClient } from "chromadb";
import { OpenAIEmbeddingFunction } from "chromadb";
import { OPENAI_API_KEY } from '$env/static/private';


// const client = new ChromaClient();

// export async function POST({ request }) {
//     const input = await request.json();


//     try {
//         const embedder = new OpenAIEmbeddingFunction({openai_api_key: OPENAI_API_KEY});
//         const collection = await client.createCollection({name: "my_collection", embeddingFunction: embedder})
//     } catch (error) {
//         console.log(error)
//     }
    
    

//     return new Response(JSON.stringify({'output': 'hello'}),{
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
// }

// export async function GET({ request }) {
//     return new Response(JSON.stringify({'output': 'this is from get'}), {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }