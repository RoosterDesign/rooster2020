import React from "react"
import styles from "./PortfolioItem.module.scss"
import { Link } from "gatsby"

export default props => {
  console.log(props)

  return (
    <div>
      <Link to={props.content.slug}>{props.content.title}</Link>
    </div>
  )
}
