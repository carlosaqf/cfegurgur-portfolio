import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { SEO } from '../components/SEO';

const ProjectGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const SingleProjectPage = ({ data }) => {
  const { project } = data;

  return (
    <>
      <SEO title={project.name} image={project.image?.asset?.fluid?.src} />
      <ProjectGrid>
        <Img fluid={project.image.asset.fluid} />
        <div>
          <h2>{project.name}</h2>
          <ul>
            {project.stack.map((stack) => (
              <li key={stack.id}>{stack.name}</li>
            ))}
          </ul>
          <p>{project.description}</p>
        </div>
      </ProjectGrid>
    </>
  );
};

export default SingleProjectPage;

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
	  description
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      stack {
        name
        id
      }
    }
  }
`;
