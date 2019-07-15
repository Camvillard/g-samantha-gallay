// external libraries
import React from "react";
import { graphql, Link } from "gatsby";

// internal data
import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from '../components/footer';
import Navbar from "../components/navbar";
import PostCard from "../components/post-card";


// style
import '../styles/main.scss';


class Nouvelles extends React.Component {
  render(){
    return(
      <React.Fragment>
      <SEO title="Articles" keywords={[`Samantha Gallay`, `avocat`, `Bordeaux`, `droit de la famille`, `droit des personnes`, `droit des mineurs`]} />
        <Layout>
          <div id="page-articles" className="main-content">

          <div className="container">

            <h2 className="page-title">le blog</h2>
            <p className="tagline">prochainement</p>

          </div>


          </div>
        </Layout>
      </React.Fragment>
    )
  }
}


export const query = graphql`
  {
    allWordpressPost(sort: {fields: [date], order: [DESC] } ) {
        edges {
          node {
            slug
            id
            title
            date
            excerpt
            categories {
              id
              name
              slug
            }
          }
        }
      }
    }
`


export default Nouvelles;
