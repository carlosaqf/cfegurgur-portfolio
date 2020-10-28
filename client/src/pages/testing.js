// import { graphql } from 'gatsby';
import React from 'react';
import {
  TestCard,
} from '../components/TestComponents';

const TestingPage = () => (
// const projects = data.projects.nodes;  (
  <>
    <h1>Testing Page!</h1>
    <TestCard />
    {/* <TestCardTwo project={projects[0]} /> */}
  </>
);
export default TestingPage;

// export const query = graphql`
//   query TestQuery($stackRegex: String){
//     projects: allSanityProject(
//       filter: { stack: { elemMatch: { name: { regex: $stackRegex } } } }
//     ) {
//       nodes {
//         name
//         id
//         url
//         repo
//         description
//         slug {
//           current
//         }
//         stack {
//           id
//           name
//         }
//         image {
//           asset {
//             fluid(maxWidth: 1000){
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
