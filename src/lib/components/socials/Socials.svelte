<script lang="ts">
	import { GithubIcon, LinkedinIcon, TwitterIcon } from 'svelte-feather-icons';
	import SocialLink from './SocialLink.svelte';
</script>

<div id="socials" class="flex my-4">
	<SocialLink href="https://github.com/JulienZD" title="View my GitHub">
		<GithubIcon size="24" />
	</SocialLink>
	<SocialLink href="https://linkedin.com/in/julienzapataduque/" title="Connect with me on LinkedIn">
		<LinkedinIcon size="24" />
	</SocialLink>
	<SocialLink href="https://twitter.com/JulienIsMe" title="Follow me on Twitter">
		<TwitterIcon size="24" />
	</SocialLink>
</div>

<style lang="postcss">
	#socials > :global(*) {
		@apply animate-slideUp opacity-0;
	}

	#socials > :global(*:nth-child(1)) {
		animation-delay: 0.3s;
	}
	#socials > :global(*:nth-child(2)) {
		animation-delay: 0.35s;
	}
	#socials > :global(*:nth-child(3)) {
		animation-delay: 0.4s;
	}
</style>
