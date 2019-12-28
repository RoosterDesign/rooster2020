import React from "react"

import styles from "./MastheadBody.module.scss"

export default props => (
  <p className={styles.mastheadIntro}>{props.mastheadBody}</p>
)
