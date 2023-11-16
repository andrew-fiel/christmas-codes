/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import path from 'path'

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = ({ actions }) => {
  const { createPage } = actions

  type Page = {
    url: string,
    player: string,
    word: string,
    destination: string,
  }

  const pages: Page[] = [
    {
      url: '/pygoscelis',
      player: 'Jill',
      word: 'brawler',
      destination: 'https://support.apple.com/en-us/HT201209'
    },
    {
      url: '/eudyptes',
      player: 'Jill',
      word: 'jillieb',
      destination: 'https://www.nytimes.com/activate-access/digital-gift'
    },
    {
      url: '/spheniscus',
      player: 'Al',
      word: 'story',
      destination: 'https://www.audible.com/mk/g/giftcenter'
    },
    {
      url: '/aptenodytes',
      player: 'Jennie',
      word: 'glass',
      destination: 'https://glassartkalamazoo.org/'
    }
  ]

  pages.forEach(({url, player, destination, word}) =>
    createPage({
      path: url,
      component: path.resolve('./src/templates/Wordle.tsx'),
      context: {
        player: player,
        destination: destination,
        word: word
      },
    })
  )
}
