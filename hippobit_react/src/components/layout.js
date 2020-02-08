/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import { Header } from "./header"
import Footer from "./footer"

const Layout = ({ children, pageTitle, navItems }) => {
  return (
    <>
      <Header pageTitle={pageTitle} navItems={navItems} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1240,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
