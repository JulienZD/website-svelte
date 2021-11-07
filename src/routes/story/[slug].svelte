<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

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
	import Head from '$lib/head/Head.svelte';

	export let Story: any;
	export let metadata: StoryMetadata;

	$: ({ title, description, image, stack, repository } = metadata);
</script>

<Head {title} {description} {image} />

<h1>{metadata.title}</h1>

<section class="meta">
	{#if stack?.length > 0}
		<div class="meta-item">
			<b>Stack</b>
			{#each stack as tech}
				<p>{tech}</p>
			{/each}
		</div>
	{/if}

	{#if repository}
		<div class="meta-item">
			<b>Code</b>
			<a href={repository}>Repository</a>
		</div>
	{/if}
</section>

{#if image}
	<img src={image} alt="" loading="lazy" decoding="async" />
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
