import React from "react"

import "../../styles/main.scss"
import Masthead from "../Masthead/Masthead"
import Footer from "../Footer/Footer"
import styles from "./Layout.module.scss"

const Layout = ({ children, location, mastheadContent }) => {
  return (
    <>
      <div
        id="top"
        className={
          location === "isHomepage"
            ? [styles.pageWrap, styles.isHome].join(" ")
            : styles.pageWrap
        }
      >
        <Masthead location={location} mastheadContent={mastheadContent} />
        <div className={styles.contentWrap}>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
