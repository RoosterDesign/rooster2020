import React from "react"
import BackgroundImage from "gatsby-background-image"
import styles from "./PortfolioItem.module.scss"
import { Link } from "gatsby"

export default props => {
  const link = "/portfolio/" + props.slug
  return (
    <BackgroundImage fluid={props.img} className={styles.portfolioThumbnail}>
      <Link className={styles.portfolioThumbnailLink} to={link}>
        <div className={styles.portfolioThumbnailLinkContent}>
          <h2>{props.title}</h2>
          <p>{props.synopsis}</p>
        </div>
      </Link>
    </BackgroundImage>
  )
}
