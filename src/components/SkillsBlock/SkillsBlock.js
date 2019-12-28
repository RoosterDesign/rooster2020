import React from "react"

import styles from "./SkillsBlock.module.scss"

import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"
import SkillLogo from "../SkillLogo/SkillLogo"

export default props => {
  const logos = props.content.logos.map((logo, index) => (
    <SkillLogo key={index} logoContent={logo} />
  ))

  return (
    <section className={styles.skillsLogosBlock}>
      <div className="container">
        <BlockTitle titleContent={props.content.title} />
        <BlockIntro introContent={props.content.intro} />
        <div className={styles.skillsLogos}>{logos}</div>
      </div>
    </section>
  )
}
