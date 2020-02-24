import React from "react"
import styles from "./BlockIntro.module.scss"

class BlockIntro extends React.Component {
  componentDidMount() {
    this.isHomepage = window.location.pathname === "/" ? "home" : null
  }

  render() {
    const classname =
      this.isHomepage === "home"
        ? [styles.blockIntro, styles.isHomepage].join(" ")
        : styles.blockIntro
    return (
      <div
        className={classname}
        dangerouslySetInnerHTML={{ __html: this.props.introContent }}
      ></div>
    )
  }
}

export default BlockIntro
