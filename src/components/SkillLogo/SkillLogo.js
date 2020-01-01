import React from "react"
import styles from "./SkillLogo.module.scss"
import Hexagon from "../Hexagon/Hexagon"

export default props => {
  return (
    <div className={styles.skillLogo}>
      <Hexagon type="skills" id={props.id} src={props.logoContent.src} />
    </div>
  )
}
