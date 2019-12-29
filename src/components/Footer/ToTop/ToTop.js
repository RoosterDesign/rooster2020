import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styles from "./ToTop.module.scss"

export default () => (
  <div
    role="button"
    tabIndex="0"
    className={styles.toTop}
    onClick={() => scrollTo("#top")}
    onKeyDown={() => scrollTo("#top")}
  >
    <span className={styles.arrow}></span>
  </div>
)
