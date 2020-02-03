import React from "react"
import "../../styles/main.scss"
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
