<script lang="ts">
	import NavLink from './NavLink.svelte';
</script>

<header class="container my-8 font-semibold text-lg">
	<nav class="flex justify-between">
		<NavLink href="/" text="JZD" title="Home" className="sm:text-2xl" />
		<div class="flex justify-around">
			<NavLink href="/about" text="About" />
			<NavLink href="/projects" text="Projects" />
			<NavLink href="/#contact" text="Contact" />
		</div>
	</nav>
</header>
