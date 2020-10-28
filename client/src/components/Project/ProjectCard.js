import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { ProjectCardTitle } from './ProjectCardTitle';
import { ProjectCardDescription } from './ProjectCardDescription';
import { textMotion } from '../../utils/framerVariants';

const ProjectCardWrapper = styled(motion.div)`
  display: grid;
	grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
	gap: 2rem;
  grid-auto-rows: auto 1fr auto;
  background: var(--grey);
  border-radius: 2rem;
  box-shadow: 0.5rem 1rem 2rem #d7d7d7;

`;

const ProjectCardStyles = styled(motion.li)`
  display: grid;
  @supports not (grid-template-rows: subgrid){
    --rows: auto 1fr auto;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  /* gap: 1rem; */
  h2, p { 
    margin: 0;
  }
`;

export const ProjectCard = ({ project }) => {
  const [isSelected, setIsSelected] = useState(false);
  const toggleIsSelected = () => setIsSelected(!isSelected);
  return (
    <AnimateSharedLayout>
      <ProjectCardWrapper layout>
        <ProjectCardStyles
          layout
          onClick={toggleIsSelected}
        >
          <motion.div style={{
            borderBottom: '0.5rem solid #d7d7d7',
            padding: '0',
            margin: '0',
          }}
          >
            <ProjectCardTitle project={project} variants={textMotion} />
          </motion.div>
          <Img fluid={project.image.asset.fluid} alt={project.name} />
          <ProjectCardDescription
            layout
            description={project.description}
            isSelected={isSelected}
          />
        </ProjectCardStyles>
      </ProjectCardWrapper>
    </AnimateSharedLayout>
  );
};
