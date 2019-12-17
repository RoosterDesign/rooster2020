import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import ArticlesBlock from "../components/ArticlesBlock/ArticlesBlock"
import ClientLogosBlock from "../components/ClientLogosBlock/ClientLogosBlock"

export default ({ data }) => {
  const {
    clientLogos,
    serviceOverview,
    skillsOverview,
  } = data.allDataJson.nodes[0]

  return (
    <Layout location="home">
      <ArticlesBlock content={serviceOverview} />
      <ClientLogosBlock content={clientLogos} />
      <ArticlesBlock content={skillsOverview} />
    </Layout>
  )
}

export const query = graphql`
  query homeContentQuery {
    allDataJson {
      nodes {
        clientLogos {
          title
          intro
          logos {
            src
            name
          }
        }
        serviceOverview {
          title
          intro
          articles {
            title
            img
            body
          }
        }
        skillsOverview {
          title
          intro
          articles {
            title
            img
            body
          }
        }
      }
    }
  }
`
