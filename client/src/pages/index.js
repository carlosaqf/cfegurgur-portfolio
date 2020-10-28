import React from 'react';
import { SEO } from '../components/SEO';
import { HomePageGrid, HomePageHeroGrid } from '../styles/Grids';
import concept from '../assets/images/concept.svg';
import useLatestData from '../utils/useLatestData';
import { ItemGrid } from '../components/ItemGrid';

const FeaturedProjects = ({ featuredProjects }) => {
  console.log('Featured Projects', featuredProjects);

  return (
    <div>
      <h2 className='center'>Projects</h2>
      {featuredProjects && !featuredProjects?.length && <p>No featured projects yet!</p>}
      {featuredProjects?.length && <ItemGrid items={featuredProjects} type='project' />}
    </div>
  );
};

const FeaturedBlogPosts = ({ featuredBlogPosts }) => {
  console.log('Featured Blog Posts', featuredBlogPosts);

  return (
    <div>
      <h2 className='center'>Blog Posts</h2>
      {featuredBlogPosts && !featuredBlogPosts?.length && <p>No featured blog posts yet!</p>}
      {featuredBlogPosts?.length && <ItemGrid items={featuredBlogPosts} type='post' />}
    </div>
  );
};

const HomePage = () => {
  const { featuredBlogPosts, featuredProjects } = useLatestData();
  return (
    <div className='center'>
      <SEO title='Hafa Adai! 🤙🏼' />
      <HomePageHeroGrid>
        <h4>Take your ideas</h4>
        <h1>
          From Concept to
          {' '}
          <span className='underline'>Code.</span>
        </h1>
        <img src={concept} alt='man standing next to wireframe' height='500px' width='500px' />
        <p>
          Whether it&apos;s redesigning, rebranding or creating something new.
          I can help transform your ideas into code with clean, SEO-driven, UX friendly websites.
        </p>
      </HomePageHeroGrid>

      <HomePageGrid>
        <FeaturedProjects featuredProjects={featuredProjects} />
        <FeaturedBlogPosts featuredBlogPosts={featuredBlogPosts} />
      </HomePageGrid>

    </div>
  );
};

export default HomePage;
