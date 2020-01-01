import React from "react"
import styles from "./ClientLogo.module.scss"
import Hexagon from "../Hexagon/Hexagon"

export default props => {
  return (
    <div className={styles.clientLogo}>
      <Hexagon type="clients" id={props.id} src={props.logoContent.src} />
    </div>
  )
}
