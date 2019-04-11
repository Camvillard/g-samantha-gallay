// external libraries
import React from "react";
import { graphql } from "gatsby";

// internal data
// import Header from "../components/Header";
import SEO from "../components/Seo";
import Footer from '../components/Footer';
import Navbar from "../components/navbar";
import Logo from "../images/samanthagallay-logo_blanc.svg";

import '../styles/main.scss';


const IndexPage = ({data}) => {
  const linksArray = ["à propos", "expertise", "honoraires", "contact", "nouvelles"]
  return (
    <div id="homepage-container">
      <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Navbar links={linksArray}/>
      <div className="main-content">
        <Logo id="samanthagallay-logo"/>
        <p id="homepage-text" dangerouslySetInnerHTML= {{ __html: data.wordpressPage.content}}/>
      </div>
      <Footer />
    </div>
  )
}


export const query = graphql`
{
  wordpressPage (slug: {eq: "accueil"}) {
    slug
    content
  }
}
`


export default IndexPage
