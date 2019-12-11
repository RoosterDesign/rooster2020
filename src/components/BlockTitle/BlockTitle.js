import React from "react"
import styles from "./blockTitle.module.scss"

export default props => (
  <h1 className={styles.blockTitle}>{props.titleContent}</h1>
)
