import React from "react"
import { Row, Container, Col } from "react-bootstrap"
import fbIcon from "../images/facebook.svg"
import footerCss from "./footer.module.css"

const footer = () => (
  <Container fluid className={"bg-dark " + footerCss.container}>
    < Row >
      <Col>
        <small className="text-light">
          © {new Date().getFullYear()} Hippo Bit. All rights reserved.
        </small>
      </Col>
      <Col className="d-flex justify-content-end" >
        <a href="https://www.facebook.com/hippobit">
          <img
            className={footerCss.icon}
            src={fbIcon}
            alt="facebook"
          />
        </a>
      </Col>
    </Row >
  </Container >
)

export default footer
