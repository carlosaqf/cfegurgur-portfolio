import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { SEO } from '../components/SEO';

const BookGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const SingleBookStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

const BooksPage = ({ data }) => {
  const totalCount = data.books.nodes.length;
  const books = data.books.nodes;

  return (
    <>
      <SEO title={`Books! I have read ${totalCount} books and counting!`} />
      <h2 className='center'>
        I have read
        {' '}
        {totalCount}
        {' '}
        books in 2020!
      </h2>
      <BookGridStyles>
        {books.map((book) => {
          const {
            id,
            title,
            ratingCount,
            link,
            imageUrl,
            avgRating,
            authors,
          } = book.book;
          const rating = Math.round(avgRating._text);
          return (
            <SingleBookStyles key={id._text}>
              <img src={imageUrl._text} alt={title._text} />
              <a href={link._text} target='_blank' rel='noreferrer'>
                <h3>{title._text}</h3>
              </a>
              <h4>
                -
                {' '}
                {authors.author.name._text}
              </h4>
              <p>
                {'⭐'.repeat(rating)}
                <span style={{ filter: 'grayscale(100%)' }}>
                  {'⭐'.repeat(5 - rating)}
                </span>
                <span>
                  (
                  {ratingCount._text}
                  )
                </span>
              </p>
            </SingleBookStyles>
          );
        })}
      </BookGridStyles>
    </>
  );
};

export default BooksPage;

export const query = graphql`
  query BookQuery {
    books: allBook {
      nodes {
        book {
          id {
            _text
          }
          title: title_without_series {
            _text
          }
          ratingCount: ratings_count {
            _text
          }
          avgRating: average_rating {
            _text
          }
          link {
            _text
          }
          imageUrl: image_url {
            _text
          }
          authors {
            author {
              name {
                _text
              }
            }
          }
        }
      }
    }
  }
`;
