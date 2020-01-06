// external libraries
import React from "react";
import { graphql, Link } from "gatsby";

// internal data
// import Header from "../components/Header";
import SEO from "../components/seo";
// import Footer from '../components/footer';
// import Navbar from "../components/navbar";
// import PostCard from "../components/post-card";


// style
import '../styles/main.scss';

class Merci extends React.Component {
  render(){
    return(
      <React.Fragment>
        <SEO title="Merci pour votre message" />
        <div id="page-merci">

        <h1>Merci !</h1>
        <p>Nous vous répondrons sous peu.</p>
        <Link to ="/" className="btn-white">retour au site</Link>

        </div>
      </React.Fragment>
    )
  }
}


export default Merci;
