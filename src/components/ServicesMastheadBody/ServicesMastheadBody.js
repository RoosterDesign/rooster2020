import React from "react"
import styles from "./ServicesMastheadBody.module.scss"

export default props => (
  <div className={styles.serviceItem}>
    <img src={props.icon} alt={props.title} className={styles.icon} />
    <p className={styles.title}>{props.title}</p>
    <p className={styles.body}>{props.body}</p>
  </div>
)
