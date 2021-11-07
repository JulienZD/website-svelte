<script lang="ts">
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

<main>
	<slot />
</main>

<footer class="mt-auto text-right py-3 pr-4">
	<div class="flex justify-end">
		<a href="https://colors.jzd.me/" class="link-animated-hover">Preview Color Combinations</a>
		<a class="link-animated-hover" href="https://github.com/JulienZD/website">Source</a>
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
