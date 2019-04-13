// external libraries
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { FaBars } from 'react-icons/fa';

// internal data
// import Logo from "../images/samanthagallay-logo_blanc.svg";
import { toggleMenu } from "../utilities/navbar";

import '../styles/main.scss';

const visibleLinks = ["à propos", "expertise", "honoraires", "contact", "nouvelles"];
let navbarLinks = [];
let lastItem = [];
let orderedLinks;


// creating the component for mobile menus
const MobileMenu = (props) => {
  return(
    <div>
      <div id="toggle-menu"><FaBars /></div>
      <ul id="main-menu" className="mobile-menu hidden">
        {props.data.map( link => {
          return <li key={link.node.id}><a href={`${link.node.slug}`}>{link.node.title}</a></li>
        })}
      </ul>
    </div>
  )
}

// creating the component for desktop menus
const DesktopMenu = (props) => {
  return(
    <ul id="main-menu" className="desktop-menu">
    { props.data.map( link => {
        return <li key={link.node.id}><a href={`${link.node.slug}`}>{link.node.title}</a></li>
      })
    }
    </ul>
  )
}

class Navbar extends React.Component {

  checkNavbarLink(link) {
    if (visibleLinks.includes(link.node.title) && link.node.title !== "nouvelles") {
      navbarLinks.push(link)
    } else if (link.node.title === "nouvelles") {
      lastItem.push(link)
    } else return
  }

  componentWillMount() {
    // console.log("mounting the component", navbarLinks)
    const data = this.props.data.allWordpressPage.edges
    data.map( edge => {
       return this.checkNavbarLink(edge)
      })
    orderedLinks = navbarLinks.concat(lastItem)
    return orderedLinks
  }

  componentDidMount() {
    toggleMenu();
  }

  render() {
    // console.log("rendering", orderedLinks)
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
