import { Link } from 'gatsby';
import React from 'react';
import { ItemsGrid, SingleItemStyles } from '../styles/Grids';

export const ItemGrid = ({ items, type }) => (
  <ItemsGrid>
    {items.map((item) => (
      <SingleItemStyles key={item._id}>
        <Link to={`/${type}/${item.slug.current ? item.slug.current : ''}`}>
          <p>
            <span>{item.name}</span>
          </p>
        </Link>
        <img
          width='500'
          height='400'
          src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
          alt={item.name}
          style={{
            background: `url(${item.image.asset.metadata.lqip})`,
            backgroundSize: 'cover',
          }}
        />
      </SingleItemStyles>
    ))}
    <Link className='homepage-grid-btn' to={`/${type}s`}>View All &#x27A1;</Link>
  </ItemsGrid>
);
