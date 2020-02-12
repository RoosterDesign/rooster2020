import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"

export default ({ data }) => {
  const { title, description, images } = data.portfolioJson

  const PortfolioDetailImage = styled.img`
    display: block;
    height: auto;
    margin: 0 auto 16px;
    max-width: 100%;
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
      padding-top: 50px;
      padding-bottom: 50px;
    }
    @media (min-width: 992px) {
      padding-top: 100px;
      padding-bottom: 75px;
    }
  `

  const BackLink = styled(Link)`
    color: #722be1;
    font-family: "HalisR-Medium", "serif";
    font-size: 1.5rem;
    letter-spacing: -0.05rem;
    text-decoration: none;
    @media only screen and (min-width: 414px) {
      font-size: 1.6rem;
    }
    @media only screen and (min-width: 1500px) {
      font-size: 1.8rem;
    }

    &:hover {
      color: #000;
    }
  `

  const allImages = images.map(img => <PortfolioDetailImage src={img} />)

  return (
    <Layout>
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
          {allImages}
          <BackLink to="/portfolio/">&#8592; Back to portfolio</BackLink>
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
      images
    }
  }
`
