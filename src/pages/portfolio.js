import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"

export default ({ data }) => {
  const { portfolioPageContent } = data.allDataJson.nodes[0]

  return <Layout mastheadContent={portfolioPageContent}></Layout>
}

export const query = graphql`
  query portfolioContentQuery {
    allDataJson {
      nodes {
        portfolioPageContent {
          mastheadTitle
          mastheadBody
        }
      }
    }
  }
`
