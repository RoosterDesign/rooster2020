import React, { Component } from "react"
import SiteHeader from "../SiteHeader/SiteHeader"
import RoosterBg from "../RoosterBg/RoosterBg"
import styles from "./Masthead.module.scss"
import masheadSwoop from "../../images/masthead-swoop.svg"

class Masthead extends Component {
  constructor() {
    super()
    this.location = window.location.pathname
  }

  render() {
    console.info(this.location)

    return (
      <div
        className={
          this.location === "/"
            ? [styles.masthead, styles.isHomepage].join(" ")
            : styles.masthead
        }
      >
        <div className="container">
          <SiteHeader />
          <div className={styles.mastheadContent}>{this.props.children}</div>
        </div>
        <img
          src={masheadSwoop}
          alt="Rooster Design Ltd"
          className={
            this.location === "/" || this.location === "/success/"
              ? [styles.mastheadSwoop, styles.isHidden].join(" ")
              : styles.mastheadSwoop
          }
        />
        <RoosterBg />
      </div>
    )
  }
}

export default Masthead
