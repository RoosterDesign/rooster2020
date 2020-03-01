import React from "react"
import Helmet from "react-helmet"
import Footer from "../Footer/Footer"
import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <div className={styles.pageWrap}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
