<script lang="ts">
	let container: HTMLDivElement;

	export function scrollIntoView() {
		if (container) container.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div bind:this={container} />
