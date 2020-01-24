import React from "react"
import styled from "styled-components"
import styles from "./JbandgBanner.module.scss"

const JbandgLinkContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 48px;
`

export default () => (
  <JbandgLinkContainer className="container">
    <div className={styles.jbandgBanner}>
      <p>
        Ran by myself and a fellow developer, jbandg boasts over 20 years
        combined experience and creates beautiful, intuitive experiences for
        small to medium sized businesses. We offer bespoke design and
        development solutions which range from brochure sites, to online shops
        and software applications.
      </p>
      <p>
        <a href="https://www.jbandg.co.uk/" target="_blank">
          Click here to visit jbandg
        </a>
      </p>
    </div>
  </JbandgLinkContainer>
)
