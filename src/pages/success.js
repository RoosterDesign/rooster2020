import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"

export default () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "is-success",
      }}
    >
      <title>Thanks for getting in touch</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <Masthead isSuccess>
      <MastheadTitle mastheadTitle="Thanks" />
      <MastheadBody>
        <p>
          Thank you for your enquiry, we will be in touch soon.{" "}
          <Link to="/">Click here</Link> to return to the homepage.
        </p>
      </MastheadBody>
    </Masthead>
  </Layout>
)
