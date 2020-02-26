import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styles from "./ContactForm.module.scss"

export default () => (
  <div className="container">
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={styles.contactForm}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>
          Your Name
          <input
            className={styles.formInput}
            type="text"
            name="name"
            onFocus={() => scrollTo("form")}
            required
          />
        </label>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel}>
          Your Email
          <input
            className={styles.formInput}
            type="email"
            name="email"
            onFocus={() => scrollTo("form")}
            required
          />
        </label>
      </div>

      <div className={styles.formGroupFull}>
        <label for="message" className={styles.formLabel}>
          Message
          <textarea
            className={styles.formTextarea}
            name="message"
            onFocus={() => scrollTo("form")}
            required
          ></textarea>
        </label>
      </div>

      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  </div>
)
