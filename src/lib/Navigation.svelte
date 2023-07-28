<script>
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
    import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
    let currentTile = 0;

    import close from '$lib/close.png';


    function drawerClose() {
        document.getElementsByTagName('html')[0].classList.toggle('hide-scroll');
        drawerStore.close({});
    }
</script>

<div class="h-screen w-full flex flex-col justify-between bg-surface relative">
    <p on:click={drawerClose} class="text-end text-4xl hover:bg-surface-500 p-5 w-full h-full">{'<--'}</p>
    <a on:click={drawerClose} href="/"class="text-4xl hover:bg-surface-500 p-5 w-full h-full">AI Search</a>
    <a on:click={drawerClose} href="/work"class="text-4xl hover:bg-surface-500 p-5 w-full h-full">About Me</a>
    <a on:click={drawerClose} href="/projects"class="text-4xl hover:bg-surface-500 p-5 w-full h-full">Projects</a>
    <a on:click={drawerClose} href="/skills"class="text-4xl hover:bg-surface-500 p-5 w-full h-full">Technologies</a>
    <a on:click={drawerClose} href="/blog"class="text-4xl hover:bg-surface-500 p-5 w-full h-full">Blog</a>
    <a on:click={drawerClose} href="/contact"class="text-4xl hover:bg-surface-500 p-5 w-full h-full">Contact</a>
</div>

<!-- <TabGroup 
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-secondary-100-800-token w-full flex-column"
>
<TabAnchor href="/" selected={$page.url.pathname === '/'}>
    <svelte:fragment slot="lead">🛖</svelte:fragment>
    <span>Home</span>
</TabAnchor>
 <TabAnchor href="/work" selected={$page.url.pathname === '/work'} bind:group={currentTile} name="tile-1" value={0} title="tile-1">
    <svelte:fragment slot="lead">🧑‍💼</svelte:fragment>
    <span>Experience</span>
</TabAnchor>
<TabAnchor href="/projects" selected={$page.url.pathname === '/projects'} bind:group={currentTile} name="tile-2" value={1} title="tile-2">
    <svelte:fragment slot="lead">🚧</svelte:fragment>
    <span>Projects</span>
</TabAnchor>
<TabAnchor href="/skills" selected={$page.url.pathname === '/skills'} bind:group={currentTile} name="tile-3" value={2} title="tile-3">
    <svelte:fragment slot="lead">🤹🏽</svelte:fragment>
    <span>Skills</span>
</TabAnchor>
<TabAnchor href="/designs" bind:group={currentTile} selected={$page.url.pathname === '/designs'} name="tile-4" value={2} title="tile-4">
    <svelte:fragment slot="lead">🔥</svelte:fragment>
    <span>Designs</span>
</TabAnchor>
<TabAnchor href="/blog" selected={$page.url.pathname === '/blog'} bind:group={currentTile}>
    <svelte:fragment slot="lead">🐦</svelte:fragment>
    <span>Blog</span>
</TabAnchor>
</TabGroup> -->