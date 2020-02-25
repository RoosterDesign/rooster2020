import React from "react"
import SiteHeader from "../SiteHeader/SiteHeader"
import RoosterBg from "../RoosterBg/RoosterBg"
import styles from "./Masthead.module.scss"
import masheadSwoop from "../../images/masthead-swoop.svg"

export default props => {
  return (
    <div
      className={
        props.isHomepage
          ? [styles.masthead, styles.isHomepage].join(" ")
          : styles.masthead
      }
    >
      <div className="container">
        <SiteHeader />
        <div className={styles.mastheadContent}>{props.children}</div>
      </div>

      <img
        src={masheadSwoop}
        alt="Rooster Design Ltd"
        className={
          props.noSwoop
            ? [styles.mastheadSwoop, styles.isHidden].join(" ")
            : styles.mastheadSwoop
        }
      />
      <RoosterBg />
    </div>
  )
}
