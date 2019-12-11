import React from "react"
import { Link } from "gatsby"

import styles from "./SiteNavigation.module.scss"

export default () => {
  const LinkList = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  return (
    <nav role="navigation" className={styles.siteNavigation}>
      <ul>
        <LinkList to="/">Homepage</LinkList>
        <LinkList to="/about">About</LinkList>
        <LinkList to="/services">Services</LinkList>
        <LinkList to="/portfolio">Portfolio</LinkList>
        <LinkList to="/contact">Contact</LinkList>
      </ul>
    </nav>
  )
}
