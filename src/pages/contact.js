import React from "react"
import { graphql } from "gatsby"

import Masthead from "../components/Masthead/Masthead"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"

export default ({ data }) => {
  const { contactPageContent } = data.allDataJson.nodes[0]

  return (
    <Layout>
      <Masthead>
        <h1>contact page title...</h1>
        <p>page body or icons.....</p>
      </Masthead>
      <PageContent>contact page...</PageContent>
    </Layout>
  )
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
