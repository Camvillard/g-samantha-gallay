// external libraries
import React from "react";
// import { graphql } from "gatsby";

// internal data
// import Logo from "../images/samanthagallay-logo_blanc.svg";

import '../styles/main.scss';

const links = ["à propos", "expertise", "honoraires", "contact", "nouvelles"]

const MobileMenu = () => {
  return(
    <ul id="main-menu" className="mobile-menu" >
      <li>hamburger menu here</li>
    </ul>
  )
}

const DesktopMenu = () => {
  return(
    <ul id="main-menu" className="desktop-menu">
      { links.map( (link, index) => <li key={`${index}`}>{link}</li>) }
    </ul>
  )
}

class Navbar extends React.Component {

  render() {
    if (window.innerWidth > 992) {
      return <DesktopMenu  />
    }
    return <MobileMenu />
  }

}

export default Navbar;
