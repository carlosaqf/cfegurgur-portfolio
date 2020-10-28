import { BiLabel as icon } from 'react-icons/bi'

export default {
	name: 'tag',
	title: 'Tags for Posts',
	type: 'document',
	icon,
	fields: [
		{
			name: 'name',
			title: 'Tag Name',
			type: 'string',
			description: 'Name of tag'
		},
		
	]
}