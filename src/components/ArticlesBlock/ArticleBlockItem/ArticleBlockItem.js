import React from "react"
import Img from "gatsby-image"
import styles from "./ArticleBlockItem.module.scss"

export default props => {
  return (
    <div className={styles.articleItem}>
      <Img
        fluid={props.img}
        alt={props.title}
        className={styles.articleItemImg}
      />
      <h2 className={styles.articleItemTitle}>{props.title}</h2>
      <p className={styles.articleItemBody}>{props.body}</p>
    </div>
  )
}
