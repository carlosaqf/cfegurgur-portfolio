import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from './ProjectCard';

const ProjectListStyles = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 8rem 5rem;
  padding: 0;
	/* grid-auto-rows: auto auto; */
`;

export const ProjectList = ({ projects }) => (
  <ProjectListStyles>
    {projects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
        isSelected
      />
    ))}
  </ProjectListStyles>
);
