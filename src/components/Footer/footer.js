import React from "react"
import { Link } from "gatsby"

import styles from "./Footer.module.scss"

export default () => (
  <footer className={styles.siteFooter}>
    <div className="container">
      <p>
        ©2019 Rooster Design <br />
        <Link to="/privacy" className={styles.siteFooterLink}>
          Privacy &amp; Legal
        </Link>
      </p>
      <p>
        Rooster Design is registered in England and Wales, No. 07335844. VAT No.
        996320685
      </p>
      <p>Registered Address: 7 Dale Close, Long Itchington, CV47 9SE</p>
    </div>
  </footer>
)
