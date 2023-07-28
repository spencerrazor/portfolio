<script>
    let gptanswer = 'I know nothing about Spencer at the moment';
    import { PUBLIC_OPENAI_API_KEY } from '$env/static/public';
    let answer;

    let inputText = '';


    async function getChroma(e) {
        const response = await fetch('/api/chroma', {
                method: 'POST',
                body: JSON.stringify([0,1,2,3,4]),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const status = await response.json(); 
            console.log(status);
    }

    async function handleSubmit(event) {
        if (event.key === 'Enter') {
            
            const response = await fetch('/api/askquestion', {
                method: 'POST',
                body: JSON.stringify({"prompt":inputText}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response)
            
            const responseData = await response.json();

            answer = responseData['answer'];
            inputText = '';

        //     for await (const chunk of streamAsyncIterator(response.body)) {
        //         const textDecoder = new TextDecoder();
        //         const decodedString = textDecoder.decode(chunk);

        //         console.log(decodedString); // Output: "abcdefgh"
        //     }
        }

    }
    // async function* streamAsyncIterator(stream) {
    //     // Get a lock on the stream
    //     const reader = stream.getReader();

    //     try {
    //         while (true) {
    //         // Read from the stream
    //         const {done, value} = await reader.read();
    //         // Exit if we're done
    //         if (done) return;
    //         // Else yield the chunk
    //         yield value;
    //         }
    //     }
    //     finally {
    //         reader.releaseLock();
    //     }
    // }

</script>
<section class="lg:h-[calc(100vh-100px)] h-[calc(100vh-50px)] drop-shadow-[0_0_25px_rgba(255,255,255,0.20)]">
        <div class="w-3/4 flex flex-col m-auto justify-center h-full">
            <div class="basis-1/3">
                <h1 class="h1 pb-5">Hi! I'm <span class="text-secondary-500">Spencer</span> 👋</h1>
                <h2 class="h2 pb-5">Learn about with GPT powered search!</h2>
                <label class="label">
                    <span class="h3 block pb-5">Ask a question❓(e.g. What experience do you have with Python?)</span>
                    <!-- (input here) -->
                    <form on:submit|preventDefault={handleSubmit}>
                        <input bind:value={inputText} on:keydown={handleSubmit} class="input p-1 pl-3" title="Input (text)" type="text" placeholder="Ask the AI Spencer 🤖" />
                    </form>
                </label>
            </div>
            <div class="p-4 h-full overflow-y-auto basis-1/3">{answer ? answer : ''}</div>
        </div> 

</section>