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
        flag={portfolioItem.node.flag}
        synopsis={portfolioItem.node.synopsis}
      />
    )
  })

  const PortfolioList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `

  return (
    <Layout location={location}>
      <Helmet>
        <title>Rooster Design Portfolio</title>
        <meta
          name="description"
          content="Freelance Front End Developer and UI/UX Designer offering outsourcing and contracting services across Warwickshire and West Midlands."
        />
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
          flag
          synopsis
        }
      }
    }
  }
`
