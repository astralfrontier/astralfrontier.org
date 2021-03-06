const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
    createNodeField({
      name: `path`,
      node,
      value: node.frontmatter.path || slug
    })
  }
}

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const pageListTemplate = path.resolve(`src/templates/page-list.tsx`)
  const pageTemplate = path.resolve(`src/templates/page.tsx`)
  const POSTS_PER_PAGE = 3 * 6 // 3 columns, 6 rows

  const posts = result.data.allMarkdownRemark.edges
  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page/${i + 1}`,
      component: pageListTemplate,
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: pageTemplate,
      context: {},
    })
  })
}