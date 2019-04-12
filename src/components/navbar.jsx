// external libraries
import React from "react";
import { graphql, StaticQuery } from "gatsby";

// internal data
// import Logo from "../images/samanthagallay-logo_blanc.svg";

import '../styles/main.scss';

const visibleLinks = ["à propos", "expertise", "honoraires", "contact", "nouvelles"];
let navbarLinks = [];

const MobileMenu = (props) => {
  return(
    <ul id="main-menu" className="mobile-menu" >
      <li>hamburger menu here</li>
    </ul>
  )
}

const DesktopMenu = (props) => {
  // console.log("prout",props)
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
    if (visibleLinks.includes(link.node.title)) {
      navbarLinks.push(link)
      console.log("this is the final navbar links array", navbarLinks)
    }
  }

  componentWillMount() {
    console.log("mounting the component", navbarLinks)
    const data = this.props.data.allWordpressPage.edges
    data.map( edge => {
      this.checkNavbarLink(edge)
      }
    )
  }

  // buildNavbarLink(links) {
  //   links.map( link => {
  //     return <li key={link.node.id}><a href={`${link.node.slug}`}>{link.node.title}</a></li>
  //   })
  // }

  render() {
    console.log("rendering", navbarLinks)
    if (window.innerWidth > 992) {
      return <DesktopMenu data={navbarLinks}/>
    }
    return <MobileMenu data={this.props.data}/>
  }

}

// export default Navbar;


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
