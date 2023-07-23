<script>

    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';

    inject({ mode: dev ? 'development' : 'production'});

// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

    import { AppShell } from '@skeletonlabs/skeleton';
    import Navigation from '$lib/Navigation.svelte';
    import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

    function drawerOpen() {
        drawerStore.open({});
    }

</script>
<Drawer width="1/2">
    <Navigation />
</Drawer>
<AppShell slotSidebarLeft="w-0 lg:w-min">
    <svelte:fragment slot="header">
        <div class="flex items-center">
            <button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
                <span>
                    <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
                        <rect width="100" height="20" />
                        <rect y="30" width="100" height="20" />
                        <rect y="60" width="100" height="20" />
                    </svg>
                </span>
            </button>
        </div>
    </svelte:fragment>

	<!-- (header) -->
	<svelte:fragment slot="sidebarLeft">
        <Navigation />
    </svelte:fragment>
    <slot />
            
</AppShell>

