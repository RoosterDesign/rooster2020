import React from "react"

import styles from "./Masthead.module.scss"
import MastheadTop from "./MastheadTop/MastheadTop"
import MastheadTitle from "./MastheadTitle/MastheadTitle"
import MastheadBody from "./MastheadBody/MastheadBody"

export default ({ location }) => (
  <header
    className={location === "home" ? styles.homeMasthead : styles.masthead}
    role="banner"
  >
    <div className="container">
      <MastheadTop />

      <div className={styles.mastheadBody}>
        <MastheadTitle />
        <MastheadBody />
      </div>
    </div>
  </header>
)
