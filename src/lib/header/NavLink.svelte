<script lang="ts">
	export let href = '';
	export let title = '';
	export let text = '';
	export let className = '';
</script>

<a {href} class={`${className} link-animated-hover first:ml-0 last:mr-0 mx-2`} title={title ?? text}>
	{text}
</a>
