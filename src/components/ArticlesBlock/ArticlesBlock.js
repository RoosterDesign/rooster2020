import React from "react"
import styles from "./ArticlesBlock.module.scss"
import ArticleBlockItem from "../ArticleBlockItem/ArticleBlockItem"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"

export default props => {
  const articles = props.content.articles.map((article, index) => (
    <ArticleBlockItem key={index} articleContent={article} />
  ))

  return (
    <section className="block">
      <div className="container">
        <BlockTitle
          location={props.location}
          titleContent={props.content.title}
        />
        <BlockIntro
          location={props.location}
          introContent={props.content.intro}
        />

        <div className={styles.articles}>{articles}</div>
      </div>
    </section>
  )
}
