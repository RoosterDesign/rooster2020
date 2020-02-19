import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteNavigationItem from "./SiteNavigationItem/SiteNavigationItem"
import styles from "./SiteNavigation.module.scss"

const SiteNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const siteLinks = data.site.siteMetadata.menuLinks.map((item, index) => (
    <SiteNavigationItem key={index} item={item} />
  ))

  return (
    <div className={styles.siteNavigation}>
      <ul className={styles.siteNavigationList}>{siteLinks}</ul>
    </div>
  )
}

export default SiteNavigation
