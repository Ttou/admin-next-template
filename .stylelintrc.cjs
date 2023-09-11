const { defineStylelintConfig } = require('@ttou/define-config')

module.exports = defineStylelintConfig({
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'block-no-empty': null,
    'property-no-unknown': [true, { ignoreProperties: ['/composes/'] }],
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': null,
    'no-descending-specificity': null
  }
})
