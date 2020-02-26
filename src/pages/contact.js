import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"
import ContactForm from "../components/ContactForm/ContactForm"

export default ({ data }) => {
  const { contactPageContent } = data.allDataJson.nodes[0]

  return (
    <Layout>
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Masthead>
        <MastheadTitle mastheadTitle={contactPageContent.mastheadTitle} />
        <MastheadBody>
          <p>
            To find out more about my services or to check my availability for
            contract work, please fill out the form below providing as much
            details as possible, alternatively email me at <a
              href="mailto:info@roosterdesign.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@roosterdesign.co.uk
            </a> or connect with me on <a
              href="https://www.linkedin.com/in/roosterdesign/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </MastheadBody>
      </Masthead>
      <PageContent>
        <ContactForm />
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query contactContentQuery {
    allDataJson {
      nodes {
        contactPageContent {
          mastheadTitle
        }
      }
    }
  }
`
