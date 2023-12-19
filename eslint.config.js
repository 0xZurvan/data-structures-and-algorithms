const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  typescript: true,

  jsonc: false,
  yaml: false,

  ignores: [
    './fixtures',
    // ...globs
  ]
})
