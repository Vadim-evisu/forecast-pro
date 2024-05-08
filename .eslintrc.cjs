module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@stylistic/quotes": ["error", "single"],
    "@stylistic/semi": ["error", "always"],
    "@stylistic/array-bracket-spacing": ["warn", "always"],
    "@stylistic/object-curly-spacing": ["warn", "always"],
    "@stylistic/max-len": ["warn"],
    'no-restricted-imports': ["error", {
      "patterns": ["*/modules/*/*"]
    }]
  },
}
