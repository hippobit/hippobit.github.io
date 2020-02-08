import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { NavData } from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import imgSplash from "../images/splash.jpg"

const navItems = [
  new NavData("About", "/#about"),
  new NavData("Solution", "/#solution"),
  new NavData("Apps", "/#apps"),
  new NavData("Facebook", "https://www.facebook.com/hippobit"),
]

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout pageTitle={data.site.siteMetadata.title} navItems={navItems}>
      <SEO title="Home" />
      <Container fluid>
        <Row id="splash" className="d-flex  justify-content-md-center">
          <Col lg="6" md="12" style={{ "marginTop": `auto`, "marginBottom": `auto` }}>
            <h2>Tech that works for you</h2>
            <p className="text-muted">
              We are a startup company offering unique solutions for mobile
              apps (Android), customized electronics, and more.
            </p>
          </Col>
          <Col lg="5" md="12">
            <img src={imgSplash} alt="Welcome" />
          </Col>
        </Row>
        <Row id="about" className="d-flex  justify-content-md-center">
          <Col lg={{ span: 4, offset: 2 }}>
            <h3 >About us</h3>
          </Col>
          <Col lg="11" offset="1">
            <p>
              Hippo Bit is a leading provider of cutting-edge technology
              fusion of Android mobile apps and customized hardware creation,
               offering unique mobile solutions for all types of IoT requirements.
            </p>
            <p>
              Founded by enthusiasts who started by scribbling their ideas on a
              piece of paper, today we offer smart, innovative services to clients
               worldwide. We built our solutions by closely listening to our clients
               and going above and beyond to fully customize our product according
               to the specific needs by our clients. No products are the same, all
               products are perfect! Get in touch today to learn more about the Hippo
               Bit story.
            </p>
          </Col>
        </Row>
      </Container>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/reloadlogbook">Go to page 2</Link>
    </Layout >
  )
}

export default IndexPage
