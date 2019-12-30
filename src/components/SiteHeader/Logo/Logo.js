import React from "react"
import { Link } from "gatsby"
import styles from "./Logo.module.scss"

import logo from "../../../images/header/logo.svg"

export default () => (
  <Link to="/">
    <img src={logo} alt="Rooster Design" className={styles.logo} />
  </Link>
)
