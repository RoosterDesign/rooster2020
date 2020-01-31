import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./ArticlesBlock.module.scss"
import ArticleBlockItem from "./ArticleBlockItem/ArticleBlockItem"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"

export default props => {
  const imageData = useStaticQuery(
    graphql`
      query {
        images: allFile(
          filter: { sourceInstanceName: { eq: "articleImages" } }
        ) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const datafromjson = props.content.articles

  const services = datafromjson.map(service => {
    const imageIndex = imageData.images.edges.findIndex(
      x =>
        x.node.name ===
        service.image
          .split(".")
          .slice(0, -1)
          .join(".")
    )
    return (
      <ArticleBlockItem
        img={imageData.images.edges[imageIndex].node.childImageSharp.fluid}
        title={service.title}
        body={service.body}
      />
    )
  })

  return (
    <section className="block">
      <div className="container">
        <BlockTitle titleContent={props.content.title} />
        <BlockIntro introContent={props.content.intro} />
        <div className={styles.articles}>{services}</div>
      </div>
    </section>
  )
}
