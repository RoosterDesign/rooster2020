import React from "react"
import "../../styles/main.scss"
import Masthead from "../Masthead/Masthead"
import Footer from "../Footer/Footer"
import styles from "./Layout.module.scss"

const Layout = ({ children, location }) => {
  return (
    <>
      <div
        className={location === "home" ? styles.homePageWrap : styles.pageWrap}
      >
        <Masthead />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
