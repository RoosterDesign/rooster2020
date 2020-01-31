import React from "react"
import styles from "./ClientLogo.module.scss"
import Img from "gatsby-image"

export default props => {
  let clientName =
    props.clientName.charAt(0).toUpperCase() + props.clientName.slice(1)
  return (
    <div className={styles.clientLogo}>
      <Img
        fluid={props.img}
        alt={clientName}
        className={styles.clientLogoImg}
      />
    </div>
  )
}
