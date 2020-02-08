import PropTypes from "prop-types";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.png";

class NavData {
  constructor(linkName, link) {
    this.linkName = linkName;
    this.link = link;
  }
}

const Header = ({ pageTitle, navItems }) => (
  < Navbar expand="lg" bg="dark" variant="dark" >
    <img
      src={logo}
      alt="Logo"
      className="d-inline-block align-middle logo-image"
    />
    <Navbar.Brand href="/">{pageTitle}</Navbar.Brand>
    {renderNav(navItems)}
  </Navbar >
)


function renderNav(navItems) {
  if (!Array.isArray(navItems) || !navItems.length) {
    return ("");
  }
  return (
    <>
      {console.log(navItems)}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav justify>
          {
            navItems.map(
              (navData) => (
                <Nav.Link href={navData.link} key={navData.link}>{navData.linkName}</Nav.Link>)
            )
          }
        </Nav>
      </Navbar.Collapse>
    </>)
}

Header.propTypes = {
  pageTitle: PropTypes.string,
  navItems: PropTypes.array,
}

Header.defaultProps = {
  pageTitle: ``,
  navItems: [],
}

export { Header, NavData };

