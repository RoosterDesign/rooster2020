import React from "react"
import { Link } from "gatsby"
import styles from "./SiteNavigationItem.module.scss"

export default props => {
  const isActive = props => {
    const currentLocation = props.location.pathname
    const currentPath = props.href.replace(/^\/+/, "")
    let isActive = false
    if (currentLocation === props.href) {
      isActive = true
    } else if (currentLocation.indexOf(currentPath) === 1) {
      isActive = true
    }
    if (isActive) {
      return {
        className: [
          styles.siteNavigationLink,
          styles.siteNavigationLinkActive,
        ].join(" "),
      }
    }
  }

  const NavLink = props => (
    <Link
      getProps={(href, location) => isActive(href, location)}
      {...props}
      rel="preload"
    />
  )

  return (
    <li className={styles.siteNavigationItem}>
      <NavLink to={props.item.link} className={styles.siteNavigationLink}>
        {props.item.name}
      </NavLink>
    </li>
  )
}
