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
          {property: 'og:url', content: 'http://www.decodemtl.com'},
          {property: 'og:type', content: 'website'},
          {property: 'og:title', content: 'Learn to Code at DecodeMTL'},
          {property: 'og:description', content: 'DecodeMTL offer\'s Montreal\'s most dynamic courses in tech. Learn to code through project based teaching from industry experts in a stimulating environment.'},
          {property: 'og:image', content: 'https://www.decodemtl.com/assets/images/video-screenshot.jpg'},
        ]
      },
      fr: {
        defaultTitle: 'DecodeMTL',
        titleTemplate: '%s | DecodeMTL',
        meta: [
          {charset: 'utf-8'},
          {name: 'description', content: 'meta description'},
          {property: 'og:url', content: 'http://www.decodemtl.com'},
          {property: 'og:type', content: 'website'},
          {property: 'og:title', content: 'Learn to Code at DecodeMTL'},
          {property: 'og:description', content: 'DecodeMTL offer\'s Montreal\'s most dynamic courses in tech. Learn to code through project based teaching from industry experts in a stimulating environment.'},
          {property: 'og:image', content: 'https://www.decodemtl.com/assets/images/video-screenshot.jpg'},
        ]
      }
    }
  }
}