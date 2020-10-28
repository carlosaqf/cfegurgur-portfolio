import { BiCodeAlt as icon } from 'react-icons/bi'

export default {
	name: 'project',
	title: 'Projects',
	type: 'document',
	icon,
	fields: [
		{
			name: 'name',
			title: 'Project Name',
			type: 'string',
			description: 'Name of the project'
		},
		{
			name: 'url',
			title: 'Live Site',
			type: 'url',
			description: 'URL for Live Site',
		},
		{
			name: 'repo',
			title: 'Github Repo',
			type: 'url',
			description: 'URL for Github Repo'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 100,
			}
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
			description: 'Briefly describe the project'
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
			name: 'stack',
			title: 'Tech Stack',
			type: 'array', 
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'stack',
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
			stack0: 'stack.0.name',
			stack1: 'stack.1.name',
			stack2: 'stack.2.name',
			stack3: 'stack.3.name',
		},
		prepare: ({ title, media, ...stack }) => {
			const techStack = Object.values(stack)
			return {
				title,
				media,
				subtitle: techStack.join(', ')
			}
		}
	}
}