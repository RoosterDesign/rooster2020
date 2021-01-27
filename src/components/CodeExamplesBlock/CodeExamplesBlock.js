import React from "react"
import styles from "./CodeExamplesBlock.module.scss"
import BlockTitle from "../BlockTitle/BlockTitle"
import BlockIntro from "../BlockIntro/BlockIntro"
import githubIcon from "../../images/icons/github-brands.svg"

export default props => {
  return (
    <section className="block">
      <div className="container">
        <BlockTitle titleContent={props.content.title} />
        <BlockIntro introContent={props.content.intro} />
        <div className={styles.repoWrap}>
          {props.content.repos.map((repo, index) => {
            return (
              <a
                href={repo.url}
                key={index}
                className={styles.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {console.info(repo)}
                <img src={githubIcon} alt={repo.name} className={styles.icon} />
                <span className={styles.name}>
                  {repo.name} <br /> <small>{repo.tech}</small>
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
