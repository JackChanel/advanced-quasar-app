module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    ecmaVersion: "2021" // Allows for the parsing of modern ECMAScript features
  },

  env: {
    node: true,
    browser: true,
    "vue/setup-compiler-macros": true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    "alloy",
    "alloy/vue",
    "plugin:vue/vue3-essential",
    "prettier",
    "./.eslintrc-auto-import.json"
  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    // required to lint *.vue files
    "vue",

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
    "prettier"
  ],

  globals: {
    ga: "readonly", // Google Analytics
    cordova: "readonly",
    __statics: "readonly",
    __QUASAR_SSR__: "readonly",
    __QUASAR_SSR_SERVER__: "readonly",
    __QUASAR_SSR_CLIENT__: "readonly",
    __QUASAR_SSR_PWA__: "readonly",
    process: "readonly",
    Capacitor: "readonly",
    chrome: "readonly"
  },

  // add your custom rules here
  rules: {
    "prefer-promise-reject-errors": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-deprecated-v-on-native-modifier": "off",
    "vue/no-deprecated-filter": "off",
    "vue/no-mutating-props": "off",
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
