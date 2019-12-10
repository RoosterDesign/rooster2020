import React from "react"
import Layout from "../components/Layout/layout"
import WhyMe from "../components/WhyMe/whyMe"
import ClientLogos from "../components/ClientLogos/clientLogos"
import ServiceOverview from "../components/ServiceOverview/serviceOverview"

const Homepage = ({ data }) => (
  <Layout>
    <ServiceOverview />
    <ClientLogos />
    <WhyMe />
  </Layout>
)

export default Homepage
