// external librairies
import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { FaHeart } from "react-icons/fa";

// internal data
// svg files
// style

class Footer extends React.Component {

  render() {
    const data = this.props.data;
    return(
      <footer className="main-footer">

        <p className="footer-infos accent-text text-italic">
          Samantha Gallay  <br/>
          101, Cours d'Albret <br/>
          33000 BORDEAUX
        </p>
        <div className="footer-meta">
          <p className="copyrights">
            © {new Date().getFullYear()} {data.site.siteMetadata.title}
          </p>
          <ul>
            <li className="inline-list"><a href="#">politique de confidentialité</a></li>
            ●
            <li className="inline-list"><a href="#">mentions légales</a></li>
          </ul>
          <p className="web-credits">
            direction artistique & développement web par
            <a href="https://www.cdltbisou.com"> <strong>cdlt</strong>bisou</a>
          </p>

        </div>
       </footer>
    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Footer data={data}/>
    )}
  />
)





