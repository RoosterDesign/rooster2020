import React from "react"
import styles from "./BlockIntro.module.scss"

export default props => (
  <div
    className={styles.blockIntro}
    dangerouslySetInnerHTML={{ __html: props.introContent }}
  ></div>
)
