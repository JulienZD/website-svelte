<script lang="ts">
	import { page } from '$app/stores';

	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<meta property="og:url" content="https://jzd.me" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content="#071625" />
</svelte:head>

<Header />

<main class:container={$page.path !== '/'}>
	<slot />
</main>

<footer class="mt-auto text-right py-3 pr-4">
	<div class="flex justify-end">
		<a href="https://colors.jzd.me/" class="link-animated-hover">Preview Color Combinations</a>
		<a class="link-animated-hover" href="https://github.com/JulienZD/website">Source</a>
	</div>
</footer>
