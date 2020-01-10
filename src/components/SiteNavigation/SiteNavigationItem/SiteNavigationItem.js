import React from "react"
import { Link } from "gatsby"
import styles from "./SiteNavigationItem.module.scss"
import { location } from "@reach/router"

export default props => {
  const isPartiallyActive = props => {
    const currentLocation = props.pathname
    if (!currentLocation.includes("/")) {
      return { className: "active" }
    }
  }

  return (
    <li className={styles.siteNavigationItem}>
      <Link
        to={props.item.link}
        className={styles.siteNavigationLink}
        activeClassName={styles.siteNavigationLinkActive}
        getProps={({ location }) => isPartiallyActive(location)}
      >
        {props.item.name}
      </Link>
    </li>
  )
}
