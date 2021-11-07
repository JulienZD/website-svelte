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
	import InfoBlock from '$lib/components/info-block/InfoBlock.svelte';
	import { onMount } from 'svelte';

	export let Story: any;
	export let metadata: StoryMetadata;

	$: ({ title, description, image, stack, repository, summary } = metadata);

	onMount(() => {
		document.querySelectorAll('main a').forEach((anchor: HTMLAnchorElement) => {
			anchor.className = 'link-animated-hover';
			if (anchor.href.startsWith('http')) {
				anchor.setAttribute('target', '_blank');
				anchor.setAttribute('referrer', 'noopener');
			}
		});
	});
</script>

<Head {title} {description} {image} />

<h1 class="animate-slideUp">{title}</h1>

<p class="max-w-4xl my-8">
	{#if summary}
		{@html summary}
	{:else}
		{description}
	{/if}
</p>

<div class="flex flex-row gap-x-24 my-8">
	<InfoBlock title="Stack">
		{#each stack as tech}
			<p class="my-0.5 first:mt-0 last:mb-0">
				{tech}
			</p>
		{/each}
	</InfoBlock>
	<InfoBlock title="Code">
		{#if repository}
			<a href={repository}>Repository</a>
		{:else}
			<p class="my-0">Not available</p>
		{/if}
	</InfoBlock>
</div>
{#if image}
	<img src={image} alt="" width={1024} height={576} class="rounded-t-xl" loading="lazy" decoding="async" />
{/if}

<div class="mt-12">
	<svelte:component this={Story} />
</div>
