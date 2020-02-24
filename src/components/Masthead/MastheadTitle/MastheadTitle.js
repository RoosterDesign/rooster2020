import React, { Component } from "react"
import styles from "./MastheadTitle.module.scss"

class MastheadTitle extends Component {
  componentDidMount() {
    this.location = window.location.pathname
  }

  render() {
    const classname =
      this.location === "home"
        ? [styles.mastheadTitle, styles.isHomepage].join(" ")
        : styles.mastheadTitle
    return (
      <h1
        className={classname}
        dangerouslySetInnerHTML={{ __html: this.props.mastheadTitle }}
      ></h1>
    )
  }
}

export default MastheadTitle
