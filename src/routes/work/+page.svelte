<script>
	import { onMount } from 'svelte'
	import { quadInOut } from 'svelte/easing'
	import { tweened } from 'svelte/motion'
	
	let timeline = [
		{ year: "September 2020", label: "UCSD", description:["Began my studies at UCSD majoring in Data Science.","Remained top of my class with a 4.0 GPA.","Expected to graduate in 2024"]},
		{ year: 'May 2021', label: "MSO Inc. of SoCal",description:["Worked as a Data Engineer and Consultant at a healthcare logistics company.","Originally, spent hours manually populating excel sheets for healthplans.","Utilized Python and SQL to create data pipelines that speed up these processes to minutes."]},
		{ year: "January 2022", label: "Qualcomm Institute of Tech",description:["Part of a research effort that was developing a integrated virtual and augmented reality workspace","Researched authentication and authorization methods within Unreal Engine","Worked on developing the multiplayer functionality of this workspace."] },
		{ year: "September 2022", label: "UCSD Tutor",description:["Tutored advanced Python for UCSD students with little coding experience", "Reviewed code and created coding problems", "Helped in debugging, optimizing code, and recommending good coding practices"] },
		{ year: "May 2023", label: "AI Camp",description:["Data Science internship where I worked on an Information Retrieval Question Answering Bot that harnesses LLMs","Combined Django and React to build an application that can answer questions based off documents","Instructed groups of highschool students through data science workflow, such as EDA, machine learning, and deploying models on the web"] },
	]
	const width = 900
	
	let duration = 1000
	let index = tweened(0, {duration, easing: quadInOut})
	let dotSize = tweened(3, {duration: 200, easing: quadInOut})


    function handleClick(event) {
        const screenWidth = window.innerWidth;
        const clickX = event.clientX;

        if (clickX <= screenWidth / 2) {
        // Clicked on the left side
            prev();
        } else {
        // Clicked on the right side
            next();
        }
    }

	function next() {
		$dotSize = 3
		if ($index < timeline.length - 1) {
			$index++
		} else {
			$index = 0
		}

		setTimeout(() => $dotSize = 8, 1000)
	}
	function prev() {
		$dotSize = 3
		if ($index > 0) {
			$index--
		} else {
			$index = 1
		}
		
		setTimeout(() => $dotSize = 8, 500)
	}
</script>

<div class="grid place-items-center">
    <svg on:click={handleClick} class="h-screen" viewBox="{-60+$index*200} 0 {width/timeline.length} 120">
        <line x1=20 y1=95 x2={30+($index*200)} y2=95 stroke=black/>
        
        {#each timeline as event, i}
            <g>
                <text class="label" x={25+i*40*timeline.length} y=20 text-anchor="middle">{event.label}</text>
                {#each event.description as line,j}
                    <text class="description" x={25+i*40*timeline.length} y={40+j*5} text-anchor="middle">{line}</text>
                {/each}
                <text class="year" x={25+i*40*timeline.length} y=80 text-anchor="middle">{event.year}</text>
                <circle cx={25 + i*40*timeline.length} cy=95 r={$dotSize}/>
            </g>
        {/each} 
        
    </svg>
</div>

<style>
	:global(body) {
		display: flex;
	}
	svg {
		overflow: visible;
	}
	text {
		fill: #555;
        font-size: 1rem;
	}
	.year {
		font-size: 1rem;
		font-weight: 400;
	}
	.label {
		fill: #666;
	}
    .description {
        fill: white;
        font-size: 0.2rem;
    }
	line {
		stroke-width: 5px;
		stroke: #ccc;
		stroke-dasharray: 2 2;
	}
	circle {
		fill: orange;
	}
</style>