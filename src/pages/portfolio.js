import React from "react"
import Helmet from "react-helmet"

import { graphql } from "gatsby"
import styled from "styled-components"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"
import PortfolioItem from "../components/PortfolioItem/PortfolioItem"

export default ({ data, location }) => {
  const { portfolioPageContent } = data.dataJson

  const portfolioItems = data.allPortfolioJson.edges.map(({ node }, index) => (
    <PortfolioItem key={index} content={node} id={index} />
  ))

  const PortfolioList = styled.div`
    padding: 20% 0;
    @media (min-width: 768px) {
      padding: 100px 0;
    }
    @media (min-width: 992px) {
      padding-top: 75px;
    }
  `

  return (
    <Layout location={location}>
      <Helmet>
        <title>Portfolio Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
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
          <div className="container">
            <PortfolioList>{portfolioItems}</PortfolioList>
          </div>
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
    allPortfolioJson {
      edges {
        node {
          slug
          thumbnail
          title
        }
      }
    }
  }
`
