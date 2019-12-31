import React from "react"
import { graphql } from "gatsby"

import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"

export default ({ data }) => {
  const { portfolioPageContent } = data.allDataJson.nodes[0]

  return (
    <Layout>
      <Masthead>
        <MastheadTitle mastheadTitle={portfolioPageContent.mastheadTitle} />
        <MastheadBody>
          <p
            dangerouslySetInnerHTML={{
              __html: portfolioPageContent.mastheadBody,
            }}
          ></p>
        </MastheadBody>
      </Masthead>
      <PageContent>page content...</PageContent>
    </Layout>
  )
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
