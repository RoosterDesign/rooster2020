import React from "react"
// import { useStaticQuery, Link, graphql } from "gatsby"

import "../../styles/global.scss"
import HomeHeader from "../HomeHeader/homeHeader"
import Header from "../Header/header"
import Footer from "../Footer/footer"

import styles from "./layout.module.scss"

export default ({ children, location }) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // )

  const header = window.location.pathname === "/" ? <HomeHeader /> : <Header />

  return (
    <div className={styles.PageWrap}>
      {header}
      {children}
      <Footer />
    </div>
  )
}
