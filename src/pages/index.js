import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import ArticlesBlock from "../components/ArticlesBlock/ArticlesBlock"
import ClientLogosBlock from "../components/ClientLogosBlock/ClientLogosBlock"

export default ({ data }) => {
  const {
    homePageContent,
    clientLogos,
    serviceOverview,
    whyChooseMe,
  } = data.allDataJson.nodes[0]

  return (
    <Layout location="isHomepage" mastheadContent={homePageContent}>
      <Helmet
        bodyAttributes={{
          class: "is-homepage",
        }}
      />
      <ArticlesBlock content={serviceOverview} />
      <ClientLogosBlock content={clientLogos} />
      <ArticlesBlock content={whyChooseMe} />
    </Layout>
  )
}

export const query = graphql`
  query homeContentQuery {
    allDataJson {
      nodes {
        homePageContent {
          mastheadTitle
          mastheadBody
        }
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
        whyChooseMe {
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
