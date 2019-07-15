// external libraries
import React from "react";
import { graphql } from "gatsby";

// internal data
// import Header from "../components/Header";
import SEO from "../components/seo";
import Footer from '../components/footer';
import Navbar from "../components/navbar";
// import Logo from "../images/samanthagallay-logo_blanc.svg";
// import LogoBlanc from "../components/logo-blanc";

// style
import '../styles/main.scss';


const IndexPage = ({data}) => {
  return (
    <div id="homepage">
      <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Navbar />

      <div className="container">

        <div id="homepage-banner">

          <img src="https://contenu.gallay-avocat.fr/wp-content/uploads/2019/07/logo_blanc-full.png" alt="logo samantha gallay"/>
          <p className="banner-adresse">
            101 cours d'Albret  <br/>
            33000 BORDEAUX
          </p>

          <p className="banner-contact">
            Tel : 05.56.01.18.00  <br/>
            Fax : 05.56.01.18.95
          </p>

        </div>
        {/* end of #homepage-banner */}


        <div id="presentation" className="homepage-section">

          <h3 className="section-title"><span>à propos</span></h3>

          <div className="presentation-content">

            <div className="left-column">
              <img src="https://contenu.gallay-avocat.fr/wp-content/uploads/2019/04/Sam_3_nb.jpg" alt="samantha gallay avocat"/>
            </div>

            <div className="right-column">
              <h1><span>Samantha Gallay</span></h1>
              <p dangerouslySetInnerHTML= {{ __html: data.wordpressPage.content}}/>
            </div>

          </div>

        </div>
        {/* end of #homepage-banner */}
      </div>

      {/* end of .container */}

      <div id="expertise" className="homepage-section">

        <div className="container">

          <h3 className="section-title"><span>Domaines d'intervention</span></h3>

          <div className="expertises-container">

            <div className="expertise-field">

              <h3>droit de la famille,  des personnes et de leur patrimoine</h3>
              <ul>
                <li>Mariage, Pacs, concubinage</li>
                <li>Etat civil, changement de nom et prénom, adoption</li>
                <li>Procédures de divorce et séparation (concubinage ou PACS)</li>
                <li>Autorité parentale, droit de visite et d’hébergement</li>
                <li>Pension alimentaire, prestation compensatoire</li>
                <li>Responsabilité civile : dommages-intérêts, sinistres, indemnisation</li>
                <li>Sorties d’indivision</li>
                <li>Successions (partages amiables et judiciaires)</li>
              </ul>

            </div>

            <div className="expertise-field">
              <h3>droit des mineurs</h3>
              <ul>
                <li>Assistance éducative</li>
                <li>Volet pénal (gardes à vue, procédures pénales)</li>
              </ul>
            </div>
          </div>

        </div>
        {/* end of .container */}

      </div>
      {/* end of #expertise */}

      <div className="container">

        <div id="honoraires" className="homepage-section">

          <h3 className="section-title"><span>Honoraires</span></h3>
          <p className="tagline">Extraits du Règlement intérieur national des avocats</p>

          <div className="honoraire-content">

            <div className="column two-columns">

              <h6>Article 11.1 Information du client</h6>
              <p className="accent-text">
              « L’avocat informe son client, dès sa saisine, des modalités de détermination des honoraires et l’informe régulièrement de l’évolution de leur montant. L’avocat informe également son client de l’ensemble des frais, débours et émoluments qu’il pourrait exposer. »
              </p>

              <h6>Article 11.2 Convention d’honoraires</h6>
              <p className="accent-text">
              « Sauf en cas d’urgence ou de force majeure ou lorsqu’il intervient au titre de l’aide juridictionnelle totale ou de la troisième partie de la loi n° 91-647 du 10 juillet 1991 relative à l’aide juridique, l’avocat conclut par écrit avec son client une convention d’honoraires, qui précise, notamment, le montant ou le mode de détermination des honoraires couvrant les diligences prévisibles, ainsi que les divers frais et débours envisagés. »
              </p>

              <h6>Détermination des honoraires</h6>
              <p className="accent-text">
              Les honoraires sont fixés selon les usages, en fonction de la situation de fortune du client, de la difficulté de l’affaire, des frais exposés par l’avocat, de sa notoriété et des diligences de celui-ci. L’avocat chargé d’un dossier peut demander des honoraires à son client même si ce dossier lui est retiré avant sa conclusion, dans la mesure du travail accompli.
              </p>

            </div>
            {/* end of .column.two-column */}


            <div className="column two-columns">

              <h6>Eléments de la rémunération</h6>
              <p className="accent-text">
              La rémunération de l’avocat est fonction, notamment, de chacun des éléments suivants conformément aux usages :
                <li>le temps consacré à l’affaire</li>
                <li>le travail de recherche</li>
                <li>la nature et la difficulté de l’affaire</li>
                <li>l’importance des intérêts en cause</li>
                <li>l’incidence des frais et charges du cabinet auquel il appartient</li>
                <li>sa notoriété, ses titres, son ancienneté, son expérience et la spécialisation dont il est titulaire,</li>
                <li>les avantages et le résultat obtenus au profit du client par son travail, ainsi que le service rendu à celui-ci,</li>
                <li>la situation de fortune du client.</li>
              </p>

              <h6>Article 11.6 Provision sur frais et honoraires</h6>
              <p className="accent-text">
              « L’avocat qui accepte la charge d’un dossier peut demander à son client le versement préalable d’une provision à valoir sur ses frais et honoraires.

              Cette provision ne peut aller au-delà d’une estimation raisonnable des honoraires et des débours probables entraînés par le dossier.

              A défaut de paiement de la provision demandée, l’avocat peut renoncer à s’occuper de l’affaire ou s’en retirer dans les conditions prévues à l’article 13 du décret du 12 juillet 2005. Il fournit à son client toute information nécessaire à cet effet. »
              </p>

            </div>
            {/* end of .column.three-column */}

          </div>
        {/* end of .honoraires-content */}

        </div>
        {/* end of #honoraires */}

      </div>
      {/* end of .container */}


      <div id="contact" className="homepage-section">

        <div className="container">

          <h3 className="section-title"><span>Contact</span></h3>

          <div className="columns">

            <div className="two-columns">

              <p className="tagline">
              Pour tout renseignement complèmentaire ou prise de rendez-vous, n’hésitez pas  à nous contacter.
              </p>

              <p className="adresse">
                Samantha Gallay  <br/>
                101 cours d'Albret  <br/>
                33000 Bordeaux
              </p>

            </div>
            {/* end of .two-columns */}

            <div className="two-columns white-column">


            <form
              name="contact-form"
              method="post"
              action="/thanks"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="form-stroked form-stroked-aqua"
            >
                <input hidden className="hidden" name="bot-field" />
                <input type="text" name="nom" placeholder="nom :"/>
                <input type="email" name="adresse mail" placeholder="adresse mail :"/>
                <input type="text" name="objet du message" placeholder="objet :"/>
                <textarea rows="8" name="message" placeholder="message"></textarea>
                <div data-netlify-recaptcha />
                <button className="btn-aqua" type="submit"><span>envoyer</span></button>

            </form>

            test

              <form action="https://formspree.io/ca.villard@gmail.com" method="POST" className="form-stroked form-stroked-aqua">

                <input type="hidden" name="_next" value="https://www.gallay-avocat.fr"/>
                <input type="text" name="nom" placeholder="nom :"/>
                <input type="email" name="adresse mail" placeholder="adresse mail :"/>
                <input type="text" name="objet du message" placeholder="objet :"/>
                <textarea rows="8" name="message" placeholder="message"></textarea>
                <button className="btn-aqua" type="submit"><span>envoyer</span></button>

              </form>

            </div>
            {/* end of .two-columns */}

          </div>
          {/* end of .columns */}


        </div>
        {/* end of .container */}

      </div>
      {/* end of #contact */}


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
