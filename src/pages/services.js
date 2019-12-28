import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"

export default ({ data }) => {
  const { servicesPageContent } = data.allDataJson.nodes[0]

  return <Layout mastheadContent={servicesPageContent}></Layout>
}

export const query = graphql`
  query servicesContentQuery {
    allDataJson {
      nodes {
        servicesPageContent {
          mastheadTitle
          mastheadBody
        }
      }
    }
  }
`
