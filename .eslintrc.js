module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaFeatures: {
      jsx: true,
      blockBindings: true
    }
  },
  extends: ['@nuxtjs'],
  // add your custom rules here
  rules: {
    semi: 0,
    'no-console': 0,
    'no-debugger': 0,
    camelcase: 0,
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/attribute-hyphenation': 0,
    'vue/max-attributes-per-line': 0,
    'vue/no-v-html': 0,
    'vue/html-indent': 0,
    'vue/multiline-html-element-content-newline': 0,
    'space-before-function-paren': 0
  }
}
