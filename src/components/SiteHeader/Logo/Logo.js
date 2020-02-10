import React from "react"
import { Link } from "gatsby"
import logo from "../../../images/header/logo.svg"
import styles from "./Logo.module.scss"

export default () => (
  <Link to="/" className={styles.logo}>
    <img src={logo} alt="Rooster Design" />
  </Link>
)
