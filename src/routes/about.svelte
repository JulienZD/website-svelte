<script lang="ts">
	import Contact from '$lib/components/contact/Contact.svelte';
	import EduProgress from '$lib/components/edu-progress/EduProgress.svelte';
	import Head from '$lib/head/Head.svelte';
	import { AGE } from '$lib/util/age';
</script>

<Head
	title="About me"
	description={`My name is Julien Zapata Duque. I'm a ${AGE} year old Software Engineering student from The Netherlands.`}
/>
<h1 class="animate-slideUp">About me</h1>
<picture>
	<source srcSet="/images/hero-og.webp" type="image/webp" width={640} height={360} />
	<img
		class="rounded-t-xl mb-4 md:max-w-xl"
		src="/images/hero-og.jpg"
		alt=""
		width={640}
		height={360}
		loading="lazy"
		decoding="async"
	/>
</picture>
<p>My name is Julien Zapata Duque. I am a {AGE}-year-old Software Engineering student from The Netherlands.</p>
<p class="mt-2">
	I've had an interest in computers since I was 17. I built my first computer around my 18th birthday. Soon after that I
	was introduced to AutoHotkey, a scripting language to automate various aspects of Windows. I quickly picked up the
	basics and wrote some simple scripts. A few months later I started learning Python, but soon stopped because I
	couldn't find a real use for it in my daily life.
</p>
<p class="mt-2">
	A year or two went by without much change until one day, when I was working at a local computer repair shop, where I
	was introduced to web development. They had recently hired a new guy to rebuild their website from the ground up and I
	was asked if I wanted to look over his shoulder as he worked. While I couldn't understand much of the code, I enjoyed
	the process around web development. So much that I started learning it in my free time with the help of online
	courses.
</p>
<p class="mt-2">
	At the age of 21 I decided to go to college to study Software Engineering (you can view my college progress below!).
	It was there where my love for software development has really made it's home. After a{' '}
	<a href="/story/neighborhood" class="link-animated-hover">full-stack web development project</a>
	I quickly fell in love with everything surrounding it. Since then I've spent my spare time learning Node.js, React and
	TypeScript. Currently I'm also learning a bit of Svelte on the side. In fact, I recently migrated this site from Next.js
	to SvelteKit :).
</p>
<section class="mt-12 animate-slideUp md:w-2/3 lg:w-1/2">
	<h2 class="text-4xl">Educational progress</h2>
	<h3 class="mb-2">Software Engineering Bachelor's degree</h3>
	<EduProgress />
	<p class="mt-2">
		I'm due to graduate on{' '}
		{new Date(2023, 5, 20).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
	</p>
</section>
<Contact />
