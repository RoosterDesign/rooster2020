import React from "react"

import styles from "./SiteHeader.module.scss"
import Logo from "./Logo/Logo"
import SiteNavigation from "../SiteNavigation/siteNavigation"

export default () => (
  <header className={styles.siteHeader} role="banner">
    <Logo />
    <SiteNavigation />
  </header>
)