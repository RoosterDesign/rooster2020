import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const LinkList = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/">
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ textShadow: `none`, backgroundImage: `none` }}>
          <LinkList to="/">Homepage</LinkList>
          <LinkList to="/about">About</LinkList>
          <LinkList to="/services">Services</LinkList>
          <LinkList to="/portfolio">Portfolio</LinkList>
          <LinkList to="/contact">Contact</LinkList>
        </ul>
      </header>
      {children}
    </div>
  )
}
