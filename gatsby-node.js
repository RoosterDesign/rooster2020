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

  console.log("1: ", JSON.stringify(result, null, 4))
  //   console.log("2: ", JSON.stringify(result.data.allDataJson, null, 4))
  //   console.log("3: ", JSON.stringify(result.data.allDataJson.edges, null, 4))
  //   console.log(
  //     "4: ",
  //     JSON.stringify(result.data.allDataJson.edges.portfolioPageContent, null, 4)
  //   )

  result.data.allDataJson.edges[0].node.portfolio.forEach(node => {
    console.log(node)
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/portfolio-detail.js`),
      context: {
        node,
      },
    })
  })
}
