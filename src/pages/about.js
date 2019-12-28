import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import ClientLogosBlock from "../components/ClientLogosBlock/ClientLogosBlock"
import SkillsBlock from "../components/SkillsBlock/SkillsBlock"

export default ({ data }) => {
  const { aboutPageContent, clientLogos, skills } = data.allDataJson.nodes[0]
  return (
    <Layout mastheadContent={aboutPageContent}>
      <SkillsBlock content={skills} />
      <ClientLogosBlock content={clientLogos} />
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
