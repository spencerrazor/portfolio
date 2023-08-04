<script>
    import { AppRail, AppRailTile, AppRailAnchor, AppShell, filter} from '@skeletonlabs/skeleton';
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
    let currentTile = 0;
    let tabSet = 0;
    import { ProgressBar } from '@skeletonlabs/skeleton';
	import { parse } from 'svelte/compiler';

    export let data;

    let filters = [
        {filter:'Front-end', color:false},
        {filter:'Back-end', color:false},
        {filter:'Database', color:false},
        {filter:'Cloud', color:false},
        {filter:'Data Science', color:false},
        {filter:'Data Analysis', color:false},
        {filter:'Data Engineering', color:false},
        {filter:'Machine Learning', color:false},
        {filter:'Deep Learning', color:false},
    ];

    const toggleFilter = (e) => {
        const innerHTML = e.target.innerHTML || '';
        console.log(innerHTML)
        const index = filters.findIndex((f) => f.filter === innerHTML);
        console.log(index)
        if (index !== -1) {
            filters[index].color = !filters[index].color;
            filters = [...filters]; // Create a new array to trigger reactivity
        }
    }
    let allFiltersFalse;
    let filterNames;
    $: {
        allFiltersFalse = filters.every(filter => !filter.color);
        filterNames = filters.filter(filter => filter.color);
        filterNames = filterNames.map(filter => filter.filter);
    }


</script>


<section class="mt-8 lg:mb-8">
    <h1 class="text-6xl lg:text-8xl w-3/4 m-auto text-center mb-8">Technical Skills</h1>
    <h2 class="m-auto w-3/4 mb-5">Filter by Domain</h2>
    <div class="m-auto flex flex-wrap items-center w-3/4 gap-5">
        {#each filters as filter, i}
            <button on:click={toggleFilter} class="p-2 hover:bg-primary-500 {filter.color ? "bg-primary-500" : "bg-surface-900"}">{filter.filter}</button>
        {/each}
    </div>
    <div class="fields m-auto flex items-center p-8  w-full mt-0 lg:w-3/4 lg:mt-5">
        <h1 class="basis-1/3">Skill</h1>
        <h1 class="basis-1/3">Experience</h1>
        <h1 class="basis-1/3">Confidence</h1>
    </div>

    {#each data.summaries as {technology, profiency, experience, type}}
        {#if allFiltersFalse}
        <div class="m-auto flex items-center p-8 bg-surface-900 w-full mt-0 lg:w-3/4 lg:mt-5 lg:drop-shadow-[0_0_25px_rgba(255,255,255,0.10)]">
            <h1 class="basis-1/3">{technology}</h1>
            <h1 class="basis-1/3">{experience}</h1>
            <div class="basis-1/3">
                <ProgressBar label="Progress Bar" value={parseInt(profiency)} max={100} />
            </div>
        </div>
        {:else if type.some(item => filterNames.includes(item))}
            <div class="m-auto flex items-center p-8 bg-surface-900 w-full mt-0 lg:w-3/4 lg:mt-5 lg:drop-shadow-[0_0_25px_rgba(255,255,255,0.10)]">
                <h1 class="basis-1/3">{technology}</h1>
                <h1 class="basis-1/3">{experience}</h1>
                <div class="basis-1/3">
                    <ProgressBar label="Progress Bar" value={parseInt(profiency)} max={100} />
                </div>
            </div>
        {/if}
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

