<script>
    let gptanswer = 'I know nothing about Spencer at the moment';
    import { PUBLIC_OPENAI_API_KEY } from '$env/static/public';
    export let form;

    let inputText = '';

    // async function handleSubmit(event) {
    //     console.log(event.key)
    //     if (event.key === 'Enter') {
            
    //         try {
    //             const response = await fetch('/api/askquestion', {
    //                 method: 'POST',
    //                 body: JSON.stringify({"prompt":inputText}),
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             });
                
    //             const responseData = await response.json();
    
    //             answer = responseData['answer'];
    //             inputText = '';
    //         } catch {
    //             console.log('something bad happened')
    //         }
            

    //     //     for await (const chunk of streamAsyncIterator(response.body)) {
    //     //         const textDecoder = new TextDecoder();
    //     //         const decodedString = textDecoder.decode(chunk);

    //     //         console.log(decodedString); // Output: "abcdefgh"
    //     //     }
    //     }

    // }
    // // async function* streamAsyncIterator(stream) {
    // //     // Get a lock on the stream
    // //     const reader = stream.getReader();

    // //     try {
    // //         while (true) {
    // //         // Read from the stream
    // //         const {done, value} = await reader.read();
    // //         // Exit if we're done
    // //         if (done) return;
    // //         // Else yield the chunk
    // //         yield value;
    // //         }
    // //     }
    // //     finally {
    // //         reader.releaseLock();
    // //     }
    // // }

let loading = false;
const handleSubmit = () => {
    loading = true;
}
import { Wave } from 'svelte-loading-spinners';


</script>
<section class="lg:h-[calc(100vh-100px)] h-[calc(100vh-50px)] drop-shadow-[0_0_25px_rgba(255,255,255,0.20)]">
        <div class="w-3/4 flex flex-col m-auto justify-center h-full">
            <div class="basis-1/3">
                <h1 class="h1 pb-5">Hi! I'm <span class="text-secondary-500">Spencer</span> 👋</h1>
                <h2 class="h2 pb-5">Learn about with GPT powered search!</h2>
                <label class="label">
                    <span class="h3 block pb-5">Ask a question❓(e.g. What experience do you have with Python?)</span>
                    <!-- (input here) -->
                    <form method="POST" on:submit={handleSubmit}>
                        <input name="question" bind:value={inputText} class="input p-1 pl-3" title="Input (text)" type="text" placeholder="Ask the AI Spencer 🤖" />
                        <button class="hidden">Ask Away</button>
                    </form>
                </label>
            </div>
            {#if loading}
                <div class="flex items-center gap-5">
                    <p class="text-lg">Thinking</p>
                    <Wave size="40" color="#FF3E00" unit="px" duration="1s" />

                </div>
            {:else}
                <div class="p-4 h-full overflow-y-auto basis-1/3">{(form?.answer ? form?.answer : '')}</div>
            {/if}
        </div> 

</section>