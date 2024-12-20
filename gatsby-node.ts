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

  const SHARED_LIZ_PATH = '/smh';

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
    },
    {
      url: '/megadyptes',
      player: 'Liz',
      word: 'booze',
      destination: SHARED_LIZ_PATH
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

  createPage({
    path: SHARED_LIZ_PATH,
    component: path.resolve('./src/templates/FauxTicket.tsx'),
    context: {
      text: '1 Free Drink'
    },
  })

  createPage({
    path: 'mysterium',
    component: path.resolve('./src/templates/AnEncounter.tsx'),
    context: {},
  })
}
