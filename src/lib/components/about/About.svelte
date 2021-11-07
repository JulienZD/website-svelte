<script lang="ts">
	import { ChevronRightIcon, ChevronDownIcon } from 'svelte-feather-icons';
	import { AGE } from '$lib/util/age';

	import Hero from '../hero/Hero.svelte';
	import Socials from '../socials/Socials.svelte';
	import Highlight from '../styles/highlight/Highlight.svelte';
	import type { SvelteComponent } from 'svelte';

	export let scrollTo: SvelteComponent;

	const onScrollDownClick = () => {
		scrollTo?.scrollIntoView();
	};
</script>

<div class="lg:h-screen">
	<Hero />

	<article id="about" class="container lg:pr-[600px]">
		<h1 id="heading" class="flex flex-col mb-4 lg:mb-12 md:text-6xl md:whitespace-nowrap tracking-normal">
			<span class="text-[#acacac]">Hi, my name is</span>
			<Highlight>Julien Zapata Duque</Highlight>
		</h1>

		<Socials />

		<p>
			I'm a {AGE}-year-old Software Engineering student from The Netherlands. My current focus lies in web development.
		</p>
		<p>
			I'm passionate about all things software development. I'm always reading and learning about new subjects in my
			free time. In college I've learned to make Java applications and do full-stack web development with .NET Core. In
			my free time I've learned technologies like React, TypeScript and Node.js. Have a look below to see what I've
			worked on.
		</p>
		<a href="/about" class="link-animated-hover mt-8" aria-label="Read more about me">
			<span class="flex items-center">
				More about me <ChevronRightIcon size="16" />
			</span>
		</a>
	</article>

	<div class="container mt-16 hidden lg:block">
		<button id="scroll" on:click={onScrollDownClick}>
			<Highlight>
				<div class="flex text-xl items-end">
					<span class="mr-2">Scroll down</span>
					<ChevronDownIcon class="motion-safe:animate-bounce" size="24" />
				</div>
			</Highlight>
		</button>
	</div>
</div>

<style lang="postcss">
	#about > *,
	#heading > * {
		@apply animate-slideUp opacity-0;
	}

	#heading > *:nth-child(1) {
		animation-delay: 0s;
	}
	#heading > *:nth-child(2) {
		animation-delay: 0.2s;
	}
	#about > :global(*:nth-child(1)) {
		animation-delay: 0.4s;
	}
	#about > :global(*:nth-child(2)) {
		animation-delay: 0.6s;
	}
	#about > :global(*:nth-child(3)) {
		animation-delay: 0.8s;
	}
	#about > :global(*:nth-child(4)) {
		animation-delay: 1s;
	}
	#about > :global(*:nth-child(5)) {
		animation-delay: 1.2s;
	}

	#scroll {
		@apply animate-slideUp opacity-0;
		animation-delay: 1.3s;
	}
</style>
