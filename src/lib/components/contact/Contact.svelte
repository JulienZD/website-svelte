<script lang="ts">
	import { Circle } from 'svelte-loading-spinners';

	type FormStatus = 'success' | 'error' | 'submitting' | undefined;

	let formStatus: FormStatus;
	let form: HTMLFormElement;

	function postForm(): void {
		if (!form) {
			formStatus = 'error';
			return;
		}

		formStatus = 'submitting';

		fetch('https://docs.google.com/forms/d/e/1FAIpQLSdvTbm68VYgrCjJ6-jRIDUx8aLxt4Y5sgcEyYyw51jjuu_Adg/formResponse', {
			method: 'POST',
			mode: 'no-cors',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams(new FormData(form) as never).toString()
		})
			.then(() => {
				formStatus = 'success';
				if (form) form.reset();
			})
			.catch(() => (formStatus = 'error'));
	}
</script>

<div id="contact" class="container mt-24 mb-8">
	<h2 class="text-4xl">Get in touch</h2>
	<p class="my-4">Feel free to reach out if you have any questions, or if you would like to have a conversation.</p>

	<form bind:this={form} on:submit|preventDefault={postForm} class="max-w-xl">
		<div class="flex flex-col my-4">
			<label for="name" class="text-secondary"> Name </label>
			<input name="entry.2082540926" id="name" type="text" required />
		</div>

		<div class="flex flex-col my-4">
			<label for="email" class="text-secondary"> E-mail </label>
			<input name="entry.1047030987" id="email" type="email" required />
		</div>

		<section class="flex flex-col my-4">
			<label for="message" class="text-secondary"> Message </label>
			<textarea name="entry.149682232" id="message" required rows={5} />
		</section>

		<button class="btn btn-outline !ml-0 min-w-[7em] grid place-content-center" type="submit">
			{#if formStatus === 'submitting'}
				<Circle color="#d49f1b" size="24" />
			{:else}
				Submit
			{/if}
		</button>
	</form>
	{#if formStatus === 'success'}
		<p class="text-secondary mt-4">Thanks, I'll be in touch soon!</p>
	{:else if formStatus === 'error'}
		<p class="text-red-500 mt-4">Something went wrong while sending your message. Please try again later.</p>
	{/if}
</div>
