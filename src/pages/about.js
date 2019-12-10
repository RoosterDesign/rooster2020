import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <SEO
      title="About Page1"
      description="This is the about page description!"
    />
    <Header headerText="About Page" />
    <h1>About {data.site.siteMetadata.title}</h1>
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
