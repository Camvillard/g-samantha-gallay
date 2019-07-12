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
      <footer className={ window.innerWidth > 992 ? "desktop-footer" : "mobile-footer"}>
      <p className="footer-infos accent-text text-italic">
        Samantha Gallay  <br/> 78, avenue Carnot  <br/> 33200 BORDEAUX
      </p>
      <div className="footer-meta">
        <ul>
          <li className="inline-list"><a href="#">politique de confidentialité</a></li>
          ●
          <li className="inline-list"><a href="#">mentions légales</a></li>
        </ul>
        <p>© {new Date().getFullYear()} {data.site.siteMetadata.title} <br/>
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





