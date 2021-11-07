interface StoryMetadata {
	title: string;
	description: string;
	summary?: string;
	image: string;
	slug: string;
	onHomepage: boolean;
	order?: number;
	linkText?: string;
	stack?: string[];
	repository?: string;
}
