import { axiosInstance } from './plugins/axios.js'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],
  // https://axios.nuxtjs.org/options#proxy
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      // http://localhost:3000/api/get にアクセスすると https://postman-echo.com/get にリクエストする
      target: 'https://postman-echo.com',
      pathRewrite: { '^/api': '' }
    }
  },
  sitemap: {
    hostname: 'http://www.example.com',
    routes: async () => {
      const { data } = await axiosInstance.get('/api/get?foo1=bar1&foo2=bar2')
      return Object.values(data.args).map(v => `/${v}`)
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
