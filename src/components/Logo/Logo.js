import React from "react"
import { Link } from "gatsby"
import styles from "./Logo.module.scss"

export default () => (
  <Link to="/" className={styles.logo}>
    LOGO
  </Link>
)
