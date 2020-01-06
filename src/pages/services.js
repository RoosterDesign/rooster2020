import React from "react"
import { graphql } from "gatsby"

import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"
import ServiceBlock from "../components/ServiceBlock/ServiceBlock"
import JbandgBanner from "../components/JbandgBanner/JbandgBanner"

export default ({ data }) => {
  const { servicesPageContent } = data.allDataJson.nodes[0]

  const services = servicesPageContent.services.map((service, index) => (
    <ServiceBlock key={index} content={service} />
  ))

  return (
    <Layout>
      <Masthead>
        <MastheadTitle mastheadTitle={servicesPageContent.mastheadTitle} />
        <MastheadBody>
          <p
            dangerouslySetInnerHTML={{
              __html: servicesPageContent.mastheadBody,
            }}
          ></p>
        </MastheadBody>
      </Masthead>
      <PageContent>
        {services}
        <JbandgBanner />
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query servicesContentQuery {
    allDataJson {
      nodes {
        servicesPageContent {
          mastheadTitle
          mastheadBody
          services {
            body
            img
            title
          }
        }
      }
    }
  }
`
