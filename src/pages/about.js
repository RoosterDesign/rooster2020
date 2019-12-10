import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo/seo"
import Header from "../components/Header/header"
import Layout from "../components/Layout/layout"

export default ({ data }) => (
  <Layout>
    <SEO
      title="About Page1"
      description="This is the about page description!"
    />
    <h1>About</h1>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
