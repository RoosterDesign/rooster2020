import React from "react"
import "../../styles/main.scss"
import HomeMasthead from "../HomeMasthead/HomeMasthead"
import Masthead from "../Masthead/Masthead"
import Footer from "../Footer/Footer"
import styles from "./Layout.module.scss"

const Layout = ({ children, location }) => {
  const header = location === "home" ? <HomeMasthead /> : <Masthead />
  return (
    <>
      <div className={styles.pageWrap}>
        {header}
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
