const { defineStylelintConfig } = require('@ttou/define-config')

module.exports = defineStylelintConfig({
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'prettier/prettier': true,
    'block-no-empty': null,
    'at-rule-no-unknown': [true, { ignoreAtRules: ['/at-root/'] }],
    'property-no-unknown': [true, { ignoreProperties: ['/composes/'] }],
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': null,
    'no-descending-specificity': null,
    'import-notation': null
  }
})
