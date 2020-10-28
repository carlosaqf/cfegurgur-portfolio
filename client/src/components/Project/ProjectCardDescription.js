import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const ProjectCardDescriptionStyles = styled(motion.div)`
  padding: 2rem;
`;

export const ProjectCardDescription = ({ description, isSelected }) => (
  <ProjectCardDescriptionStyles
    layout
  >
    <AnimatePresence>
      {isSelected ? (
        <DescriptionContent description={description} />
      ) : (
        <div className='center' style={{ cursor: 'pointer' }}>▼</div>
      )}
    </AnimatePresence>
  </ProjectCardDescriptionStyles>
);

const DescriptionContent = ({ description }) => (
  <motion.div
    layout
    // initial={{ y: -300, opacity: 0 }}
    // animate={{ y: 0, opacity: 1 }}
    // exit={{ y: 300, opacity: 0 }}
  >
    <p>{description}</p>
  </motion.div>
);
