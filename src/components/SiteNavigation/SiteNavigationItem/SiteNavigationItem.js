import React from "react"
import { Link } from "gatsby"
import styles from "./SiteNavigationItem.module.scss"

export default props => (
  <li className={styles.siteNavigationItem}>
    <Link
      to={props.item.link}
      className={styles.siteNavigationLink}
      activeClassName={styles.siteNavigationLinkActive}
    >
      {props.item.name}
    </Link>
  </li>
)
