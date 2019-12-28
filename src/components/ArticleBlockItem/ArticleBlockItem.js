import React from "react"

import styles from "./ArticleBlockItem.module.scss"

export default props => (
  <div className={styles.articleItem}>
    <img
      src={props.articleContent.img}
      alt={props.articleContent.title}
      className={styles.articleItemImg}
    />
    <h2 className={styles.articleItemTitle}>{props.articleContent.title}</h2>
    <p className={styles.articleItemBody}>{props.articleContent.body}</p>
  </div>
)
