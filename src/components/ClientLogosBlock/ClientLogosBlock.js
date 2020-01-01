import React from "react"
import styles from "./ClientLogosBlock.module.scss"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"
import ClientLogo from "../ClientLogo/ClientLogo"

export default props => {

  const rows = []
  const currentRo
  const logos = props.content.logos.map((logo, index) => (
    <ClientLogo key={index} logoContent={logo} />
  ))

  return (
    <section className={styles.clientLogosBlock}>
      <div className="container">
        <BlockTitle titleContent={props.content.title} />
        <BlockIntro introContent={props.content.intro} />
        <div className={styles.clientLogos}>{logos}</div>
      </div>
    </section>
  )
}
