import React from "react"
import styles from "./ContactForm.module.scss"

export default () => (
  <div className="container">
    <form className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label>Your Name</label>
      </div>
      <div className={styles.formGroup}>
        <label>Email Address</label>
      </div>
      <div className={styles.formGroup}>
        <label>Your Enquiry</label>
      </div>
    </form>
  </div>
)
