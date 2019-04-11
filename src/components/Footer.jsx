import React from 'react';

import { FaHeart } from "react-icons/fa";


const Footer = () => {
  return(
    <div>
     © {new Date().getFullYear()}, built with
     <FaHeart />
     {` `}
     <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  )
}

export default Footer;



// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `



  // <StaticQuery
  //   query={graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 300) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  // />
