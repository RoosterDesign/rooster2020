import React from "react"
import { graphql } from "gatsby"

import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"
import PortfolioItem from "../components/PortfolioThumbnailsBlock/PortfolioItem/PortfolioItem"

export default ({ data }) => {
  const portfolioItems = data.portfolioJson.map((node, index) => (
    <PortfolioItem key={index} content={node} id={index} />
  ))

  const { portfolioPageContent } = data.dataJson
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
        <section>
          <div className="container">{portfolioItems}</div>
        </section>
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
    }
    portfolioJson {
      slug
      thumbnail
      title
    }
  }
`
