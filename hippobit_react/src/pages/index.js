import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { NavData } from "../components/header"


const navItems = [
  new NavData("About", "/#about"),
  new NavData("Solution", "/#solution"),
  new NavData("Apps", "/#apps"),
  new NavData("Facebook", "https://www.facebook.com/hippobit"),
]

const IndexPage = () => (
  <Layout navItems={navItems}>
    <SEO title="Home" />
    <h1>Tech that works for you</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
