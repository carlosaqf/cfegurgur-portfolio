import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { SEO } from '../components/SEO';

const BlogPostGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  /* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */
  grid-template-columns: 1fr;
`;

const SingleBlogPostPage = ({ data }) => {
  const { blogPost } = data;

  return (
    <>
      <SEO title={blogPost.name} image={blogPost.image?.asset?.fluid?.src} />
      <BlogPostGrid>
        <h2>{blogPost.name}</h2>
        <ul>
          {blogPost.tags.map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
        <div>
          <Img fluid={blogPost.image.asset.fluid} />
          <ReactMarkdown source={blogPost.body} />
        </div>
      </BlogPostGrid>
    </>
  );
};

export default SingleBlogPostPage;

export const query = graphql`
  query($slug: String!) {
    blogPost: sanityBlogPost(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      tags {
        name
        id
      }
	  body
    }
  }
`;
