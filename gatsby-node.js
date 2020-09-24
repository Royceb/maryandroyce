/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = async ({ page, actions }) => {
  const path = require('path')
  const { createPage } = actions
  createPage({
    path: `/rsvp`,
    component: path.resolve(`./src/pages/index.js`),
  })
  createPage({
    path: `/virtualrsvp`,
    component: path.resolve(`./src/pages/index.js`),
  })
}
