import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import ArticlesBlock from "../components/ArticlesBlock/ArticlesBlock"
import ClientLogosBlock from "../components/ClientLogosBlock/ClientLogosBlock"

export default ({ data, location }) => {
  const {
    homePageContent,
    clientLogos,
    serviceOverview,
    whyChooseMe,
  } = data.dataJson

  return (
    <Layout location={location}>
      <Helmet
        bodyAttributes={{
          class: "is-homepage",
        }}
      >
        <title>Homepage</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <Masthead isHomepage>
        <MastheadTitle mastheadTitle={homePageContent.mastheadTitle} />
        <MastheadBody>
          <p
            dangerouslySetInnerHTML={{
              __html: homePageContent.mastheadBody,
            }}
          ></p>
        </MastheadBody>
      </Masthead>

      <ArticlesBlock content={serviceOverview} />
      <ClientLogosBlock content={clientLogos} />
      <ArticlesBlock content={whyChooseMe} />
    </Layout>
  )
}

export const query = graphql`
  query homeContentQuery {
    dataJson {
      homePageContent {
        mastheadBody
        mastheadTitle
      }
      clientLogos {
        title
        intro
        logos {
          src
          name
        }
      }
      serviceOverview {
        title
        intro
        articles {
          title
          img
          body
        }
      }
      whyChooseMe {
        title
        intro
        articles {
          title
          img
          body
        }
      }
    }
  }
`
