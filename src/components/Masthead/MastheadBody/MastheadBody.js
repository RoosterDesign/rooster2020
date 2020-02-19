import React from "react"
import styles from "./MastheadBody.module.scss"

export default ({ children }) => {
  let classname
  if (typeof window !== `undefined`) {
    classname =
      window.location.pathname === "/"
        ? [styles.mastheadBody, styles.isHomepage].join(" ")
        : styles.mastheadBody
  }

  return <div className={classname}>{children}</div>
}
