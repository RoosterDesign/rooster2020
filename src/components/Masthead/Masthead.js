import React from "react"
import SiteHeader from "../SiteHeader/SiteHeader"
import RoosterBg from "../RoosterBg/RoosterBg"
import styles from "./Masthead.module.scss"

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
      <div>{children}</div>
    </div>
    <RoosterBg />
  </div>
)
