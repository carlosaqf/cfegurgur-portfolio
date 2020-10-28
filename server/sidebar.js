import React from 'react'
import S from '@sanity/desk-tool/structure-builder'

export const Sidebar = () => {
	return S.list().title(`CF Portfolio`).items([
		S.listItem()
			.title('Home Page')
			.icon(() => <strong>🔥</strong>)
			.child(
				S.editor()
					.schemaType('siteSettings')
					.documentId('frontpage')
			),
			...S.documentTypeListItems().filter(item => item.getId() !== 'siteSettings'),
	])
}

export default Sidebar