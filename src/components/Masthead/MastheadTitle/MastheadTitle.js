import React from "react"
import styles from "./MastheadTitle.module.scss"

export default props => {
  const classname =
    window.location.pathname === "/"
      ? [styles.mastheadTitle, styles.isHomepage].join(" ")
      : styles.mastheadTitle

  return (
    <h1
      className={classname}
      dangerouslySetInnerHTML={{ __html: props.mastheadTitle }}
    ></h1>
  )
}
