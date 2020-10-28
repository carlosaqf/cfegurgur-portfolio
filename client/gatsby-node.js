/* eslint-disable no-restricted-syntax */
import path from 'path';
import fetch from 'isomorphic-fetch';
import dotenv from 'dotenv';
import convert from 'xml-js';

dotenv.config({ path: '.env' });

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve('./src/templates/Project.js');

  const { data } = await graphql(`
		query {
			projects: allSanityProject {
				nodes {
					name
					slug {
						current
					}
				}
			}
		}
	`);

  data.projects.nodes.forEach((project) => {
    actions.createPage({
      path: `project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    });
  });
}

async function turnStackIntoPages({ graphql, actions }) {
  const stackTemplate = path.resolve('./src/pages/projects.js');
  const { data } = await graphql(`
	query {
		stack: allSanityStack {
			nodes {
				name
				id
			}
		}
	}
  `);

  data.stack.nodes.forEach((stack) => {
    actions.createPage({
      path: `projects-using/${stack.name}`,
      component: stackTemplate,
      context: {
        stack: stack.name,
        stackRegex: `/${stack.name}/i`,
      },
    });
  });
}

async function fetchBooksAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const res = await fetch(`https://www.goodreads.com/review/list/${process.env.GR_USER_ID}.xml?key=${process.env.GR_API_KEY}&v=2&shelf=${process.env.GR_SHELF}&per_page=20`);
  const data = await res.text();
  const result = JSON.parse(convert.xml2json(data, { compact: true, spaces: 2 }));
  const bookShelf = result.GoodreadsResponse.reviews.review;

  for (const book of bookShelf) {
    const nodeMeta = {
      id: createNodeId(`book-${book.book.title_without_series._text}`),
      parent: null,
      children: [],
      internal: {
        type: 'book',
        mediaType: 'application/json',
        contentDigest: createContentDigest(book),
      },
    };

    actions.createNode({
      ...book,
      ...nodeMeta,
    });
  }
}

async function turnBlogPostsIntoPages({ graphql, actions }) {
  const blogPostTemplate = path.resolve('./src/templates/BlogPost.js');

  const { data } = await graphql(`
		query {
			blogPosts: allSanityBlogPost {
				nodes {
					name
					slug {
						current
					}
				}
			}
		}
	`);

  data.blogPosts.nodes.forEach((blogPost) => {
    actions.createPage({
      path: `/post/${blogPost.slug.current}`,
      component: blogPostTemplate,
      context: {
        slug: blogPost.slug.current,
      },
    });
  });
}

export async function sourceNodes(params) {
  await Promise.all([
    fetchBooksAndTurnIntoNodes(params),
  ]);
}

export async function createPages(params) {
  await Promise.all([
    turnProjectsIntoPages(params),
    turnStackIntoPages(params),
    turnBlogPostsIntoPages(params),
  ]);
}
