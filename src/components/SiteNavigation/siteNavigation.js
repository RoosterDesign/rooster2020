import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import SiteNavigationItem from "./SiteNavigationItem/SiteNavigationItem"
import styles from "./SiteNavigation.module.scss"

class SiteNavigation extends Component {
  state = {
    navOpen: false,
  }

  toggleNav = () => {
    this.setState({ navOpen: !this.state.navOpen })
  }

  render() {
    const { data } = this.props
    const siteLinks = data.allSite.edges[0].node.siteMetadata.menuLinks.map(
      (item, index) => <SiteNavigationItem key={index} item={item} />
    )

    let burgerClass, navMaskClass, navClass
    if (this.state.navOpen) {
      burgerClass = [styles.hamburger, styles.hamburgerOpen].join(" ")
      navMaskClass = [styles.navMask, styles.navMaskOpen].join(" ")
      navClass = [styles.siteNavigation, styles.siteNavigationOpen].join(" ")
    } else {
      burgerClass = styles.hamburger
      navMaskClass = styles.navMask
      navClass = styles.siteNavigation
    }

    return (
      <>
        <div
          role="button"
          tabIndex="0"
          className={burgerClass}
          onClick={this.toggleNav}
          onKeyDown={this.toggleNav}
        >
          <div className={styles.hamburgerInner}></div>
        </div>
        <div className={navClass}>
          <ul className={styles.siteNavigationList}>{siteLinks}</ul>
        </div>
        <div className={navMaskClass}></div>
      </>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allSite {
          edges {
            node {
              siteMetadata {
                menuLinks {
                  link
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={data => <SiteNavigation data={data} {...props} />}
  />
)
