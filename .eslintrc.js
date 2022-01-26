module.exports = {
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest'
  },

  plugins: ['simple-import-sort'],

  extends: [
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:storybook/recommended',
    'prettier'
  ],

  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'multiline-ternary': ['warn', 'always-multiline'],
    quotes: ['error', 'single', 'avoid-escape'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error',
    'vue/multi-word-component-names': 'off'
  }
}
