<script lang="ts">
	export let title = 'Hi, I\'m Julien';
	export let description = "For the past few years I've been playing around with various technologies. I'm eager to learn new things and am always on the lookout for a new challenge.";
	export let image = '';
</script>

<svelte:head>
	<title>{title} | Julien Zapata Duque</title>
	<meta property="og:title" content={`${title} | Julien Zapata Duque`} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image || "/images/hero-og.jpg"} />
</svelte:head>
