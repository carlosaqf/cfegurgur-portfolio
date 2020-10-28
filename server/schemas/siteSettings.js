import { BiCog as icon } from 'react-icons/bi'

export default {
	name: 'siteSettings',
	title: 'Settings',
	type: 'document',
	icon,
	fields: [
		{
			name: 'name',
			title: 'Name of Site',
			type: 'string',
			description: 'Name of the site that will feature the projects and posts'
		},
		{
			name: 'featuredProjects',
			title: 'Featured Projects',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'project' }] },]
		},
		{
			name: 'featuredBlogPosts',
			title: 'Featured Blog Posts',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'blogPost' }] },]
		},
	],
}