import { Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BlogPostsGridStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
	gap: 2rem;
	grid-auto-rows: auto auto 500px;
`;

const BlogPostStyles = styled.div`
	display: grid;
	@supports not (grid-template-rows: subgrid){
		--rows: auto auto 1fr;
	}
	grid-template-rows: var(--rows, subgrid);
	grid-row: span 3;
	gap: 1rem;
	h2, p { 
		margin: 0;
	}
`;

const SingleBlogPost = ({ blogPost }) => (
  <BlogPostStyles>
    <Link to={`/post/${blogPost.slug.current}`}>
      <h2>{blogPost.name}</h2>
    </Link>
    <p>
      {blogPost.tags.map((tag) => (
        <span key={tag.id} className='tag'>
          {tag.name}
          {' '}
        </span>
      ))}
    </p>
    <Img fluid={blogPost.image.asset.fluid} alt={blogPost.name} />
  </BlogPostStyles>
);

export const BlogPostList = ({ blogPosts }) => (
  <BlogPostsGridStyles>
    {blogPosts.map((blogPost) => (
      <SingleBlogPost key={blogPost.id} blogPost={blogPost} />
    ))}
  </BlogPostsGridStyles>
);
