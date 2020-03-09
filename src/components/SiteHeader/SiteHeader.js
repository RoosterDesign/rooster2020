import React from "react"
import Logo from "./Logo/Logo"
import SiteNavigation from "../SiteNavigation/SiteNavigation"
import styles from "./SiteHeader.module.scss"

export default () => (
  <header className={styles.siteHeader} role="banner">
    <Logo />
    <SiteNavigation />
  </header>
)
