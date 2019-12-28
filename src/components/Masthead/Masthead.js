import React from "react"

import styles from "./Masthead.module.scss"
import MastheadTop from "./MastheadTop/MastheadTop"
import MastheadTitle from "./MastheadTitle/MastheadTitle"
import MastheadBody from "./MastheadBody/MastheadBody"

import roosterBg from "../../images/roosterBg.svg"

export default ({ location, mastheadContent }) => (
  <header
    className={
      location === "isHomepage"
        ? [styles.masthead, styles.isHome].join(" ")
        : styles.masthead
    }
    role="banner"
  >
    <div className="container">
      <MastheadTop />

      <div className={styles.mastheadContent}>
        <MastheadTitle
          location={location}
          mastheadTitle={mastheadContent.mastheadTitle}
        />
        <MastheadBody
          location={location}
          mastheadBody={mastheadContent.mastheadBody}
        />
      </div>
    </div>

    <img src={roosterBg} alt="img" className={styles.roosterBg} />
  </header>
)
