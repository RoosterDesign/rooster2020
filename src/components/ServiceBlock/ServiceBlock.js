import React from "react"
import BackgroundImage from "gatsby-background-image"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"
import styles from "./ServiceBlock.module.scss"

export default props => {
  return (
    <section className={styles.serviceBlock}>
      <div className="container">
        <div className={styles.imgWrap}>
          <BackgroundImage
            fluid={props.img}
            className={styles.img}
          ></BackgroundImage>
        </div>
        <div className={styles.content}>
          <BlockTitle titleContent={props.title} />
          <BlockIntro introContent={props.body} />
        </div>
      </div>
    </section>
  )
}
