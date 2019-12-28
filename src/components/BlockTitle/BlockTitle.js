import React from "react"
import styles from "./blockTitle.module.scss"

export default props => (
  <h2 className={styles.blockTitle}>{props.titleContent}</h2>
)
