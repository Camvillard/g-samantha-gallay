// external librairies
import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// internal data


// svg files
import Logo from "../images/samanthagallay-logo_blanc.svg";


// style
import "../styles/components/_logo.scss"

const Header = ({siteTitle, path}) => {
  return (
    <header id="site-header" >
    <Logo id="samanthagallay-logo"/>
      <div>
        {path !== "homepage" ? <h1><Link to="/">{siteTitle}</Link></h1> : <h1>{siteTitle}</h1> }
      </div>
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
