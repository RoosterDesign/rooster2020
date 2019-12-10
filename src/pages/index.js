import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "../components/header"
import Layout from "../components/layout"

const Homepage = ({ data }) => (
  <Layout>
    <Header headerText="Homepage" />
    <Img
      className="headshot"
      fixed={data.file.childImageSharp.fixed}
      alt="Headshot"
    />
  </Layout>
)

export default Homepage

export const query = graphql`
  query {
    file(relativePath: { eq: "test.jpg" }) {
      childImageSharp {
        fixed(width: 400, webpQuality: 70) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`
