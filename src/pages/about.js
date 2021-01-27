import React from "react"
import Helmet from "react-helmet"

import { graphql } from "gatsby"

import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"

import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"
import ClientLogosBlock from "../components/ClientLogosBlock/ClientLogosBlock"
import SkillsBlock from "../components/SkillsBlock/SkillsBlock"
import CvBlock from "../components/CvBlock/CvBlock"
import CodeExamplesBlock from "../components/CodeExamplesBlock/CodeExamplesBlock"

export default ({ data, location }) => {
  const { aboutPageContent, clients, skills, cv, codeExamples } = data.dataJson
  return (
    <Layout location={location}>
      <Helmet>
        <title>About Rooster Design</title>
        <meta
          name="description"
          content="Freelance Front End Developer and UI/UX Designer offering outsourcing and contracting services across Warwickshire and West Midlands."
        />
      </Helmet>
      <Masthead>
        <MastheadTitle mastheadTitle={aboutPageContent.mastheadTitle} />
        <MastheadBody>
          <p
            dangerouslySetInnerHTML={{ __html: aboutPageContent.mastheadBody }}
          ></p>
        </MastheadBody>
      </Masthead>
      <PageContent>
        <SkillsBlock content={skills} />
        <ClientLogosBlock content={clients} />
        <CvBlock content={cv} />
        <CodeExamplesBlock content={codeExamples} />
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query aboutContentQuery {
    dataJson {
      aboutPageContent {
        mastheadTitle
        mastheadBody
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
      cv {
        title
        intro
        btn {
          label1
          label2
          fileInfo
        }
      }
      codeExamples {
        title
        intro
        repos {
          name
          tech
          url
        }
      }
    }
  }
`
