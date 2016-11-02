// App configuration for both server and client side. For now it mostly defines the <head> values
module.exports = {
  app: {
    head: {
      en: {
        defaultTitle: 'DecodeMTL',
        titleTemplate: '%s | DecodeMTL',
        meta: [
          {charset: 'utf-8'},
          {name: 'description', content: ''},
          {property: 'og:site_name', content: 'DecodeMTL'},
          {property: 'og:image', content: 'favicon-large'},
          {property: 'og:title', content: 'DecodeMTL'},
          {property: 'og:description', content: 'Become a web developer, launch a start-up, or add a new skill to your resume with DecodeMTL’s coding courses. Click to learn more.'},
          {property: 'og:site', content: '@decodemtl'},
          {property: 'og:creator', content: '@ZiadDotHTML'}
        ]
      },
      fr: {
        defaultTitle: 'DecodeMTL',
        titleTemplate: '%s | DecodeMTL',
        meta: [
          {charset: 'utf-8'},
          {name: 'description', content: 'meta description'},
          {property: 'og:site_name', content: 'DecodeMTL'},
          {property: 'og:image', content: 'favicon-large'},
          {property: 'og:title', content: 'DecodeMTL'},
          {property: 'og:description', content: 'meta description'},
          {property: 'og:site', content: '@decodemtl'},
          {property: 'og:creator', content: '@ZiadDotHTML'}
        ]
      }
    }
  }
}
