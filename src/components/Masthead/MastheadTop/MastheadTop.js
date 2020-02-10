import React from "react"
import Logo from "../../Logo/Logo"
import SiteNavigation from "../../SiteNavigation/SiteNavigation"
import styles from "./MastheadTop.module.scss"

export default () => (
  <div className={styles.mastheadTop}>
    <Logo />
    <SiteNavigation />
  </div>
)
