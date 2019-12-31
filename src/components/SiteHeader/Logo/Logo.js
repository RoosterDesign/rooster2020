import React from "react"
import { Link } from "gatsby"
import styles from "./Logo.module.scss"

import logo from "../../../images/header/logo.svg"

export default () => (
  <Link to="/" className={styles.logo} >
    <img src={logo} alt="Rooster Design"/>
  </Link>
)
