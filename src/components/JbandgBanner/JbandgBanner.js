import React from "react"
import styles from "./JbandgBanner.module.scss"
import jbandgLogo from "../../images/jbandg-logo.png"

export default () => (
  <div className="container">
    <div className={styles.jbandgBanner}>
      <picture className={styles.jbandgLogo}>
        <img src={jbandgLogo} alt="jbandg" />
      </picture>
      <p>
        Ran by myself and a fellow developer, jbandg boasts over 20 years
        combined experience and creates beautiful, intuitive experiences for
        small to medium sized businesses. We offer bespoke design and
        development solutions which range from brochure sites, to online shops
        and software applications.
        <br />
        <br />
        <a
          href="https://www.jbandg.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to visit jbandg
        </a>
      </p>
    </div>
  </div>
)
