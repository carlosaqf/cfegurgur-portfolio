import { BiCoinStack as icon } from 'react-icons/bi'

export default {
	name: 'stack',
	title: 'Stack for Projects',
	type: 'document',
	icon,
	fields: [
		{
			name: 'name',
			title: 'Stack Name',
			type: 'string',
			description: 'Name of piece of Tech Stack'
		},
	]
}