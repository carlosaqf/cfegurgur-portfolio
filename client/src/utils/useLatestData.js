import { useEffect, useState } from 'react';

// added for formatting gql queries
const gql = String.raw;

export default function useLatestData() {
//   const [books, setBooks] = useState();
  const [featuredProjects, setFeaturedProjects] = useState();
  const [featuredBlogPosts, setFeaturedBlogPosts] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
			query {
				SiteSettings(id:"frontpage") {
    				name
    				featuredProjects{
						  _id
      				name
						  slug{
  							current
						  }
              image{
                asset{
                  url
                  metadata{
                    lqip
                  }
                }
              }
    				}
    				featuredBlogPosts{
						  _id
              name
						  slug{
							  current
						  }
              image{
                asset{
                  url
                  metadata{
                    lqip
                  }
                }
              }
    				}
  				}
			}
		`,
      }),
    }).then((res) => res.json()).then((res) => {
      // TODO: check for errorss
      console.log(res.data);
      setFeaturedBlogPosts(res.data.SiteSettings.featuredBlogPosts);
      setFeaturedProjects(res.data.SiteSettings.featuredProjects);
    });
  }, []);

  return {
    featuredBlogPosts,
    featuredProjects,
  };
}
