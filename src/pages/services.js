import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import Layout from "../components/Layout/Layout"
import PageContent from "../components/PageContent/PageContent"
import ServiceBlock from "../components/ServiceBlock/ServiceBlock"
import JbandgBanner from "../components/JbandgBanner/JbandgBanner"
import ServicesMastheadBody from "../components/ServicesMastheadBody/ServicesMastheadBody"
import styled from "styled-components"
import designIcon from "../images/icons/sketch.svg"
import developIcon from "../images/icons/laptop-code.svg"
import collaborationIcon from "../images/icons/cubes.svg"

export default ({ data, location }) => {
  const { servicesPageContent } = data.dataJson

  const services = servicesPageContent.services.map((service, index) => {
    const imageIndex = data.images.edges.findIndex(
      x =>
        x.node.name ===
        service.image
          .split(".")
          .slice(0, -1)
          .join(".")
    )
    return (
      <ServiceBlock
        key={index}
        img={data.images.edges[imageIndex].node.childImageSharp.fluid}
        title={service.title}
        body={service.body}
      />
    )
  })

  const MastheadServices = styled.div`
    @media (min-width: 768px) {
      background: #fff;
      border-radius: 15px;
      box-shadow: 0 0 40px 5px rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: space-between;
      margin: -350px 0 50px;
      padding: 30px 8px;
    }
    @media (min-width: 992px) {
      box-shadow: 0 0 70px 10px rgba(0, 0, 0, 0.3);
      margin: -310px 0 80px;
      padding: 30px 15px;
    }
    @media (min-width: 1250px) {
      margin-top: -405px;
      padding: 35px 20px;
    }
    @media (min-width: 1500px) {
      box-shadow: 0 0 70px 10px rgba(0, 0, 0, 0.3);
      margin: -405px 0 100px;
      padding: 40px 30px;
    }
    @media (min-width: 1920px) {
      margin-top: -430px;
      padding: 50px 30px;
    }
  `

  return (
    <Layout location={location}>
      <Helmet>
        <title>Services Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Masthead>
        <MastheadTitle mastheadTitle={servicesPageContent.mastheadTitle} />
      </Masthead>
      <PageContent>
        <div className="container" style={{ zIndex: 2 }}>
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
        </div>
        {services}
        <JbandgBanner />
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query servicesContentQuery {
    images: allFile(filter: { sourceInstanceName: { eq: "services" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 750, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    dataJson {
      servicesPageContent {
        mastheadTitle
        services {
          body
          image
          title
        }
      }
    }
  }
`
