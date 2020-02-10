import React from "react"
import styles from "./MastheadTitle.module.scss"

export default props => (
  <h1
    className={styles.mastheadTitle}
    dangerouslySetInnerHTML={{ __html: props.mastheadTitle }}
  ></h1>
)
