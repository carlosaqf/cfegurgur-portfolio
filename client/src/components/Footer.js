import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background: var(--black);
  color: var(--grey);
  padding: 5rem;
  p {
    padding-top: 2rem;
    margin: 0;
    font-weight: 300;
  }
`;

const WaveStyles = styled.div`
  max-height: 34rem;
  overflow: hidden;
  svg {
    display: block;
    @media (min-width: 1920px){
      display: none;
    }
  }
`;

export const Footer = () => (
  <>
    <WaveStyles>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='#2e2e2e' fillOpacity='1' d='M0,224L26.7,202.7C53.3,181,107,139,160,122.7C213.3,107,267,117,320,106.7C373.3,96,427,64,480,80C533.3,96,587,160,640,160C693.3,160,747,96,800,69.3C853.3,43,907,53,960,90.7C1013.3,128,1067,192,1120,224C1173.3,256,1227,256,1280,245.3C1333.3,235,1387,213,1413,202.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z' /></svg>
    </WaveStyles>
    <FooterStyles>
      <div className='center'>
        <span role='img' aria-label='fire'>🔥</span>
        <span role='img' aria-label='fire'>🌱</span>
        <span role='img' aria-label='fire'>💧</span>
        <span role='img' aria-label='fire'>🌎</span>
      </div>
      <p className='center'>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Carlos&apos;s portfolio, made with Gatsby and Sanity
      </p>
    </FooterStyles>
  </>
);
