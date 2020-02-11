import React from "react"
import styles from "./MastheadBody.module.scss"

export default ({ children }) => {
  const classname =
    window.location.pathname === "/"
      ? [styles.mastheadBody, styles.isHomepage].join(" ")
      : styles.mastheadBody

  return <div className={classname}>{children}</div>
}
