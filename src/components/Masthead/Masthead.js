import React from "react"
import SiteHeader from "../SiteHeader/SiteHeader"
import RoosterBg from "../RoosterBg/RoosterBg"
import styles from "./Masthead.module.scss"
import masheadSwoop from "../../images/masthead-swoop.svg"

export default ({ children, isHomepage }) => (
  <div
    className={
      isHomepage
        ? [styles.masthead, styles.isHomepage].join(" ")
        : styles.masthead
    }
  >
    <div className="container">
      <SiteHeader />
      <div className={styles.mastheadContent}>{children}</div>
    </div>
    <img src={masheadSwoop} className={styles.mastheadSwoop} />
    <RoosterBg />
  </div>
)
