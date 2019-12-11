import React from "react"

import styles from "./ArticleBlockItem.module.scss"

export default props => (
  <div className={styles.serviceItem}>
    <img
      src={props.articleContent.img}
      alt={props.articleContent.title}
      className={styles.serviceItemImg}
    />
    <h2 className={styles.serviceItemTitle}>{props.articleContent.title}</h2>
    <p className={styles.serviceItemBody}>{props.articleContent.body}</p>
  </div>
)
