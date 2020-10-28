import styled from 'styled-components';

export const HomePageGrid = styled.div`
	display: grid;
	gap: 2rem;
	--columns: 1;
	grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
	
	@media (max-width: 1000px){
		--columns: 1;
  }
  
  /* SECTION TITLE STYLES */
  h2 {
    text-transform: uppercase;
    text-align: left;
    font-weight: 300;
    letter-spacing: 0.5rem;
    color: var(--black);
    margin-bottom: 2rem;
    border-left: 0.2rem solid var(--yellow);
    padding-left: 1rem;
  }

  /* SECTION LINK STYLES */
  .homepage-grid-btn {
    margin: 2rem auto;
    a {
      text-decoration: none;
      background: var(--yellow);
      color: var(--black);
      border: 0;
      padding: 1rem 2rem;
      border-radius: 1rem;
      cursor: pointer;
      --shadow: 2px;
      box-shadow: var(--shadow) var(--shadow) 0 var(--grey);
      text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
      transition: all 0.2s;
      &:hover {
        --shadow: 4px;
      }
    }
  }
`;

export const HomePageHeroGrid = styled.div`

  display: flex;
  flex-direction: column;

  h4 {
    text-transform: uppercase;
    font-weight: 300;
  }

  h1 {
    text-transform: uppercase;
    font-weight: 700;
  }

  p {
    margin-top: 5rem;
    margin-bottom: 10rem;
    max-width: 45ch;
    align-self: center;
  }

  img {
    align-self: center;
  }
  
  @media (min-width: 1100px){  
    position: relative;
    margin-top: 10rem;
    text-align: left;
    margin-bottom: 25rem;

    img {
      position: absolute;
      right: 0;
      top: -100px;
    }

    p {
      align-self: flex-start;
    }
  } 

`;

export const ItemsGrid = styled.div`
	display: grid;
	gap: 2rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 7rem;
  background: rgba(0,0,0,0.04);
  padding: 2rem;
  border-radius: 1rem;

  .homepage-grid-btn {
    grid-column: span 2;
    margin: 2rem auto;
    text-decoration: none;
    background: var(--yellow);
    color: var(--black);
    border: 0;
    padding: 1rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
    --shadow: 2px;
    box-shadow: var(--shadow) var(--shadow) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --shadow: 4px;
    }

  }
  @media (max-width: 800px){
    grid-template-columns: 1fr;
    .homepage-grid-btn {
      grid-column: span 1;
    }
  }
`;

export const SingleItemStyles = styled.div`
  text-align: center;
  position: relative;
  
  img {
    height: auto;
    font-size: 0;
  }
  
  p {
    margin: 2rem;
    font-size: 2rem;
    font-size: clamp(12px, 5vw, 20px);
  }

  .mark {
    display: inline;
  }

  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }

  img.loading {
    --shine: white;
    --background: var(--grey);

    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );

    animation: shine 1000ms infinite linear;
  }
`;
