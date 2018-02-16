module.exports = {
  head: {
    title: 'Fitness',
    titleTemplate: 'Fitness - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Fitness site" }
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.slim.min.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css' }
    ]
  },
  css: ['~assets/css/main.css', 'bulma/css/bulma.css'],
  loading: { color: '#3B8070' },
  build: {    
    vendor: [
      'axios',
      'lodash'
    ]
  },
  plugins: [
    // ssr: false to only include it on client-side
    // { src: '~/plugins/vue-notifications.js', ssr: false }
  ],
  env: {
    url: 'http://localhost:3000',
    port: 3000
  }
};
