const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDataJson {
        edges {
          node {
            portfolio {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allDataJson.edges[0].node.portfolio.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/portfolio-detail.js`),
      context: {
        node,
      },
    })
  })
}
