import React from "react"
import styles from "./ClientLogo.module.scss"

export default props => (
  <div className={styles.clientLogo}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 260"
    >
      <defs>
        <pattern
          id="image-bg"
          x="0"
          y="0"
          height="100%"
          width="100%"
          patternUnits="userSpaceOnUse"
        >
          <image
            width="300"
            height="260"
            xlinkHref={props.logoContent.src}
          ></image>
        </pattern>
      </defs>

      <path
        d="M4.999999999999999 138.5640646055102Q0 129.9038105676658 4.999999999999999 121.24355652982142L70 8.660254037844387Q75 0 85 0L215 0Q225 0 230 8.660254037844387L295 121.24355652982142Q300 129.9038105676658 295 138.5640646055102L230 251.1473670974872Q225 259.8076211353316 215 259.8076211353316L85 259.8076211353316Q75 259.8076211353316 70 251.1473670974872Z"
        fill="url('#image-bg')"
      />
    </svg>
  </div>
)
