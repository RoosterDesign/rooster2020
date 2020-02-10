import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"
import SkillLogo from "./SkillLogo/SkillLogo"
import styles from "./SkillsBlock.module.scss"

export default props => {
  const imageData = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "skillLogos" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 400, quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )

  const datafromjson = props.content.logos

  const skillsLogos = datafromjson.map(skill => {
    const imageIndex = imageData.images.edges.findIndex(
      x =>
        x.node.name ===
        skill.image
          .split(".")
          .slice(0, -1)
          .join(".")
    )
    return (
      <SkillLogo
        img={imageData.images.edges[imageIndex].node.childImageSharp.fluid}
        title={skill.name}
      />
    )
  })

  return (
    <section className="block">
      <div className="container">
        <BlockTitle titleContent={props.content.title} />
        <BlockIntro introContent={props.content.intro} />
        <div className={styles.skillsLogos}>{skillsLogos}</div>
      </div>
    </section>
  )
}
