import React from "react"
import Helmet from "react-helmet"

import { graphql } from "gatsby"

import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"

export default ({ data }) => {
  const { contactPageContent } = data.allDataJson.nodes[0]

  return (
    <Layout>
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Masthead>
        <MastheadTitle mastheadTitle={contactPageContent.mastheadTitle} />
        <MastheadBody>
          <p
            dangerouslySetInnerHTML={{
              __html: contactPageContent.mastheadBody,
            }}
          ></p>
        </MastheadBody>
      </Masthead>
      <PageContent>page content...</PageContent>
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
