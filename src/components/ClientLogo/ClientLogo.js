import React from "react"
import styles from "./ClientLogo.module.scss"

export default props => (
  <picture className={styles.clientLogo}>
    <img src={props.logoContent.src} alt={props.logoContent.name} />
  </picture>
)
