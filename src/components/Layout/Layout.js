import React from "react"
import Footer from "../Footer/Footer"
import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.pageWrap}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
