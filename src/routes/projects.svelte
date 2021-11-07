<script lang="ts">
	import stories from '$lib/stories';
</script>

{#each stories as story}
	<a sveltekit:prefetch href={`/stories/${story.slug}`}>{story.title}</a>
{/each}
