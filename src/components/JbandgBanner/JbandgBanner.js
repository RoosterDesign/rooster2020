import React from "react"
import styled from "styled-components"
import styles from "./JbandgBanner.module.scss"
import jbandgLogo from "../../images/jbandg-logo.png"

const JbandgLinkContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 48px;
  @media (min-width: 768px) {
    padding-bottom: 60px;
  }
  @media (min-width: 992px) {
    padding-bottom: 80px;
  }
  @media (min-width: 1250px) {
    padding-bottom: 120px;
  }
`

export default () => (
  <JbandgLinkContainer className="container">
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
  </JbandgLinkContainer>
)
