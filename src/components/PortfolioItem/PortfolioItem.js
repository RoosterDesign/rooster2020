import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from "./PortfolioItem.module.scss"

export default props => {
  const link = "/portfolio/" + props.slug
  return (
    <BackgroundImage fluid={props.img} className={styles.portfolioThumbnail}>
      <Link className={styles.portfolioThumbnailLink} to={link} rel="preload">
        <div className={styles.portfolioThumbnailLinkContent}>
          <h2>{props.title}</h2>
          <p>{props.synopsis}</p>
        </div>
        <div className={styles.portfolioThumbnailMask}></div>
      </Link>
    </BackgroundImage>
  )
}
