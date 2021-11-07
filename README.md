# jzd.me - Svelte edition

A rewrite of [my website](https://jzd.me) using [SvelteKit](https://kit.svelte.dev/).

The [original version](https://github.com/JulienZD/website) was made with [Next.js](https://nextjs.org/) (React).

Ignoring images and media requests, the SvelteKit version has the following improvements over the Next.js one:

| Type                            |  Next.js | SvelteKit | Improvement |
| ------------------------------- | -------: | --------: | ----------: |
| Total requests size             | 521.24KB |  172.26KB |    348.98KB |
| Total transferred requests size | 172.53KB |   76.85KB |     95.68KB |
| Load                            |    3.25s |     2.36s |       0.89s |

Other interesting differences are that the `SvelteKit` version has _zero_ client side dependencies and has a significantly smaller `node_modules` folder size.

## Running locally

Install dependencies with `npm install`, start a development server:

```bash
npm run dev
```

## Building

Create a production version of the site using the [static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static):

```bash
npx svelte-kit build
```

> Preview the build with `npm run preview`
