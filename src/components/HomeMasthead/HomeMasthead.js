import React from "react"

import styles from "./HomeMasthead.module.scss"
import Logo from "../Logo/Logo"
import SiteNavigation from "../SiteNavigation/SiteNavigation"

export default () => (
  <header className={styles.masthead} role="banner">
    <div className="container">
      <Logo />
      <SiteNavigation />

      <h1 className={styles.mastheadTitle}>
        UI/UX Designer &amp; Front End Developer
      </h1>

      <p className={styles.mastheadIntro}>
        Based in Leamington Spa, Warwickshire, Rooster Design Ltd offer digital
        services for agencies looking to outsource projects, in-house contract
        opportunities as well as individuals and businesses looking to create a
        web presence.
      </p>
    </div>
  </header>
)
