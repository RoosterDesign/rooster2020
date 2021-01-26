import React from "react"
import { Link } from "gatsby"
import ToTop from "./ToTop/ToTop"
import styles from "./Footer.module.scss"

export default () => (
  <footer className={styles.siteFooter}>
    <ToTop />
    <div className="container">
      <p>
        ©{new Date().getFullYear()} Rooster Design <br />
        <Link to="/privacy" className={styles.siteFooterLink}>
          Privacy &amp; Legal
        </Link>
        <a
          href="https://www.linkedin.com/in/roosterdesign/"
          target="_blank"
          className={styles.siteFooterLink}
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        Rooster Design is registered in England and Wales, No: 07335844, VAT No:
        996320685
      </p>
      <p>Registered Address: 7 Dale Close, Long Itchington, CV47 9SE</p>
    </div>
  </footer>
)
