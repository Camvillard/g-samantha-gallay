// external libraries
import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { FaBars } from 'react-icons/fa';

// internal data
import { toggleMenu } from "../utilities/navbar";

// svg files
// import Logo from "../images/samanthagallay-logo_blanc.svg";

// style

const visibleLinks = ["à propos", "expertise", "honoraires", "contact", "nouvelles"];
let navbarLinks = [];
let lastItem = [];
let orderedLinks;


// creating the component for mobile menus
const MobileMenu = (props) => {
  return(
    <div id="navbar">
      <div id="toggle-menu"><FaBars /></div>
      <ul id="main-menu" className="mobile-menu hidden">
        <li><Link to="/a-propos">à propos</Link></li>
        <li><Link to="/expertise">expertise</Link></li>
        <li><Link to="/honoraires">honoraires</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/nouvelles">nouvelles</Link></li>
      </ul>
    </div>
  )
}

// creating the component for desktop menus
const DesktopMenu = (props) => {
  return(
    <ul id="main-menu" className="desktop-menu">
      <li><Link to="/a-propos">à propos</Link></li>
      <li><Link to="/expertise">expertise</Link></li>
      <li><Link to="/honoraires">honoraires</Link></li>
      <li><Link to="/contact">contact</Link></li>
      <li><Link to="/nouvelles">nouvelles</Link></li>
    </ul>
  )
}

class Navbar extends React.Component {


  componentDidMount() {
    // use the mobile toggle menu only for small screens
    if (window.innerWidth < 992) {
      toggleMenu();
    }
  }

  render() {
    // choose wich component to render depending on the size of the screen
    if (window.innerWidth > 992) {
      return <DesktopMenu data={orderedLinks}/>
    }
    return <MobileMenu data={orderedLinks}/>
  }

}

export default (props) => {
  return (<StaticQuery
    query={graphql`
      query { allWordpressPage {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `
    }

    render={(data) => {
      return (
        <Navbar data={data} />
      )}
    }
  />)
}
