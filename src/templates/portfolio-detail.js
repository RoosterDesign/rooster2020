import React from "react"
import { graphql, Link } from "gatsby"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"

export default ({ data }) => {
  const { title, description, images } = data.portfolioJson

  const allImages = images.map(img => <img src={img} />)

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
      <PageContent>
        <div className="container">{allImages}</div>
        <Link to="/portfolio/">Back to portfolio</Link>
      </PageContent>
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
