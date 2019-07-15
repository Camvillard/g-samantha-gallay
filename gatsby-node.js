const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const createWpPosts = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              categories {
                name
                id
              }
              wordpress_id
              content
              title
              excerpt
            }
          }
        }
      }
    `)
    // we need the wordpress_id to match the categories after

    query.then(result => {
      if (result.errors) {
        console.error(results.errors)
        reject(result.error)
      }

      const postEdges = result.data.allWordpressPost.edges

      postEdges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: path.resolve(`./src/templates/post.jsx`),
          context: {
            id: edge.node.id,
            postId: edge.node.wordpress_id
          },
        })
      })
      resolve()
    }) // query.then
  }) // createWpPosts

  const createWpPages = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPage {
          edges {
            node {
              id
              slug
              content
              title
            }
          }
        }
      }
    `)

    query.then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.errors)
      }

      const pageEdges = result.data.allWordpressPage.edges
      pageEdges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: path.resolve(`./src/templates/page.jsx`),
          context: {
            id: edge.node.id,
            slug: edge.node.slug
          },
        })
      })

      resolve()
    }) // query.then
  }) // createWpPages

  const createWpCategories = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressCategory {
          edges {
            node {
              id
              slug
              name
            }
          }
        }
      }
    `)

    query.then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.errors)
      }

      const catEdges = result.data.allWordpressCategory.edges
      catEdges.forEach(edge => {
        createPage({
          path: `/categorie/${edge.node.slug}`,
          component: path.resolve(`./src/templates/category.jsx`),
          context: {
            id: edge.node.id,
            slug: edge.node.slug
          },
        })
      })

      resolve()
    }) // query.then
  }) // createWpPages

  return Promise.all([createWpPosts, createWpPages, createWpCategories])
} // createPages






