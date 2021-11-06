<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async ({ page }) => {
		try {
			const { default: Story, metadata } = await import(`../../lib/content/stories/${page.params.slug}.md`);

			return {
				props: { Story, metadata }
			};
		} catch (error) {
			return {
				error: new Error(error)
			};
		}
	};
</script>

<script lang="ts">
	import { base } from '$app/paths';

	export let Story: any;
	export let metadata: StoryMetadata;

	interface StoryMetadata {
		title: string;
		description: string;
		image: string;
		slug: string;
		onHomepage: boolean;
		order?: number;
		linkText?: string;
		stack?: string[];
		repository?: string;
	}
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta property="og:title" content={metadata.title} />
	<meta name="description" content={metadata.description} />
	<meta property="og:description" content={metadata.description} />
	{#if metadata.image}
		<meta property="og:image" content={metadata.image} />
	{/if}
</svelte:head>

<h1>{metadata.title}</h1>

<section class="meta">
	{#if metadata.stack?.length > 0}
		<div class="meta-item">
			<b>Stack</b>
			{#each metadata.stack as tech}
				<p>{tech}</p>
			{/each}
		</div>
	{/if}

	{#if metadata.repository}
		<div class="meta-item">
			<b>Code</b>
			<a href={metadata.repository}>Repository</a>
		</div>
	{/if}
</section>

{#if metadata.image}
	<img src={metadata.image} alt="" loading="lazy" decoding="async" />
{/if}

<svelte:component this={Story} />

<style>
	.meta {
		display: flex;
		column-gap: 6rem;
	}

	.meta-item {
		display: flex;
		flex-direction: column;
	}

	.meta b {
		margin-bottom: 0.5rem;
	}

	p {
		margin: 0;
		margin-bottom: 0.25rem;
		color: gold;
	}
</style>
