import { defineCollection, z } from 'astro:content';

const thoughts = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		datePosted: z.coerce.date(),
        summary: z.string(),
		topics: z.array(z.string()).optional(),
        image: z.string().optional(),
        body: z.string().optional()
	}),
});

export const collections = { thoughts };