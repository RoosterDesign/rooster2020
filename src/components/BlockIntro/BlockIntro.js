import React from "react"
import styles from "./blockIntro.module.scss"

export default props => (
  <div className={styles.blockIntro}>
    <p>{props.introContent}</p>
  </div>
)
