import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// internal data
import Header from "./header"
import Footer from "./footer"
import Navbar from './navbar'

// svg files

// style
import "../styles/main.scss"


const Layout = ({ children, props }) => (
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
      <div id="layout-container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div id="layout-content">
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
