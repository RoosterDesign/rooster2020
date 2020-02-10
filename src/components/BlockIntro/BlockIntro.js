import React from "react"
import styles from "./BlockIntro.module.scss"

export default props => {
  const classname =
    window.location.pathname === "/"
      ? [styles.blockIntro, styles.isHomepage].join(" ")
      : styles.blockIntro
  return (
    <div
      className={classname}
      dangerouslySetInnerHTML={{ __html: props.introContent }}
    ></div>
  )
}
