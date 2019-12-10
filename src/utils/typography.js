import Typography from "typography"

const typography = new Typography({
  baseFontSize: "10px",
  baseLineHeight: 1.6666,
  headerColor: "#fff",
  bodyColor: "rgba(255,255,255,.8)",
  headerFontFamily: ["Arial", "serif"],
  bodyFontFamily: ["Arial", "serif"],
  overrideStyles: () => ({
    html: {
      "-webkit-font-smoothing": "antialiased",
    },
    p: { fontSize: "1.6rem" },
    a: {
      color: "inherit",
      textDecoration: "none",
    },
    "a:hover": {
      color: "#3498DB",
    },
    "@media screen and (min-width: 768px){ p { font-size: 2rem } }": {},
  }),
})

export default typography
