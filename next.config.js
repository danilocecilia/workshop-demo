const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({})
// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//   cssModules: true,
// })

const sass = withCSS(
  withSass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      })

      return config
    },
  })
)

// module.exports = withCSS(
//   withSass({
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 100000,
//           },
//         },
//       })

//       return config
//     },
//   })
// )

module.exports = withPlugins([sass, withImages])
