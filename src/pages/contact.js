import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"

export default ({ data }) => {
  const { contactPageContent } = data.allDataJson.nodes[0]

  return <Layout mastheadContent={contactPageContent}></Layout>
}

export const query = graphql`
  query contactContentQuery {
    allDataJson {
      nodes {
        contactPageContent {
          mastheadTitle
          mastheadBody
        }
      }
    }
  }
`
