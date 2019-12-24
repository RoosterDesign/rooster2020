import React from "react"
import styles from "./MastheadTop.module.scss"
import Logo from "../../Logo/Logo"
import SiteNavigation from "../../SiteNavigation/SiteNavigation"

export default () => (
  <div className={styles.mastheadTop}>
    <Logo />
    <SiteNavigation />
  </div>
)
