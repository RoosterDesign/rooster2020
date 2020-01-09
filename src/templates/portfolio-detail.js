import React from "react"
import { graphql } from "gatsby"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"

export default ({ data }) => {
  console.log(JSON.stringify(data, null, 4))

  return (
    <Layout>
      <Masthead>
        <MastheadTitle mastheadTitle="title" />
        <MastheadBody>
          <div>{data.allDataJson.edges[0].node}</div>
        </MastheadBody>
      </Masthead>
      <PageContent>
        <div className="container">
          <img src="" />
        </div>
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    portfolioJson(slug: { eq: $slug }) {
      slug
    }
  }
`
