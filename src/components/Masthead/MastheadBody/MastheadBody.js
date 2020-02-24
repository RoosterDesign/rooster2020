import React from "react"
import styles from "./MastheadBody.module.scss"

export default ({ children, isHomepage }) => {
  const classname = isHomepage
    ? [styles.mastheadBody, styles.isHomepage].join(" ")
    : styles.mastheadBody
  return <div className={classname}>{children}</div>
}
