import React from "react"
import { graphql } from "gatsby"

import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"
import PortfolioItem from "../components/PortfolioItem/PortfolioItem"

export default ({ data }) => {
  const { portfolioPageContent } = data.dataJson

  const portfolioItems = portfolioPageContent.portfolio.map(
    ({ node }, index) => <PortfolioItem key={index} content={node} />
  )

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
      <PageContent>
        <div className="container">{portfolioItems}</div>
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query portfolioContentQuery {
    dataJson {
      portfolioPageContent {
        mastheadBody
        mastheadTitle
      }
      portfolio {
        slug
        thumbnail
        title
      }
    }
  }
`
