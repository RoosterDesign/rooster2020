import React, { Component } from "react"
import styles from "./MastheadBody.module.scss"

class MastheadBody extends Component {
  componentDidMount() {
    this.location = window.location.pathname
  }

  render() {
    const classname =
      this.location === "home"
        ? [styles.mastheadBody, styles.isHomepage].join(" ")
        : styles.mastheadBody
    return <div className={classname}>{this.props.children}</div>
  }
}

export default MastheadBody
