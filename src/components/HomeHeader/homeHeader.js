import React from "react"
import { Link } from "gatsby"

import styles from "./homeHeader.module.scss"
import SiteNavigation from "../SiteNavigation/siteNavigation"

export default () => (
  <header className={styles.Masthead} role="banner">
    <div className="container">
      <Link to="/" className={styles.Logo}>
        LOGO
      </Link>

      <SiteNavigation />

      <h1 className={styles.MastheadTitle}>
        UI/UX Designer &amp; Front End Developer
      </h1>

      <p className={styles.MastheadIntro}>
        Based in Leamington Spa, Warwickshire, Rooster Design Ltd offer digital
        services for agencies looking to outsource projects, in-house contract
        opportunities as well as individuals and businesses looking to create a
        web presence. With over ten years of experience in both UI/UX Design and
        Front End Development I can take projects through from initial
        conception, right through to development and beyond, working as either a
        lone-gun or as part of a team, I fit into your current working structure
        seamlessly.
      </p>
    </div>
  </header>
)
