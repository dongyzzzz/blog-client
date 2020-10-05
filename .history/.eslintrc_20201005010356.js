module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module"
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  plugins: ["html"],
  extends: ["eslint:recommended"],
  globals: {
    __WEEX__: true,
    WXEnvironment: true
  },
  rules: {
    "no-console": process.env.NODE_ENV !== "production" ? 0 : 2,
    "no-useless-escape": 0,
    "no-empty": 0
  }
};
