import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const StackStyles = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin-bottom: 4rem;

	a {
		display: grid;
		padding: 5px;
		grid-template-columns: auto 1fr;
		gap: 0 1rem;
		align-items: center;
		background: var(--grey);
		border-radius: 0.5rem;

		.count {
			background: white;
			padding: 2px 5px;
			border-radius: 0.5rem;
		}

		&[aria-current='page'] {
			background: var(--yellow);
		}
	}
`;

const countProjectsWithStack = (projects) => {
  const counts = projects
    .map((project) => project.stack)
    .flat()
    .reduce((acc, stack) => {
      const existingStack = acc[stack.id];
      if (existingStack) {
        existingStack.count += 1;
      } else {
        acc[stack.id] = {
          id: stack.id,
          name: stack.name,
          count: 1,
        };
      }
      return acc;
    }, {});

  const sortedStack = Object.values(counts).sort((a, b) => b.count - a.count);
  return sortedStack;
};

export const ProjectFilter = () => {
  const { projects } = useStaticQuery(graphql`
	query {
		projects: allSanityProject {
			nodes {
				stack {
					id
					name
				}
			}
		}
	}
  `);

  const stackWithCounts = countProjectsWithStack(projects.nodes);

  return (
    <StackStyles>
      <Link to='/projects'>
        <span className='name'>All</span>
        <span className='count'>{projects.nodes.length}</span>
      </Link>
      {stackWithCounts.map((stack) => (
        <Link key={stack.id} to={`/projects-using/${stack.name}`}>
          <span className='name'>{stack.name}</span>
          <span className='count'>{stack.count}</span>
        </Link>
      ))}
    </StackStyles>

  );
};
