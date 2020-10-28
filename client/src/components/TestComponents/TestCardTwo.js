import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import {
  motion, AnimateSharedLayout, AnimatePresence,
} from 'framer-motion';

const ProjectCardWrapper = styled(motion.div)`
	display: grid;
	border-radius: 2rem;
	@supports not (grid-template-rows: subgrid){
		--rows: auto auto 1fr;
	}
	grid-template-rows: var(--rows, subgrid);
	grid-row: span 3;
	gap: 1rem;
	h2, p { 
		margin: 0;
  }
  height: 50vh;
`;

const ProjectCardStyles = styled(BackgroundImage)`
	display: grid;
	border-radius: 2rem;
	@supports not (grid-template-rows: subgrid){
		--rows: auto auto 1fr;
	}
	grid-template-rows: var(--rows, subgrid);
	grid-row: span 3;
	gap: 1rem;
	h2, p { 
		margin: 0;
	}
	background-position: center;

`;

const ProjectCardHeaderStyles = styled.div`
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

const ProjectCardDescriptionStyles = styled(motion.div)`
	background-color: var(--grey);
	position: absolute;
	bottom: 0;
	border-radius: 1rem;
	padding: 1rem;
	margin: 1rem;
`;

export const TestCardTwo = ({ project }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <ProjectCardWrapper>
      <ProjectCardStyles
        fluid={project.image.asset.fluid}
        onClick={toggleShow}
      >
        <ProjectCardHeaderStyles>
          <Link to={`/project/${project.slug.current}`}>
            <h2>{project.name}</h2>
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
        <AnimateSharedLayout>
          <ProjectCardDescriptionStyles
            layout
            style={{ display: show ? '' : 'none' }}
          >
            <AnimatePresence>
              <motion.p layout style={{ display: show ? '' : 'none' }}>{project.description}</motion.p>
            </AnimatePresence>
          </ProjectCardDescriptionStyles>
        </AnimateSharedLayout>
      </ProjectCardStyles>
    </ProjectCardWrapper>
  );
};
