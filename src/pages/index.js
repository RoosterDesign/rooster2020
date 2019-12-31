import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import ArticlesBlock from "../components/ArticlesBlock/ArticlesBlock"
import ClientLogosBlock from "../components/ClientLogosBlock/ClientLogosBlock"

export default ({ data }) => {
  const {
    homePageContent,
    clientLogos,
    serviceOverview,
    whyChooseMe,
  } = data.allDataJson.nodes[0]

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "is-homepage",
        }}
      />

      <Masthead isHomepage>
    
      
      <svg version="1.1" viewBox="0 0 260 228" xmlns="http://www.w3.org/2000/svg" width="200">

          
      <defs>
        <pattern
          id="img1"
          patternUnits="userSpaceOnUse"
          width="200"
          height="200"
        >
          <image
            xlinkHref="http://placekitten.com/500/500"
            x="0"
            y="0"
            width="200"
            height="200"
          />
        </pattern>
      </defs>

      <g fill="none" fill-rule="evenodd">
      <g transform="translate(-972 -2099)" fill="#fff">
      <g transform="translate(74 1935)">
      <g transform="translate(0 99)">
      <path transform="translate(1028 179) rotate(30) translate(-1028 -179)" d="m1033 50.887 103.45 59.726c3.094 1.7863 5 5.0876 5 8.6603v119.45c0 3.5727-1.906 6.8739-5 8.6603l-103.45 59.726c-3.094 1.7863-6.906 1.7863-10 0l-103.45-59.726c-3.094-1.7863-5-5.0876-5-8.6603v-119.45c0-3.5727 1.906-6.8739 5-8.6603l103.45-59.726c3.094-1.7863 6.906-1.7863 10 0z" fill="url(#img1)"/>
      </g>
      </g>
      </g>
      </g>
      </svg>

        <MastheadTitle mastheadTitle={homePageContent.mastheadTitle} />
        <MastheadBody>
          <p
            dangerouslySetInnerHTML={{ __html: homePageContent.mastheadBody }}
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
    allDataJson {
      nodes {
        homePageContent {
          mastheadTitle
          mastheadBody
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
  }
`
