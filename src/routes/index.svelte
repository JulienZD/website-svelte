<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Head from '$lib/head/Head.svelte';
	import About from '$lib/components/about/About.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import Projects from '$lib/components/projects/Projects.svelte';

	let projects: Projects;
</script>

<Head />

<About scrollTo={projects} />

<Projects bind:this={projects} />

<Contact />
