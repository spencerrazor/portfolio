<script>
	import { dataTableHandler } from "@skeletonlabs/skeleton";
	import { onMount } from "svelte";

    let years = [2020, 2021, 2022, 2023].reverse()
    let projects = [0,1]
    export let data;

</script>

<section class="m-auto lg:w-4/5 lg:mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.10)]">
    <h1 class="text-center text-8xl mt-8 mb-8">Projects</h1>
    {#each years as _year}
        <div class="flex-col lg:flex-row flex mt-16">
            <h1 class="text-8xl mb-8 basis-1/3 text-center">
                {_year}
            </h1>
            <div class="logo-cloud grid-cols-1 lg:!grid-cols- lg:gap-1 basis-2/3 rounded-none">
                {#each data.summaries as {year, name, description, github, website, image}}
                    {#if year == _year}
                        <a class="flex flex-col lg:flex-row logo-item bg-surface-900 hover:bg-surface-500 pt-20 pb-20 p-20 lg:flex" href="#">
                            <div>
                                <h2 class="text-4xl mb-4">{name}</h2>
                                <p class="text-lg">{@html description}</p>
                                <div class="flex mt-4">
                                    <a href={github}>
                                        <img class="inline icon" width="30px" height="30px" src="https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/github-128.png" alt="">
                                    </a>
                                    <a class="pl-4 hover:text-primary-500" href={website}>{website}</a>
                                </div>
                            </div>
                            <img width=100 height=100 class="m-auto mt-8 lg:mt-0 object-cover aspect-[3/3]" src={image} alt="">
                        </a>
                    {/if}
                {/each}
            </div>
        </div>
    {/each}
</section>

<style>
    h3 {
        color: rgb(115, 166, 48);
    }
</style>