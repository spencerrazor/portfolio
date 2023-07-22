<script>
    import { AppRail, AppRailTile, AppRailAnchor, AppShell} from '@skeletonlabs/skeleton';
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
    let currentTile = 0;
    let tabSet = 0;

    let tableArr = [
        {'technology':'Python', 'profiency':'Advanced', 'experience': '4+ years', 'type': 'Programming Language'},
        {'technology':'Javascript', 'profiency':'Advanced', 'experience': '3+ years', 'type': 'Programming Language'},
        {'technology':'SQL', 'profiency':'Advanced', 'experience': '3+ years', 'type': 'Programming Language'},
        {'technology':'Java', 'profiency':'Intermediate', 'experience': '2+ years', 'type': 'Programming Language'},
        {'technology':'HTML', 'profiency':'Intermediate', 'experience': '4+ years', 'type': 'Web Development'},
        {'technology':'CSS', 'profiency':'Intermediate', 'experience': '4+ years', 'type': 'Web Development'},
        {'technology':'Pandas', 'profiency':'Advanced', 'experience': '3+ years', 'type': 'Data Analysis Library'},
        {'technology':'Scikit-Learn', 'profiency':'Advanced', 'experience': '2+ years', 'type': 'Machine Learning Library'},
        {'technology':'PyTorch', 'profiency':'Intermediate', 'experience': '2+ years', 'type': 'Machine learning Library'},
        {'technology':'Svelte', 'profiency':'Beginner', 'experience': 'less than 1 year', 'type': 'Front-end Framework'},
        {'technology':'React', 'profiency':'Intermediate', 'experience': '2+ years', 'type': 'Front-end Framework'},
        {'technology':'PostgreSQL', 'profiency':'Intermediate', 'experience': '1+ years', 'type': 'DBMS'},
        {'technology':'SQL Server', 'profiency':'Intermediate', 'experience': '3+ years', 'type': 'DBMS'},
        {'technology':'SQL Server', 'profiency':'Intermediate', 'experience': '3+ years', 'type': 'DBMS'},
        {'technology':'SQL Server', 'profiency':'Intermediate', 'experience': '3+ years', 'type': 'DBMS'},
        {'technology':'SQL Server', 'profiency':'Intermediate', 'experience': '3+ years', 'type': 'DBMS'},

        ];
    let frontend = [
        {'technology':'Javascript', 'profiency':'Advanced', 'experience': '3+ years', 'type': 'Programming Language'},
        {'technology':'HTML', 'profiency':'Intermediate', 'experience': '4+ years', 'type': 'Web Development'},
        {'technology':'CSS', 'profiency':'Intermediate', 'experience': '4+ years', 'type': 'Web Development'},
        {'technology':'Svelte', 'profiency':'Beginner', 'experience': 'less than 1 year', 'type': 'Front-end Framework'},
        {'technology':'React', 'profiency':'Intermediate', 'experience': '2+ years', 'type': 'Front-end Framework'},
        {'technology':'REST API', 'profiency':'Intermediate', 'experience': '1+ years', 'type': 'Concept'},


        ];
</script>

<TabGroup class="border-0">
	<Tab class="m-0" bind:group={tabSet} name="tab1" value={0}>
		<svelte:fragment slot="lead">💻</svelte:fragment>
		<span>Machine Learning</span>
	</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>
        <svelte:fragment slot="lead">💻</svelte:fragment>
		<span>Data Engineering</span>
    </Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>
        <svelte:fragment slot="lead">💻</svelte:fragment>
		<span>Data Analysis</span>
    </Tab>
	<Tab bind:group={tabSet} name="tab3" value={3}>
        <svelte:fragment slot="lead">💻</svelte:fragment>
		<span>Front End</span>    
    </Tab>
	<Tab bind:group={tabSet} name="tab3" value={4}>
        <svelte:fragment slot="lead">💻</svelte:fragment>
		<span>Backend</span>
    </Tab>
	<Tab bind:group={tabSet} name="tab3" value={5}>
        <svelte:fragment slot="lead">💻</svelte:fragment>
		<span>Workflow</span>
    </Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
        <div class="grid place-items-center">
            <div class="w-3/4">
                <div class="table-container table-compact">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Technology</th>
                                <th>Profiency</th>
                                <th>Experience</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each tableArr as row, i}
                                <tr>
                                    <td>{row.technology}</td>
                                    <td>{row.profiency}</td>
                                    <td>{row.experience}</td>
                                    <td>{row.type}</td>
                                </tr>
                            {/each}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>   
		{:else if tabSet === 1}
        <div class="grid place-items-center">
            <div class="w-3/4">
                <div class="table-container table-compact">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Front-end</th>
                                <th>Profiency</th>
                                <th>Experience</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each frontend as row, i}
                                <tr>
                                    <td>{row.technology}</td>
                                    <td>{row.profiency}</td>
                                    <td>{row.experience}</td>
                                    <td>{row.type}</td>
                                </tr>
                            {/each}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>   
        <div class="grid place-items-center">
            <div class="w-3/4">
                <div class="table-container table-compact">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Backend</th>
                                <th>Profiency</th>
                                <th>Experience</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each tableArr as row, i}
                                <tr>
                                    <td>{row.technology}</td>
                                    <td>{row.profiency}</td>
                                    <td>{row.experience}</td>
                                    <td>{row.type}</td>
                                </tr>
                            {/each}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>   
		{:else if tabSet === 2}
        <div class="grid place-items-center">
            <div class="w-3/4">
                <div class="table-container table-compact">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Technology</th>
                                <th>Profiency</th>
                                <th>Experience</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each tableArr as row, i}
                                <tr>
                                    <td>{row.technology}</td>
                                    <td>{row.profiency}</td>
                                    <td>{row.experience}</td>
                                    <td>{row.type}</td>
                                </tr>
                            {/each}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div> 
        {:else if tabSet === 3}
        (label 4)
        {:else if tabSet === 4}
        (label 5)
        {:else if tabSet === 5}
        (label 6)
		{/if}
	</svelte:fragment>
</TabGroup>
 
