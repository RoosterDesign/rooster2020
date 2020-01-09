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
  `)

  result.data.allDataJson.edges[0].node.portfolio.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/portfolio-detail.js`),
      context: {
        /*
        the value passed in the context will be available for you to use in your page queries as a GraphQL variable, as per the template snippet */

        slug: node.slug,
      },
    })
  })
}
