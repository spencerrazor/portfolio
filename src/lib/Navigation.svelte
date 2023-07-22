<script>
    import { AppRail, AppRailTile, AppRailAnchor} from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
    let currentTile = 0;
</script>

<AppRail>
    <svelte:fragment slot="lead">
        <AppRailAnchor href="/" selected={$page.url.pathname === '/'}>🛖</AppRailAnchor>
    </svelte:fragment>
    <!-- --- -->
     <AppRailAnchor href="/work" selected={$page.url.pathname === '/work'} bind:group={currentTile} name="tile-1" value={0} title="tile-1">
        <svelte:fragment slot="lead">🧑‍💼</svelte:fragment>
        <span>Experience</span>
    </AppRailAnchor>
    <AppRailAnchor href="/projects" selected={$page.url.pathname === '/projects'} bind:group={currentTile} name="tile-2" value={1} title="tile-2">
        <svelte:fragment slot="lead">🚧</svelte:fragment>
        <span>Projects</span>
    </AppRailAnchor>
    <AppRailAnchor href="/skills" selected={$page.url.pathname === '/skills'} bind:group={currentTile} name="tile-3" value={2} title="tile-3">
        <svelte:fragment slot="lead">🤹🏽</svelte:fragment>
        <span>Skills</span>
    </AppRailAnchor>
    <AppRailAnchor href="/designs" bind:group={currentTile} selected={$page.url.pathname === '/designs'} name="tile-4" value={2} title="tile-4">
        <svelte:fragment slot="lead">🔥</svelte:fragment>
        <span>Designs</span>
    </AppRailAnchor>
    <AppRailAnchor href="/blog" selected={$page.url.pathname === '/blog'} bind:group={currentTile} name="tile-4" value={2} title="tile-4">
        <svelte:fragment slot="lead">🐦</svelte:fragment>
        <span>Blog</span>
    </AppRailAnchor>
</AppRail>