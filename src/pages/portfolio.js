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

  // const portfolioItems = data.allPortfolioJson.edges.map(({ node }, index) => (
  //   <PortfolioItem key={index} content={node} id={index} />
  // ))

  const imageData = data.images.edges
  const datafromjson = data.allPortfolioJson.edges

  const portfolioItems = datafromjson.map(portfolioItem => {
    const imageIndex = imageData.findIndex(
      x => x.node.name === portfolioItem.node.slug
    )

    return (
      <PortfolioItem
        key={portfolioItem.node.slug}
        img={imageData[imageIndex].node.childImageSharp.fluid}
        slug={portfolioItem.node.slug}
        title={portfolioItem.node.title}
        synopsis={portfolioItem.node.synopsis}
      />
    )
  })

  const PortfolioList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: -26px;
    @media (min-width: 992px) {
      margin-top: 0;
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
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "portfolioImages" }
        relativeDirectory: { eq: "thumbs" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 580, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    allPortfolioJson {
      edges {
        node {
          slug
          title
          synopsis
        }
      }
    }
  }
`
