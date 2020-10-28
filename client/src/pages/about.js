import { Link } from 'gatsby';
import React from 'react';
import { SEO } from '../components/SEO';

const AboutPage = () => (
  <>
    <SEO title='Character Sheet' />
    <h1>About Page!</h1>
    <p>
      I love to
      {' '}
      <Link to='/books'>READ!</Link>
    </p>
  </>
);

export default AboutPage;
