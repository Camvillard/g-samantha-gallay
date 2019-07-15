// external librairies
import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// internal data
import Navbar from './navbar'

// svg files
import Logo from "../images/samanthagallay-logo_blanc.svg";


// style
import "../styles/components/_logo.scss"

const Header = ({siteTitle, path}) => {
  return (
    <header id="site-header" >
       <Navbar />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
