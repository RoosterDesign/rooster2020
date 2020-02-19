import React from "react"
import SiteHeader from "../SiteHeader/SiteHeader"
import RoosterBg from "../RoosterBg/RoosterBg"
import styles from "./Masthead.module.scss"
import masheadSwoop from "../../images/masthead-swoop.svg"

export default ({ children }) => {
  const mastheadClassname =
    window.location.pathname === "/"
      ? [styles.masthead, styles.isHomepage].join(" ")
      : styles.masthead

  const swoopClassname =
    window.location.pathname === "/success"
      ? [styles.mastheadSwoop, styles.isSuccess].join(" ")
      : styles.mastheadSwoop

  return (
    <div className={mastheadClassname}>
      <div className="container">
        <SiteHeader />
        <div className={styles.mastheadContent}>{children}</div>
      </div>
      <img src={masheadSwoop} className={swoopClassname} />
      <RoosterBg />
    </div>
  )
}
