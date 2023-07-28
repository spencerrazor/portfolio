<script>

    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import  portfoliologo  from '$lib/portfoliologo.png'

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
        document.getElementsByTagName('body')[0].classList.toggle('hide-scroll');
        drawerStore.open({});
    }

</script>

<AppShell slotSidebarLeft="w-0 lg:w-min" slotHeader="bg-black lg:h-[100px] w-full relative hide-scrollbar">
    <svelte:fragment slot="header">
        <div class="flex items-center justify-end">
            <Drawer position="top" class="" height="h-full">
                <Navigation/>
            </Drawer>
            <div class="hidden lg:flex flex-auto justify-around items-center">
                <a href="/">
                    <img width=100 height=100 src={portfoliologo} alt="logo">
                </a>
                    
                <a href="/work"class="text-xl hover:text-gray-500">About Me</a>
                <a href="/projects"class="text-xl hover:text-gray-500">Projects</a>
                <a href="/skills"class="text-xl hover:text-gray-500">Technologies</a>
                <a href="/blog"class="text-xl hover:text-gray-500">Blog</a>
                <a href="/contact"class="text-xl hover:text-gray-500">Contact</a>
            </div>
            <div class="lg:hidden flex justify-between w-full h-min pr-8 pl-8">
                <a class="h-full" href="/">
                    <img width=100 height=100 src={portfoliologo} alt="logo">
                </a>
                <button class="lg:hidden" on:click={drawerOpen}>
                    <span>
                        <svg viewBox="0 0 100 80" class="fill-token w-6">
                            <rect y="0" width="125" height="5" />
                            <rect y="30" width="125" height="5" />
                            <rect y="60" width="125" height="5" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </svelte:fragment>
    <slot />
            
</AppShell>
