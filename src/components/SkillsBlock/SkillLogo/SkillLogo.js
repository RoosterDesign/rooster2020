import React from "react"
import Img from "gatsby-image"
import styles from "./SkillLogo.module.scss"

export default props => {
  return (
    <div className={styles.skillLogo}>
      <Img
        fluid={props.img}
        alt={props.title}
        className={styles.skillLogoImg}
      />
    </div>
  )
}
