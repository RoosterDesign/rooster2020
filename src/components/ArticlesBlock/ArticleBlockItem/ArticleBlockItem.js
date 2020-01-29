import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./ArticleBlockItem.module.scss"

export default props => {
  console.info(props.articleContent.img)
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(
        relativePath: { eq: "services-overview/outsourcing.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.articleItem}>
      <Img
        fluid={data.imageOne.childImageSharp.fluid}
        alt={props.articleContent.title}
        className={styles.articleItemImg}
      />
      <h2 className={styles.articleItemTitle}>{props.articleContent.title}</h2>
      <p className={styles.articleItemBody}>{props.articleContent.body}</p>
    </div>
  )
}
