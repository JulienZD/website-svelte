<div id="hero" />
<div class="container block lg:hidden">
	<picture>
		<source srcSet="/images/hero-og.webp" type="image/webp" />
		<img
			class="animate-slideUp rounded-t-xl"
			src="/images/hero-og.jpg"
			alt=""
			height={360}
			loading="lazy"
			decoding="async"
		/>
	</picture>
</div>

<style>
	#hero {
		@apply hidden lg:block xl:w-[900px] lg:w-[600px] h-[650px] relative float-right xl:bg-center bg-left-center bg-cover bg-no-repeat animate-slideLeft;
		background-image: url(/images/hero.jpg);
		clip-path: polygon(calc(30% - 10vw) 0, 100% 0, 100% 100%, 45% 100%);
	}
</style>
