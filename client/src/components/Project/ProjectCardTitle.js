import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const ProjectCardHeaderStyles = styled(motion.div)`
  margin: 2rem;

	a > h2 {
		text-decoration: none;
		font-size: 3rem;
		font-weight: bold;
		display: inline-block;
		color: var(--black);
		margin-bottom: 1rem;
	}
`;

export const ProjectCardTitle = ({ project, variants }) => (
  <ProjectCardHeaderStyles variants={variants} layout>
    <Link to={`/project/${project.slug.current}`}>
      <motion.h2>{project.name}</motion.h2>
    </Link>
    <p>
      {project.stack.map((tech) => (
        <span key={tech.id} className='tag'>
          {tech.name}
          {' '}
        </span>
      ))}
    </p>
  </ProjectCardHeaderStyles>
);
