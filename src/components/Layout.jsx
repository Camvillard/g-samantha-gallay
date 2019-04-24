import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// internal data
import Header from "./header"
import Footer from "./footer"

// svg files

// style
import "../styles/main.scss"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
