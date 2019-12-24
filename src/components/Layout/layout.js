import React from "react"

import "../../styles/main.scss"
import Masthead from "../Masthead/Masthead"
import Footer from "../Footer/Footer"
import styles from "./Layout.module.scss"

import roosterBg from "../../images/svgs/roosterBg.svg"

const Layout = ({ children, location }) => {
  return (
    <>
      <div
        className={location === "home" ? styles.homePageWrap : styles.pageWrap}
      >
        <Masthead location={location} />
        {children}
        <img src={roosterBg} alt="img" className={styles.roosterBg} />
      </div>
      <Footer />
    </>
  )
}

export default Layout
