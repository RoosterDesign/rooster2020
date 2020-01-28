import React from "react"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"
import ServiceBlock from "../components/ServiceBlock/ServiceBlock"
import JbandgBanner from "../components/JbandgBanner/JbandgBanner"
import ServicesMastheadBody from "../components/ServicesMastheadBody/ServicesMastheadBody"
import styled from "styled-components"

import designIcon from "../images/icons/tint.svg"
import developIcon from "../images/icons/laptop-code.svg"
import collaborationIcon from "../images/icons/cubes.svg"

import { graphql } from "gatsby"

export default ({ data }) => {
  const { servicesPageContent } = data.dataJson

  const services = servicesPageContent.services.map((service, index) => (
    <ServiceBlock key={index} content={service} />
  ))

  const MastheadServices = styled.div`    
    margin-top: 20px;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  `

  return (
    <Layout>
      <Masthead>
        <MastheadTitle mastheadTitle={servicesPageContent.mastheadTitle} />
        <MastheadServices>
          <ServicesMastheadBody
            icon={designIcon}
            title="UI/UX Design"
            body="Brainstorming through to wireframing, prototyping and bespoke, unique design, I treat every project with as much love and attention as if it were my own."
          />
          <ServicesMastheadBody
            icon={developIcon}
            title="Development"
            body="Using HTML5 and CSS3 and JavaScript (ES5+) I bring your website to life. I integrate with your working practices and deliver a product to match your exacting standards."
          />
          <ServicesMastheadBody
            icon={collaborationIcon}
            title="Collaboration"
            body="I build long-term relationships with agencies looking to outsource work to me safe in the knowledge it'll be delivered to a high standard and on time."
          />
        </MastheadServices>
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
    dataJson {
      servicesPageContent {
        mastheadTitle
        mastheadBody {
          icon
          title
          body
        }
        services {
          body
          mobileImg
          desktopImg
          title
        }
      }
    }
  }
`
