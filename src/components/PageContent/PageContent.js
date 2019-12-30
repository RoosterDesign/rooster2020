import React from "react"
import styles from "./PageContent.module.scss"

export default ({ children }) => (
  <div className={styles.contentWrap}>{children}</div>
)
