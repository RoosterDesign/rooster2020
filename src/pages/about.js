import React from "react"
import { graphql } from "gatsby"

import Masthead from "../components/Masthead/Masthead"
import SiteHeader from "../components/SiteHeader/SiteHeader"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"

import ClientLogosBlock from "../components/ClientLogosBlock/ClientLogosBlock"
import SkillsBlock from "../components/SkillsBlock/SkillsBlock"

export default ({ data }) => {
  const { aboutPageContent, clientLogos, skills } = data.allDataJson.nodes[0]
  return (
    <Layout>
      <Masthead>
        <MastheadTitle mastheadTitle="about page title" />
        <MastheadBody>
          <p>page body or icons.....</p>
        </MastheadBody>
      </Masthead>
      <PageContent>
        <SkillsBlock content={skills} />
        <ClientLogosBlock content={clientLogos} />
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query aboutContentQuery {
    allDataJson {
      nodes {
        aboutPageContent {
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
        skills {
          title
          intro
          logos {
            src
            name
          }
        }
      }
    }
  }
`
