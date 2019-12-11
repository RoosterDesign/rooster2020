import React from "react"
import styles from "./blockIntro.module.scss"

export default props => (
  <div className={styles.BlockIntro}>
    <p>{props.titleContent}</p>
  </div>
)
