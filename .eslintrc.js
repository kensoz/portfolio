module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es2021: true
  },

  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],

  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },

  plugins: ['vue', '@typescript-eslint'],

  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': ['error', { html: { void: 'always' } }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
