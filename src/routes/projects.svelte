<script lang="ts">
	import Contact from '$lib/components/contact/Contact.svelte';
	import ProjectGrid from '$lib/components/projects/ProjectGrid.svelte';
	import Head from '$lib/head/Head.svelte';
	import stories from '$lib/stories';

	const description = "All of the projects I've worked on during my career as a software engineer.";
</script>

<Head title="Projects" {description} />

<h1 class="animate-slideUp mb-4">All projects</h1>
<p class="mb-8">{description}</p>
<ProjectGrid {stories} />
<Contact />
