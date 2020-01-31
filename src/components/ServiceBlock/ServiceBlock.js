import React from "react"
import Img from "gatsby-image"
import styles from "./ServiceBlock.module.scss"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"

export default props => {
  return (
    <section className={styles.serviceBlock}>
      <div className="container">
        <Img fluid={props.img} alt={props.title} className={styles.img} />

        <div className={styles.content}>
          <BlockTitle titleContent={props.title} />
          <BlockIntro introContent={props.body} />
        </div>
      </div>
    </section>
  )
}
