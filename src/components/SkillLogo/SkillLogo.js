import React from "react"
import styles from "./SkillLogo.module.scss"

export default props => (
  <picture className={styles.skillLogo}>
    <img src={props.logoContent.src} alt={props.logoContent.name} />
  </picture>
)
