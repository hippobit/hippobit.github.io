import React from "react"
import { Nav, Navbar, Row, Container, Col } from "react-bootstrap"

const footer = () => (
  <Container fluid className="bg-dark">
    <Row>
      <Col>
        <small className="text-light">
          © {new Date().getFullYear()} Hippo Bit. All rights reserved.
        </small>
      </Col>
      <Col>fb</Col>
    </Row>
  </Container>
)

export default footer
