import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./ArticlesBlock.module.scss"
import ArticleBlockItem from "./ArticleBlockItem/ArticleBlockItem"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"

export default props => {
  const data = useStaticQuery(
    graphql`
      query AllImagesAndJSON {
        images: allFile(
          filter: { sourceInstanceName: { eq: "serviceOverviewImages" } }
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
    const imageIndex = data.images.edges.findIndex(
      x =>
        x.node.name ===
        service.image
          .split(".")
          .slice(0, -1)
          .join(".")
    )
    return (
      <ArticleBlockItem
        img={data.images.edges[imageIndex].node.childImageSharp.fluid}
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
