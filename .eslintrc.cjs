module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
  ],
  "linebreak-style": [
      "error",
      "unix"
  ],
  "semi": [
      "error",
      "always"
  ],
  "key-spacing":"error",
  "eol-last": 2,
  "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  "react/react-in-jsx-scope": "off",
  "react/jsx-uses-react": "off",
  "react/jsx-tag-spacing": 2,
  "object-curly-spacing": ["error", "always"],
  "react/jsx-indent": ["off"],
  "react/jsx-indent-props": ["error", 2],
  "react/prop-types": 0,
  "react/jsx-max-props-per-line": [2, {
    "maximum": 1,
    "when": "always"
  }],
  "arrow-spacing": "error",
  "space-infix-ops": "error",
  "react/jsx-fragments": "error",
  "react/jsx-first-prop-new-line": ["error", "multiline" ],
  "react/jsx-closing-bracket-location": ["error", "line-aligned"],
  "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
  "react/jsx-wrap-multilines": ["error", { 
    "declaration": false, 
    "assignment": false, 
    "return": true, 
    "arrow": false 
  }],
  "max-len": ["error", { "code": 100 }],
  "jsx-quotes": ["error", "prefer-double"],
  "no-trailing-spaces": "error",
  "react/display-name": "off"
  },
}
