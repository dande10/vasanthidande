export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/particles.js'
    { src: '@/plugins/particles', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
    'nuxt-markdown',
  ],
  markdown: {
    markdown: {
      collections: [
        {
          name: 'blog',
          directory: 'content/posts',
          includeSubdirectories: true,
          routePrefix: '/blog/',
          serverTransform(collection, { generateRoutes }) {
            collection.forEach(({ content, data }) => {
              data.mins = Math.round(content.split(' ').length / 250) || 1
              data.tags = data.tags.map((tag) => {
                return {
                  name: tag,
                  path: `/tags/${tag}`
                }
              })
              generateRoutes(...data.tags.map((tag) => tag.path))
            })

            return collection.sort((a, b) => b.data.date - a.data.date)
          },
          clientTransform() {
            return function (collection) {
              collection.forEach((data) => {
                data.date = new Date(data.date)
              })

              return collection
            }
          }
        },
        {
          name: 'projects',
          directory: 'content/projects',
          includeSubdirectories: false,
          routePrefix: '/projects/',
          clientTransform() {
            return function (collection) {
              collection.forEach((data) => {
                data.date = new Date(data.date)
              })

              return collection
            }
          }
        }
      ],

      grayMatter: {}
    }

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      '@nuxtjs/color-mode',
      '@nuxt/content'
    ],
    content: {
      // https://content.nuxtjs.org/api/configuration
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    }
  }
