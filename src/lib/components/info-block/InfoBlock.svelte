<script lang="ts">
	export let title: string;
</script>

<div class="flex flex-col">
	<strong class="text-secondary mb-2">{title}</strong>
	<slot />
</div>
