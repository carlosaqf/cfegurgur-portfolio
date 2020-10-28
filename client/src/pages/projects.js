import React from 'react';
import { graphql } from 'gatsby';
import {
  ProjectList,
  ProjectFilter,
} from '../components/Project';

import { SEO } from '../components/SEO';

const ProjectPage = ({ data, pageContext }) => {
  const projects = data.projects.nodes;

  return (
    <>
      <SEO
        title={pageContext.stack ? `Projects using ${pageContext.stack}` : 'All Projects'}
      />
      <ProjectFilter />
      <ProjectList projects={projects} />

    </>
  );
};

export default ProjectPage;

export const query = graphql`
  query ProjectQuery($stackRegex: String){
    projects: allSanityProject(
      filter: { stack: { elemMatch: { name: { regex: $stackRegex } } } }
    ) {
      nodes {
        name
        id
        url
        repo
        description
        slug {
          current
        }
        stack {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 1000){
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
