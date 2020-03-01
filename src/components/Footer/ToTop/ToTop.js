import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styles from "./ToTop.module.scss"

export default () => (
  <div
    aria-label="To top of page"
    role="button"
    tabIndex="0"
    className={styles.toTop}
    onClick={() => scrollTo("body")}
    onKeyDown={() => scrollTo("body")}
  >
    <span className={styles.arrow}></span>
  </div>
)
