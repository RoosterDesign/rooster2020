import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import ArticlesBlock from "../components/ArticlesBlock/ArticlesBlock"
import SkillsBlock from "../components/SkillsBlock/SkillsBlock"
import ClientLogosBlock from "../components/ClientLogosBlock/ClientLogosBlock"

export default ({ data, location }) => {
  const {
    homePageContent,
    clients,
    skills,
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
        <title>
          Freelance Front End Developer and UI/UX Designer based in Leamington
          Spa, Warwickshire
        </title>
        <meta name="description" content="Freelance Front End Developer and UI/UX Designer offering outsourcing and contracting services across Warwickshire and West Midlands." />
      </Helmet>

      <Masthead isHomepage noSwoop>
        <MastheadTitle
          isHomepage
          mastheadTitle={homePageContent.mastheadTitle}
        />
        <MastheadBody isHomepage>
          <p
            dangerouslySetInnerHTML={{
              __html: homePageContent.mastheadBody,
            }}
          ></p>
        </MastheadBody>
      </Masthead>

      <ArticlesBlock content={serviceOverview} />
      <SkillsBlock content={skills} />
      <ClientLogosBlock content={clients} />
      <ArticlesBlock content={whyChooseMe} />
    </Layout>
  )
}

export const query = graphql`
  query {
    dataJson {
      homePageContent {
        mastheadBody
        mastheadTitle
      }
      clients {
        title
        intro
      }
      skills {
        title
        intro
        logos {
          image
          name
        }
      }
      serviceOverview {
        title
        intro
        articles {
          title
          image
          body
        }
      }
      whyChooseMe {
        title
        intro
        articles {
          title
          image
          body
        }
      }
    }
  }
`
