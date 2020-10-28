import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from '../components/SEO';
import { BlogPostList } from '../components/BlogPostList';

const BlogPage = ({ data, pageContext }) => {
  const blogPosts = data.blogPosts.nodes;

  return (
    <>
      <SEO
        title={pageContext.stack ? `Blog Posts about ${pageContext.tag}` : 'Brain dump in word form!'}
      />
      <BlogPostList blogPosts={blogPosts} />
    </>
  );
};

export default BlogPage;

export const query = graphql`
  query{
    blogPosts: allSanityBlogPost {
      nodes {
        name
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1000){
              ...GatsbySanityImageFluid
            }
          }
        }
        tags {
          id
          name
        }
      }
    }
  }
`;
