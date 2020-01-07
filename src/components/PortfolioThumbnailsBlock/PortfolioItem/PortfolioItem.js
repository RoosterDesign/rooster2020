import React from "react"
import styles from "./PortfolioItem.module.scss"
import Hexagon from "../../Hexagon/Hexagon"
import { Link } from "gatsby"

export default props => (
  <Link className={styles.portfolioThumbnail} to={props.content.slug}>
    <Hexagon
      type="portfolio"
      id={props.id}
      src={props.content.thumbnail}
      title={props.content.title}
    />
  </Link>
)
