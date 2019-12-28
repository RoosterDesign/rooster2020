import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import ClientLogosBlock from "../components/ClientLogosBlock/ClientLogosBlock"
import WhatIUseBlock from "../components/WhatIUseBlock/WhatIUseBlock"

export default ({ data }) => {
  const { aboutPageContent, clientLogos, whatIUse } = data.allDataJson.nodes[0]
  return (
    <Layout mastheadContent={aboutPageContent}>
      <WhatIUseBlock content={whatIUse} />
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
        whatIUse {
          title
          intro
          skills {
            img
            alt
          }
        }
      }
    }
  }
`
