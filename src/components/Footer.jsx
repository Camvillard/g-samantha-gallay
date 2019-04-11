// external stuff
import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { FaHeart } from "react-icons/fa";


class Footer extends React.Component {

  render() {
    const data = this.props.data;
    return(
      <footer className={ window.innerWidth > 992 ? "desktop-footer" : "mobile-footer"}>
        <p>© {new Date().getFullYear()} {data.site.siteMetadata.title} <br/>
          fabriqué avec <FaHeart /> par
          <a href="https://www.cdltbisou.com"> <strong>cdlt</strong>bisou</a>
        </p>
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





