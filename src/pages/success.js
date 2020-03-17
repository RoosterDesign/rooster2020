import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"

export default () => (
  <Layout>
    <Helmet>
      <title>
        Freelance Front End Developer UI/UX Designer based in Leamington Spa
      </title>
      <meta
        name="description"
        content="Freelance Front End Developer and UI/UX Designer offering outsourcing and contracting services across Warwickshire and West Midlands."
      />
    </Helmet>
    <Masthead noSwoop>
      <MastheadTitle mastheadTitle="Thanks" />
      <MastheadBody>
        <p>
          Thank you for your enquiry, we will be in touch soon.{" "}
          <Link to="/" rel="preload">
            Click here
          </Link>{" "}
          to return to the homepage.
        </p>
      </MastheadBody>
    </Masthead>
  </Layout>
)
