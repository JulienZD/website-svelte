<script lang="ts">
	import { onMount } from 'svelte';

	function getPercentualEduProgress(): number {
		const startDate = new Date(2019, 8, 1);
		const endDate = new Date(2023, 5, 20);
		const totalEduTime = endDate.getTime() - startDate.getTime();
		const elapsedTime = Date.now() - startDate.getTime();
		const percentage = (elapsedTime / totalEduTime) * 100;
		return Number(percentage.toFixed(2));
	}
	let percentage = 0;

	onMount(() =>
		setTimeout(() => {
			percentage = getPercentualEduProgress();
		}, 150)
	);
</script>

<div class="progress">
	<div class="progressBar" style={`width: ${percentage}%`}>{percentage}%</div>
</div>

<style lang="postcss">
	.progressBar {
		@apply flex flex-col justify-center text-center whitespace-nowrap overflow-hidden bg-secondary text-primary;
		transition: width 1.5s ease;
	}

	.progress {
		@apply w-full flex text-xs rounded overflow-hidden h-4 bg-primary border border-secondary;
		line-height: 0;
		font-size: 0.75rem;
	}
</style>
