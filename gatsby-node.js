const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allPortfolioJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allPortfolioJson.edges.forEach(({ node }) => {
    createPage({
      path: "/portfolio/" + node.slug,
      component: path.resolve(`./src/templates/portfolio-detail.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
