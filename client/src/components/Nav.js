import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  max-width: 1100px;
  margin: 5rem auto 5rem auto;  
  text-transform: uppercase;

  ul {
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr auto auto auto;
    gap: 2rem;
    align-items: center;
    
    @media (max-width: 1100px){
      margin-left: 2rem;
      margin-right: 2rem;
    }

    a {
      font-weight: 600;
      color: var(--black);
      font-size: 1.5rem;
      text-decoration: none;
      &:hover{
        color: var(--yellow);
      }

      &[aria-current='page'] {
        color: var(--yellow);
      }
    }

    .logo {
      grid-column: 1 / 2;
      text-align: left;
      a {
        font-size: 2rem;
        letter-spacing: 1rem;
      }
    }
  }
`;

export const Nav = () => (
  <NavStyles>
    <ul>
      <li className='logo'>
        <Link to='/'>CFEGURGUR</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
    </ul>
  </NavStyles>
);
