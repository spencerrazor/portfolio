<script>
    const blogs = ['Learn Python with AI', 'SvelteKit is Supreme', 'The Rise of Vector Databases']
    const desc = ['How well can AI teach you?', 'The framework that does it all.', 'Similarity is all you need.']
    const colors = ['primary', 'surface', 'secondary']
    export let data;
    import deer from '$lib/deer.webp';
    console.log(data)
</script>

<section>
    <h1 class="text-center text-6xl lg:text-8xl mt-8 mb-8">Blogs</h1>
    {#each data.summaries as { slug, title, description, image, date}, i}
    <a href='/blog/{slug}' class="block lg:w-3/4 m-auto bg-surface-900 hover:bg-surface-800 p-20 lg:mb-8 text-2xl lg:drop-shadow-[0_0_25px_rgba(255,255,255,0.20)]">
        <div class="flex flex-col lg:flex-row">
            <div>
                <h1 class="text-4xl">{title}</h1>
                <p class="text-xl mt-2">{description}</p>
                <h2 class="text-secondary-500">{date}</h2>
            </div>
            <!-- <img class="m-auto w-full object-cover aspect-[8/3]" src={deer}> -->
            <img class="m-auto w-full object-cover aspect-[8/3]" src={image}/>
        </div>

        <p></p>
    </a>
    {/each}
</section>

<style>
    :global(body) {
        height: 100%;
        width: 100%;
        background-image: repeating-linear-gradient(-45deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1) 1px, transparent 1px, transparent 6px);
    background-size: 4px 4px;
    }
</style>