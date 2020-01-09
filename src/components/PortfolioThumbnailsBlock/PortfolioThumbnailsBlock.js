import React from "react"
import PortfolioItem from "./PortfolioItem/PortfolioItem"
import styles from "./PortfolioThumbnailsBlock.module.scss"

export default props => {
  return (
    <section className={styles.portfolioThumbnails}>
      <div className="container">{portfolioItems}</div>
    </section>
  )
}
