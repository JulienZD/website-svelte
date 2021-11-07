<script lang="ts">
	import projects from '$lib/stories';
	import ProjectGrid from '$lib/components/projects/ProjectGrid.svelte';

	let container: HTMLDivElement;

	export function scrollIntoView() {
		if (container) container.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div bind:this={container} id="projects" class="container mt-24 lg:mt-0 animate-slideUp">
	<h2 class="mb-4 text-4xl">Projects</h2>
	<p>There's never a time when I'm not working on something. Take a look at my recent endeavors.</p>
	
	<ProjectGrid stories={projects.slice(0, 4)} />
	{#if projects.length > 4}
		<a href="/projects" class="link-animated-hover !px-0">View all projects</a>
	{/if}
</div>
