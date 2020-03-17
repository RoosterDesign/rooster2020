import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from "./PortfolioItem.module.scss"

export default props => {
  const { img, slug, flag, title, synopsis } = props
  const link = "/portfolio/" + props.slug

  let flagClassName, flagLabel
  if (flag === "design") {
    flagClassName = [styles.portfolioThumbnailFlag, styles.design].join(" ")
    flagLabel = "UI/UX"
  } else if (flag === "dev") {
    flagClassName = [styles.portfolioThumbnailFlag, styles.dev].join(" ")
    flagLabel = "Dev"
  } else {
    flagClassName = [styles.portfolioThumbnailFlag, styles.both].join(" ")
    flagLabel = "UI/UX + Dev"
  }

  return (
    <BackgroundImage
      fluid={img}
      className={styles.portfolioThumbnail}
      id={slug}
    >
      <Link className={styles.portfolioThumbnailLink} to={link} rel="preload">
        <span className={flagClassName}>{flagLabel}</span>
        <div className={styles.portfolioThumbnailLinkContent}>
          <h2>{title}</h2>
          <p>{synopsis}</p>
        </div>
        <div className={styles.portfolioThumbnailMask}></div>
      </Link>
    </BackgroundImage>
  )
}
