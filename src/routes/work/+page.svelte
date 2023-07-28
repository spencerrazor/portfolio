<script>
	import { RangeSlider } from '@skeletonlabs/skeleton';
	
	let timeline = [
		{ year: "September 2020", label: "UCSD", description:["Began my studies at UCSD majoring in <a>Data Science</a>. Remained top of my class with a <a>4.0 GPA</a>. Expected to graduate in 2024"]},
		{ year: 'May 2021', label: "MSO Inc. of SoCal",description:["Worked as a <a>Data Engineer</a> and Consultant at a healthcare logistics company. Originally, spent hours manually populating excel sheets for healthplans. Utilized Python and SQL to create data pipelines that speed up these processes to minutes."]},
		{ year: "January 2022", label: "Qualcomm Institute of Tech",description:["<a>Authentication Student Researcher</a> who was part of a research effort that was developing a integrated virtual and augmented reality workspace. Researched authentication and authorization methods within Unreal Engine. Worked on developing the multiplayer functionality of this workspace."] },
		{ year: "September 2022", label: "UCSD Tutor",description:["Tutored <a>advanced Python</a> for UCSD students with little coding experience. Reviewed code and created coding problems. Helped in debugging, optimizing code, and recommending good coding practices"] },
		{ year: "May 2023", label: "AI Camp",description:["<a>Data Science Intern</a> where I worked on an Information Retrieval Question Answering Bot that harnesses LLMs. Combined Django and React to build an application that can answer questions based off documents","Instructed groups of highschool students through data science workflow, such as EDA, machine learning, and deploying models on the web"] },
		{ year: "July 2023", label: "Energy311",description:["<a>Software Engineering Intern</a> where I worked on an Information Retrieval Question Answering Bot that harnesses LLMs. Combined Django and React to build an application that can answer questions based off documents","Instructed groups of highschool students through data science workflow, such as EDA, machine learning, and deploying models on the web"] },
		{ year: "June 2024", label: "Future Graduation",description:["I will graduate with a <a>UCSD Bachelor's in Data Science</a>. Woohoo!!! I am looking for any full-time position related to my expertise. I have developmend years of experience in Data Science and Software Engineering. I would also love to explore more niche Data Science roles like Data Analyst and Data Engineer. Please contact me if you have a role opening."] },
	]

	let value = 0;
	</script>

<section class="lg:h-[calc(100vh-100px-4rem)] flex items-center h-screen lg:mt-8 lg:mb-8 lg:drop-shadow-[0_0_25px_rgba(255,255,255,0.20)]">
	<!-- <h1 class="text-center text-8xl mt-8 mb-8">Projects</h1> -->
	<div class="m-auto w-full lg:w-3/4 bg-surface-900 h-full flex flex-col justify-around items-center pt-8 pb-8">
		<div class="pl-16 pr-16 w-full flex justify-around gap-5">
			<h1 class="text-4xl lg:text-8xl basis-1/3 p-5">
				{timeline[0,value].year}
			</h1>
			<div class="basis-2/3 flex-col ">
				<h1 class="text-2xl lg:text-6xl pb-8">{timeline[0,value].label}</h1>
				<p class="text-base lg:text-lg pb-8">{@html timeline[0,value].description}</p>
			</div>
		</div>
		<RangeSlider name="range-slider" bind:value={value} max={6} step={1} ticked>See the Range of my Experience</RangeSlider>
	</div>
</section>

<style>
	section :global(a) {
		color: red;
	}
</style>