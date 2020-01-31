import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./ClientLogosBlock.module.scss"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"
import ClientLogo from "../ClientLogo/ClientLogo"

export default props => {
  const logosData = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "clientLogos" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 358) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )

  const logos = logosData.images.edges.map((img, index) => {
    const clientName = img.node.name.replace(/-/g, " ")
    return (
      <ClientLogo
        key={index}
        img={img.node.childImageSharp.fluid}
        clientName={clientName}
      />
    )
  })

  return (
    <section className="block">
      <div className="container">
        <BlockTitle titleContent={props.content.title} />
        <BlockIntro introContent={props.content.intro} />
        <div className={styles.clientLogos}>{logos}</div>
      </div>
    </section>
  )
}
