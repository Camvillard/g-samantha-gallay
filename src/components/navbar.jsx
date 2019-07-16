// external libraries
import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { FaBars } from 'react-icons/fa';

// internal data
import { toggleMenu } from "../utilities/navbar";

// svg files
// import Logo from "../images/samanthagallay-logo_blanc.svg";

// style

// const visibleLinks = ["à propos", "expertise", "honoraires", "contact", "nouvelles"];
// let navbarLinks = [];
// let lastItem = [];
// let orderedLinks;


// creating the component for mobile menus
const MobileMenu = (props) => {
  return(
    <div id="navbar">
      <div id="toggle-menu"><FaBars /></div>
      <ul id="main-menu" className="mobile-menu hidden">
        <li><Link to="/#presentation">à propos</Link></li>
        <li><Link to="/#expertise">domaines d'intervention</Link></li>
        <li><Link to="/#honoraires">honoraires</Link></li>
        <li><Link to="/#contact">contact</Link></li>
        <li><Link to="/nouvelles">nouvelles</Link></li>
      </ul>
    </div>
  )
}

// creating the component for desktop menus
const DesktopMenu = (props) => {
  return(
    <div id="main-menu">
    <Link to="/"><img src="https://contenu.gallay-avocat.fr/wp-content/uploads/2019/07/logo_blanc.png" alt=""/></Link>

      <ul className="desktop-menu">
        <li><Link to="/#presentation">à propos</Link></li>
        <li><Link to="/#expertise">domaines d'intervention</Link></li>
        <li><Link to="/#honoraires">honoraires</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/nouvelles">nouvelles</Link></li>
      </ul>
    </div>
  )
}

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mobileNavbar: true
    }
  }


  componentDidMount() {
    // use the mobile toggle menu only for small screens
    if (window.innerWidth > 992) {
      this.setState({mobileNavbar: false})
    }
      toggleMenu();
  }

  render() {
    // choose wich component to render depending on the size of the screen
    if (this.state.mobileNavbar) {
      return <MobileMenu />
    }
      return <DesktopMenu />
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
