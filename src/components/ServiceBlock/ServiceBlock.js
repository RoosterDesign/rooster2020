import React from "react"
import styles from "./ServiceBlock.module.scss"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"

export default props => (
  <section className={styles.serviceBlock}>
    <div className="container">
      <div className={styles.content}>
        <BlockTitle titleContent={props.content.title} />
        <BlockIntro
          introContent={props.content.body}
        />
      </div>
    </div>
    <img src={props.content.img} className={styles.img} alt={props.content.title} />
  </section>
)
