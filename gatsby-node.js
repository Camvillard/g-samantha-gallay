exports.createPages = ({ graphql, actions }) => {
  const createWpPosts = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)

    query.then(result => {
      console.log(JSON.stringify(result, null, 4))
      resolve()
    }) // query.then
  }) // createWpPosts

  return Promise.all([createWpPosts])
} // createPages
