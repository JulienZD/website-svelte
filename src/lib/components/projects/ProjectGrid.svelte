<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	export let stories: StoryMetadata[];
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-16 mb-8">
	{#each stories as story (story.title)}
		<ProjectCard {story} />
	{/each}
</div>
