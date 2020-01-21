import React from "react"
import styles from "./ServiceBlock.module.scss"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"

export default props => (
  <section className={styles.serviceBlock}>
    <div className="container">
      <picture>
        <source
          srcSet={props.content.mobileImg}
          type="image/jpg"
          media="(max-width: 767px)"
        />
        <source
          srcSet={props.content.desktopImg}
          type="image/jpg"
          media="(min-width: 768px)"
        />
        <img
          src={props.content.desktopImg}
          className={styles.img}
          alt={props.content.title}
        />
      </picture>

      <div className={styles.content}>
        <BlockTitle titleContent={props.content.title} />
        <BlockIntro introContent={props.content.body} />
      </div>
    </div>
  </section>
)
