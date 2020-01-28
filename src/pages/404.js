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
      <title>Error 404</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <Masthead>
      <MastheadTitle mastheadTitle="Oh, bugger!" />
      <MastheadBody>
        <p>
          There's been a bit of an issue, i'm afraid we can't find this page! It
          has been lost into the ether.
        </p>
        <p>
          <strong>This might be because:</strong>
          <br />
          You may have typed the web address incorrectly. Please check the
          address and spelling ensuring that it does not contain capital letters
          or spaces, or tt is possible that the page you were looking for may
          have been moved, updated or deleted.
        </p>
        <p>
          <strong>Please try one of the following</strong>
          <br />
          <Link to="/">Return to the homepage</Link>
          <br />
          <Link to="/contact">
            If you still encounter problems, then please contact us.
          </Link>
        </p>
      </MastheadBody>
    </Masthead>
  </Layout>
)
