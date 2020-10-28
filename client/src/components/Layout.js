import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import { Nav } from './Nav';
import { Footer } from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteBorderStyles = styled.div`
  max-width: 1100px;
  margin: 2rem auto;
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);

  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Nav />
    <SiteBorderStyles>
      {children}
    </SiteBorderStyles>
    <Footer />
  </>
);
