import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Row, Col, Container, Navbar, Nav } from "react-bootstrap"
import LogoImage from "../components/logoImage"

const Header = ({ pageTitle }) => (
  <Navbar expand="lg" bg="dark" variant="dark">
    <LogoImage />
    <Navbar.Brand href="/">{pageTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav justify>
        <Nav.Link href="/#about">About</Nav.Link>
        <Nav.Link href="/#solution">Solution</Nav.Link>
        <Nav.Link href="/#apps">Apps</Nav.Link>
        <Nav.Link href="https://www.facebook.com/hippobit">Facebook</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  pageTitle: PropTypes.string,
}

Header.defaultProps = {
  pageTitle: ``,
}

export default Header
