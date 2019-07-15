// external libraries
import React from "react";
import { graphql, Link } from "gatsby";

// internal data
import Layout from "../components/layout";
// import SEO from "../components/seo";
// import Footer from '../components/footer';
// import Navbar from "../components/navbar";
// import PostCard from "../components/post-card";


// style
import '../styles/main.scss';


class Contact extends React.Component {
  render(){
    return(
      <div id="body-page-contact">

        <Layout>

          <div id="page-contact">

            <div className="columns">

              <div className="contact-header">

                <h2>contact</h2>
                <p className="tagline">
                  pour tout renseignement complémentaire  ou prise de rendez-vous, n’hésitez pas à nous contacter.
                </p>
                <ul className="contact-infos">
                <li>101 cours d'Albret </li>
                <li>33000 BORDEAUX</li>
                <li className="spacer"></li>
                <li>Tel : 05.56.01.18.00 </li>
                <li>Fax : 05.56.01.18.95</li>

                </ul>

              </div>

              <div className="contact-form-container">

                <form
                  name="contact-form"
                  method="post"
                  action="/merci"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="form-stroked form-stroked-aqua"
                >
                    <input hidden className="hidden" name="bot-field" />
                    <input type="text" name="name" placeholder="nom :"/>
                    <input type="email" name="email" placeholder="adresse mail :"/>
                    <input type="text" name="subject" placeholder="objet :"/>
                    <textarea rows="8" name="message" placeholder="message"></textarea>
                    <div data-netlify-recaptcha />
                    <button className="btn-aqua" type="submit"><span>envoyer</span></button>

                </form>

              </div>

            </div>

          </div>
        </Layout>
      </div>
    )
  }
}


export default Contact;
