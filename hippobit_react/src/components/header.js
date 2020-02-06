import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import LogoImage from "../components/logoImage"

const Header = ({ siteTitle }) => (
  <Container
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <Row>
      <Col sm={8}>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: `none`,
          }}
        >
          <LogoImage />
        </Link>
      </Col>
      <Col sm={4} style={{ padding: `1.5em` }}>
        menu
      </Col>
    </Row>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
