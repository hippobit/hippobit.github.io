import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import { NavData } from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
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
        <Row>
          <Col style={{ margin: `auto` }}>
            <h2>Tech that works for you</h2>
            <p className="text-muted">
              We are a startup company offering unique solutions for mobile
              apps (Android), customized electronics, and more.
            </p>
          </Col>
          <Col>
            <img src={imgSplash} alt="Welcome" />
          </Col>
        </Row>
      </Container>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/reloadlogbook">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
