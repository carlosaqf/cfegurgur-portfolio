import React from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';

const DummyItemAvatar = styled(motion.div)`
	width: 40px;
	height: 40px;
	border-radius: 2rem;
	background-color: #666;
`;

const DummyItemStyle = styled(motion.li)`
	background-color: rgba(214, 214, 214, 0.5);
  	border-radius: 10px;
  	padding: 20px;
  	margin-bottom: 20px;
  	overflow: hidden;
  	cursor: pointer;
`;

const hoverMotionVariants = {
  rest: {
    opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween',
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
      type: 'tween',
    },
  },
};

const DummyItem = () => {
  // eslint-disable-next-line no-console
  console.log('dummy item');
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <DummyItemStyle
      layout
    >
      <motion.div layout style={{ display: 'flex', gap: '1rem' }}>
        <DummyItemAvatar layout />
        <h2>Test Title</h2>
      </motion.div>
      <AnimatePresence><DummyContent /></AnimatePresence>
    </DummyItemStyle>
  );
};

// const DummyContentRow = styled.div`
// 	width: 100%;
// 	height: 1rem;
// 	background-color: #999;
// 	border-radius: 1rem;
// 	margin-top: 1.2rem;
// `;

const DummyContent = () => (
  <motion.div
    layout
    initial='rest'
    whileHover='hover'
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.p
      layout
      variants={hoverMotionVariants}
    >
      Ea laboris ad occaecat labore ullamco laboris occaecat.
      Laborum esse irure et dolor dolor non anim nulla deserunt nostrud laboris
      consectetur.
      Minim proident nisi in ut laborum consequat sit adipisicing nostrud sit.
    </motion.p>
  </motion.div>
);

const DummyItemList = styled(motion.ul)`
	list-style: none;
	margin: 2rem 0;
	padding: 2rem;
	/* width: 1000px; */
	/* display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
	gap: 2rem;
	background: var(--red);
	padding: 20px;
	border-radius: clamp(1rem, 10vw, 5rem);

	@media(max-width: 900px){
		grid-template-columns: 1fr;
	}
`;

export const TestCard = () => (
  <AnimateSharedLayout>
    <DummyItemList layout initial={false}>
      <DummyItem initial='rest' whileHover='hover' />
      <DummyItem />
      <DummyItem />
    </DummyItemList>
  </AnimateSharedLayout>
);
