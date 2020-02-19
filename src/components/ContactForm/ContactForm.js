import React from "react"
import styles from "./ContactForm.module.scss"

export default () => (
  <div className="container">
    <form
      action="/success"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className={styles.contactForm}
    >
      <label>
        Don’t fill this out if you're human:
        <input name="bot-field" />
      </label>

      <div className={styles.formGroup}>
        <label>Your Name</label>
        <input type="text" name="name" />
      </div>
      <div className={styles.formGroup}>
        <label>Email Address</label>
        <input type="email" name="email" />
      </div>
      <div className={styles.formGroup}>
        <label>Your Enquiry</label>
        <textarea name="message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
)
