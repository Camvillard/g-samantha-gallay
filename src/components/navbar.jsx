// external libraries
import React from "react";
import { graphql, StaticQuery } from "gatsby";
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
    // check if the created node cmatches the 'nouvelles' link
    if (visibleLinks.includes(link.node.title) && link.node.title !== "nouvelles") {
      // if not, then great, push into the array
      navbarLinks.push(link)
      // if it is, set it aside
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
    // join the two arrays, keeping the lastItem one at the end
    // we want the link 'nouvelles' to be the last one no matter
    // the order of creation
    orderedLinks = navbarLinks.concat(lastItem)
    return orderedLinks
  }

  componentDidMount() {
    // use the mobile toggle menu only for small screens
    if (window.innerWidth < 992) {
      toggleMenu();
    }
  }

  render() {
    // choose wich component to render depending on the siz of the screen
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
