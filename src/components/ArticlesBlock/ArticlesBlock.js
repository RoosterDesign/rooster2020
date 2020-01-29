import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import styles from "./ArticlesBlock.module.scss"
// import ArticleBlockItem from "./ArticleBlockItem/ArticleBlockItem"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"

export default props => {
  const data = useStaticQuery(
    graphql`
      fragment fixedImage on File {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      query {
        imageOne: file(
          relativePath: { eq: "services-overview/contacting.jpg" }
        ) {
          ...fixedImage
        }
        imageTwo: file(
          relativePath: { eq: "services-overview/outsourcing.jpg" }
        ) {
          ...fixedImage
        }
        imageThree: file(
          relativePath: { eq: "services-overview/freelance.jpg" }
        ) {
          ...fixedImage
        }
      }
    `
  )

  // const articles = props.content.articles.map((article, index) => (
  //   <ArticleBlockItem key={index} articleContent={article} />
  // ))

  return (
    <section className="block">
      <div className="container">
        <BlockTitle titleContent={props.content.title} />
        <BlockIntro introContent={props.content.intro} />
        {/* <div className={styles.articles}>{articles}</div> */}

        <Img fluid={data.imageOne.childImageSharp.fluid} />
        <Img fluid={data.imageTwo.childImageSharp.fluid} />
        <Img fluid={data.imageThree.childImageSharp.fluid} />
      </div>
    </section>
  )
}
