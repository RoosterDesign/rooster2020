import React from "react"
import PortfolioItem from "./PortfolioItem/PortfolioItem"
import styles from "./PortfolioThumbnailsBlock.module.scss"

export default props => {
  const portfolioItems = props.portfolioItems.map((node, index) => (
    <PortfolioItem key={index} content={node} id={index} />
  ))

  return (
    <section className={styles.portfolioThumbnails}>
      <div className="container">{portfolioItems}</div>
    </section>
  )
}
