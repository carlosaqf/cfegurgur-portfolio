import { BiPen as icon } from 'react-icons/bi'

export default {
	name: 'blogPost',
	title: 'Blog Posts',
	type: 'document',
	icon,
	fields: [
		{
			name: 'name',
			title: 'Blog Post Name',
			type: 'string',
			description: 'Name of your blog post'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 100
			}
		},
		{
			name: 'body',
			title: 'Body of Blog Post',
			type: 'markdown',
			description: 'Content for your Blog Post goes here.'
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'tags',
			title: 'Blog Post Tags',
			type: 'array', 
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'tag',
						},
					],
				},
			],
		},
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
			tag0: 'tags.0.name',
			tag1: 'tags.1.name',
			tag2: 'tags.2.name',
			tag3: 'tags.3.name',
		},
		prepare: ({ title, media, ...tag }) => {
			const postTags = Object.values(tag)
			return {
				title,
				media,
				subtitle: postTags.join(', ')
			}
		}
	}
}