import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./ArticleBlockItem.module.scss"

export default props => {
  //const imgPath = props.articleContent.img
  const data = useStaticQuery(
    graphql`
      query getImage($imgPath: String) {
        imageOne: file(relativePath: { eq: $imgPath }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
    { fileName: props.articleContent.img }
  )

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
