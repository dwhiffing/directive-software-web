const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { blogQuery } = require('./src/utils/blogQuery')
const { data: gameData } = require('./src/data/games')
const { data: appData } = require('./src/data/apps')
const slugify = require('slugify')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const game = path.resolve('./src/templates/game.js')
    gameData.forEach(({ title }) => {
      createPage({
        path: `/games/${slugify(title).toLowerCase()}`,
        component: game,
        context: {
          title: slugify(title).toLowerCase(), // send this to the component itself as a prop
        },
      })
    })
    const app = path.resolve('./src/templates/app.js')
    appData.forEach(({ title }) => {
      createPage({
        path: `/apps/${slugify(title).toLowerCase()}`,
        component: app,
        context: {
          title: slugify(title).toLowerCase(), // send this to the component itself as a prop
        },
      })
    })

    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(blogQuery).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            // path: post.node.fields.slug,
            path: post.node.frontmatter.path,
            component: blogPost,
            context: {
              // slug: post.node.fields.slug,
              slug: post.node.frontmatter.path,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
