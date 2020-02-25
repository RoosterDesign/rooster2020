import React from "react"
import styles from "./ContactForm.module.scss"

export default () => (
  <div className="container">
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className={styles.contactForm}
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>
          Your Name
          <input className={styles.formInput} type="text" name="name" />
        </label>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>
          Your Email
          <input className={styles.formInput} type="email" name="email" />
        </label>
      </div>

      <div className={styles.formGroupFull}>
        <label for="message" className={styles.formLabel}>
          Message
          <textarea className={styles.formTextarea} name="message"></textarea>
        </label>
      </div>

      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  </div>
)
