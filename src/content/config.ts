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

const about = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		body: z.string().optional()
	})
});

const brand = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		intro: z.string(),
		avatar: z.string(),
		description: z.string()
	})
})

export const collections = { thoughts, about, brand };