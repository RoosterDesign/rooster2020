import React from "react"
import { Link } from "gatsby"
import styles from "./PortfolioItem.module.scss"

export default props => (
  <Link className={styles.portfolioThumbnail} to={props.content.slug}>
    {props.id}
    {props.content.thumbnail}
    {props.content.title}
  </Link>
)
