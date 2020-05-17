
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#F158C7' },
  /*
  ** Global CSS
  */
  css: [
    "~/assets/style/bootstrap.min.css",
    "~/assets/style/animation.css"
  ],

  env: {
    baseUrl: "https://nuxt-project-a1008.firebaseio.com"
  },


  router: {
    extendRoutes(routes, resolve){
       routes.push({
         path: "/my-page",
         component: resolve(__dirname, "pages/test.vue")
       });
    }
  },


  transition: {
    name: "layout",
    mode: "out-in"
  },

    /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxyHeaders: false
  },

  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
