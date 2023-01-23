import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"

export default ({ data }) => {
  const { title, description, url } = data.portfolioJson
  const imageData = data.images.edges

  const VisitWebsiteBtn = styled.a`
    background: #722be1;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 2rem;
    font-family: "HalisR-Book", "arial";
    height: 60px;
    line-height: 60px;
    margin: 20px 0 30px;
    padding: 0;
    text-align: center;
    text-decoration: none;
    width: 100%;
    @media (min-width: 768px) {
      position: absolute;
      right: 16px;
      top: -110px;
      width: 250px;
    }
    @media (min-width: 992px) {
      top: -120px;
    }
    @media (min-width: 1250px) {
      height: 70px;
      line-height: 70px;
      top: -130px;
    }
    &:hover {
      background: #5018a8;
      color: #fff;
    }
  `

  const PortfolioDetailImage = styled(Img)`
    border-radius: 5px;
    box-shadow: 0 0 40px 20px rgba(0, 0, 0, 0.2);
    display: block;
    height: auto;
    margin: 0 auto 16px;
    max-width: 100%;
    width: 100%;
    :last-of-type {
      margin-bottom: 32px;
    }
    @media (min-width: 768px) {
      margin-bottom: 40px;
      :last-of-type {
        margin-bottom: 50px;
      }
    }
    @media (min-width: 992px) {
      margin-bottom: 70px;
      :last-of-type {
        margin-bottom: 80px;
      }
    }
  `

  const PortfolioPageContent = styled.div`
    background: #fff;
    padding-top: 16px;
    padding-bottom: 40px;
    position: relative;
    z-index: 1;
    @media (min-width: 768px) {
      padding-top: 70px;
      padding-bottom: 50px;
    }
    @media (min-width: 992px) {
      padding-top: 80px;
      padding-bottom: 75px;
    }
  `

  const BackLink = styled.a`
    color: #722be1;
    cursor: pointer;
    font-family: "HalisR-Medium", "arial";
    font-size: 1.5rem;
    letter-spacing: -0.05rem;
    text-decoration: none;
    @media only screen and (min-width: 414px) {
      font-size: 1.8rem;
    }
    @media only screen and (min-width: 1500px) {
      font-size: 1.8rem;
    }

    &:hover {
      color: #000;
    }
  `

  const goBack = () => {
    typeof window.history !== "undefined" && window.history.go(-1)
  }

  const allImages = imageData.map((img, index) => (
    <PortfolioDetailImage fluid={img.node.childImageSharp.fluid} key={index} />
  ))

  const viewWebsiteBtn = url ? (
    <VisitWebsiteBtn
      href={url}
      alt=""
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit Website
    </VisitWebsiteBtn>
  ) : null

  return (
    <Layout>
      <Helmet>
        <title>Portfolio - {title}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Masthead>
        <MastheadTitle mastheadTitle={title} />
        <MastheadBody>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></p>
        </MastheadBody>
      </Masthead>
      <PortfolioPageContent>
        <div className="container">
          {viewWebsiteBtn}
          {allImages}
          <BackLink onClick={goBack}>&#8592; Back to portfolio</BackLink>
        </div>
      </PortfolioPageContent>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    portfolioJson(slug: { eq: $slug }) {
      title
      description
      url
    }
    images: allFile(
      sort: { fields: name }
      filter: {
        sourceInstanceName: { eq: "portfolioImages" }
        relativeDirectory: { eq: $slug }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 75) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
