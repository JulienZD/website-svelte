<script lang="ts">
	import { ChevronRightIcon } from 'svelte-feather-icons';
	export let story: StoryMetadata;

	$: ({ title, description, image, slug, linkText } = story);
</script>

<article class="group flex flex-col mt-4 lg:max-w-lg cursor-pointer">
	<div
		style={`background-image: url(${image})`}
		class="bg-cover bg-top h-72 rounded-t-xl rounded-b transition-transform duration-[250ms] group-focus:scale-[1.02] group-hover:scale-[1.02]"
	/>

	<a href={`/story/${slug}`} aria-label={`Read more about ${title}`} title={`Read more`}>
		<h3 class="text-secondary mt-4">{title}</h3>
	</a>

	<p class="mt-4 !mb-0">{description}</p>
	<p class="inline-flex items-center uppercase mt-4 !mb-0 text-secondary">
		<span class="link-animated-hover">{linkText ?? 'View project'}</span>
		<ChevronRightIcon size="16" />
	</p>
</article>

<style>
	article {
		position: relative;
	}

	article a::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: ' ';
	}
</style>
