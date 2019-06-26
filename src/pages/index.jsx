// external libraries
import React from "react";
import { graphql } from "gatsby";

// internal data
// import Header from "../components/Header";
import SEO from "../components/seo";
import Footer from '../components/footer';
import Navbar from "../components/navbar";
import Logo from "../images/samanthagallay-logo_blanc.svg";

// style
import '../styles/main.scss';


const IndexPage = ({data}) => {
  return (
    <div id="homepage">
      <SEO id="homepage" title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Navbar />
      <div className="main-content">

        <div id="presentation" className="homepage-section">
          <Logo id="samanthagallay-logo"/>
          <p id="homepage-text" dangerouslySetInnerHTML= {{ __html: data.wordpressPage.content}}/>
        </div>

        <div id="expertise" className="homepage-section">

          <h3 className="section-title">domaines d'intervention</h3>

          <div className="expertises-container">

            <div className="expertise-field">

              <h4>droit de la famille,  des personnes et de leur patrimoine</h4>
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
              <h4>droit des mineurs</h4>
              <ul>
                <li>Assistance éducative</li>
                <li>Volet pénal (gardes à vue, procédures pénales)</li>
              </ul>
            </div>
          </div>


        </div>
        {/* end of #expertise */}

        <div id="honoraires" className="homepage-section">

          <h3 className="section-title">honoraires</h3>
          <p className="tagline">Extraits du Règlement intérieur national des avocats</p>

          <div className="honoraire-content">

            <div className="column three-columns">

              <h6>Article 11.1 Information du client</h6>
              <p className="accent-text">
              « L’avocat informe son client, dès sa saisine, des modalités de détermination des honoraires et l’informe régulièrement de l’évolution de leur montant. L’avocat informe également son client de l’ensemble des frais, débours et émoluments qu’il pourrait exposer. »
              </p>

              <h6>Article 11.2 Convention d’honoraires</h6>
              <p className="accent-text">
              « Sauf en cas d’urgence ou de force majeure ou lorsqu’il intervient au titre de l’aide juridictionnelle totale ou de la troisième partie de la loi n° 91-647 du 10 juillet 1991 relative à l’aide juridique, l’avocat conclut par écrit avec son client une convention d’honoraires, qui précise, notamment, le montant ou le mode de détermination des honoraires couvrant les diligences prévisibles, ainsi que les divers frais et débours envisagés. »
              </p>

            </div>
            {/* end of .column.three-column */}

            <div className="column three-columns">

              <h6>Détermination des honoraires</h6>
              <p className="accent-text">
              Les honoraires sont fixés selon les usages, en fonction de la situation de fortune du client, de la difficulté de l’affaire, des frais exposés par l’avocat, de sa notoriété et des diligences de celui-ci. L’avocat chargé d’un dossier peut demander des honoraires à son client même si ce dossier lui est retiré avant sa conclusion, dans la mesure du travail accompli.
              </p>

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

            </div>
            {/* end of .column.three-column */}

            <div className="column three-columns">

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

        <div id="contact" className="homepage-section">

        <h3 className="section-title">Contact</h3>
        <p className="tagline">
        pour tout renseignement complèmentaire ou prise de rendez-vous, n’hésitez pas  à nous contacter.
        </p>

        <p className="addresse">
          <li>Samantha Gallay </li>
          <li>78, av Carnot </li>
          <li>33200 Bordeaux</li>
        </p>

        <form action="">

          <input type="text" placeholder="nom :"/>
          <input type="email" placeholder="adresse mail :"/>
          <input type="text" placeholder="objet :"/>
          <textarea rows="8" placeholder="message"></textarea>
          <button><span>envoyer</span></button>

        </form>



        </div>
        {/* end of #contact */}





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
