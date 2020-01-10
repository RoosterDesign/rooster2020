import React from "react"
import { Link } from "gatsby"
import styles from "./PortfolioItem.module.scss"
import Hexagon from "../Hexagon/Hexagon"

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
