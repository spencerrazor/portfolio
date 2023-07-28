<script>
    export let data;
</script>

<section class="pt-5 drop-shadow-[0_0_25px_rgba(255,255,255,0.20)]">

    <div class="pr-5 pl-5">
        <h1 class="text-6xl text-center">{data.blog.title}</h1>
        <h2 class="text-xl text-center mt-5">By Spencer Wueste <span><img class="inline icon" width="30px" height="30px" src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/github-128.png" alt=""></span></h2>
    </div>
    
    <img class="w-full lg:w-auto m-auto" src={data.blog.image}/>
    <div class="lg:mb-5 h-50 lg:w-3/4 m-auto bg-surface-900 p-20 b lg:rounded-md text-left text-4xl">
        <p class="text-xl mt-2">{data.blog.description}</p>
        <p class="text-lg">{@html data.blog.content}</p>
    </div>
</section>

<style>
    section {
        height: 100%;
        width: 100%;
        background-image: repeating-linear-gradient(-45deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1) 1px, transparent 1px, transparent 6px);
    background-size: 4px 4px;
    }

    img {
        transform: translateY(10%);
    }

    .icon {
        transform: none;
    }

    section :global(h2) {
        color: white;
        font-size: 2rem; /* 24px */
        line-height: 2rem; /* 32px */
        margin-top: 1rem;
    }

    section :global(p) {
        margin-top: 1rem;
        font-size: 1rem;
    }
</style>