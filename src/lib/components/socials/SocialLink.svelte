<script lang="ts">
	export let href = '';
	export let title = '';
</script>

<a
	{href}
	aria-label={title}
	{title}
	class="mx-4 first:ml-0 last:mr-0 focus-visible:ring-2 focus-visible:ring-secondary-dark hover:text-[#acacac] transition-colors duration-200"
>
	<slot />
</a>
