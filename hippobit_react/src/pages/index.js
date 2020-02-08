import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import { NavData } from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
      <h1>Tech that works for you</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/reloadlogbook">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
