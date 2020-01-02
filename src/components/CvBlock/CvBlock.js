import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./CvBlock.module.scss"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"

export default props => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <section className="block">
      <div className="container">
        <BlockTitle titleContent={props.content.title} />
        <BlockIntro introContent={props.content.intro} />

        <a
          className={styles.cvButton}
          href={data.allFile.edges[0].node.publicURL}
          download
        >
          <span className={styles.label1}>{props.content.btn.label1}</span>
          <span className={styles.label2}>{props.content.btn.label2}</span>
          <span className={styles.fileInfo}>{props.content.btn.fileInfo}</span>
        </a>
      </div>
    </section>
  )
}
