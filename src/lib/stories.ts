const imports = import.meta.globEager('../lib/content/stories/*.md');

const stories = [];
for (const path in imports) {
	const story = imports[path];

	// find the name of the file without the extension
	const slug = path.split('/').pop().split('.md')[0];
	if (story) {
		const render = typeof story.default.render === 'function' && story.default.render();

		stories.push({
			...story.metadata,
			slug,
			...render
		});
	}
}

// Filter the post and order them by published date
const sortedStories = stories.sort((a, b) => a.order - b.order);

// Expose this info to other files
export default sortedStories;
