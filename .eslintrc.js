module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [
    {
      files: ["**/*.test.js"],
      env: {
        jest: true
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    quotes: ["warn", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ["error", "always"],
    "comma-dangle": ["error", "never"],
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": 0,
    "no-unused-vars": "warn"
  }
};
