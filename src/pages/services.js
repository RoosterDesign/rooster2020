import React from "react"
import { graphql } from "gatsby"

import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"

export default ({ data }) => {
  const { servicesPageContent } = data.allDataJson.nodes[0]

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
        <section>
          <div class="container">
            <div>
              <h2>Outsourcing - blockTitle</h2>
              <p>Lorem ipsum... - blockIntro</p>
            </div>
          </div>
          <img src="http://placekitten.com/800" />
        </section>

        <section>
          <img src="http://placekitten.com/800" />
          <div class="container">
            <div>
              <h2>Outsourcing - blockTitle</h2>
              <p>Lorem ipsum... - blockIntro</p>
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div>
              <h2>Outsourcing - blockTitle</h2>
              <p>Lorem ipsum... - blockIntro</p>
            </div>
          </div>
          <img src="http://placekitten.com/800" />
        </section>
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
        }
      }
    }
  }
`
