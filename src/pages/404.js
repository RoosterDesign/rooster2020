import React from "react"
import Helmet from "react-helmet"

import Masthead from "../components/Masthead/Masthead"
import MastheadTitle from "../components/Masthead/MastheadTitle/MastheadTitle"
import MastheadBody from "../components/Masthead/MastheadBody/MastheadBody"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <Helmet>
      <title>
        Freelance Frontend Developer UI/UX Designer based in Leamington Spa
      </title>
      <meta
        name="description"
        content="Freelance Frontend Developer and UI/UX Designer offering outsourcing and contracting services across Warwickshire and West Midlands."
      />
    </Helmet>
    <Masthead noSwoop>
      <MastheadTitle mastheadTitle="Oh, bugger!" />
      <MastheadBody>
        <p style={{ marginTop: "20px" }}>
          There's been a bit of an issue, i'm afraid we can't find this page! It
          has been lost into the ether.
        </p>
        <p style={{ marginTop: "20px" }}>
          <strong>This might be because:</strong>
          <br />
          You may have typed the web address incorrectly. Please check the
          address and spelling ensuring that it does not contain capital letters
          or spaces, or tt is possible that the page you were looking for may
          have been moved, updated or deleted.
        </p>
        <p style={{ marginTop: "20px", marginBottom: "50px" }}>
          <strong>Please try one of the following</strong>
          <br />
          <Link to="/" rel="preload">
            Return to the homepage
          </Link>
          <br />
          If you still encounter problems, then please{" "}
          <Link to="/contact" rel="preload">
            contact us.
          </Link>
        </p>
      </MastheadBody>
    </Masthead>
  </Layout>
)
