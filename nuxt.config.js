// const styleLoader = require('nuxt/lib/builder/webpack/style-loader.js');

const pkg = require('./package');

module.exports = {
  mode: 'universal',
  cache: false,
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Generate location
  */
  generate: {
    dir: 'dist'
  },

  /*
  ** Router
  */
  router: {
    base: process.env.DEPLOY_ENV === 'STATIC' ? '/nuxt-blog/' : '/'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  // css: ['element-ui/lib/theme-chalk/index.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '~plugins/persistedstate.js', ssr: false },
    { src: '~plugins/mavon-editor.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    extractCSS: true,
    filenames: {
      vendor: 'vendor.[hash:12].js',
      app: 'hare.[chunkhash:12].js',
      css: 'hare.[contenthash:12].css'
    },
    vendor: ['axios'],
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ],
        'date-fns'
      ]
    },
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    // postcss: [
    //   require('autoprefixer')({
    //     browsers: ['last 3 versions']
    //   })
    // ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
        // config.module.rules.push({
        //   test: /\.sss$/,
        //   use: styleLoader.call(this, 'css', 'postcss-loader')
        // });
      }
    }
  }
};
