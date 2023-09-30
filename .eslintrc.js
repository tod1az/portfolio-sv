module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,tsx,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-misused-promises': 'off'
  }
}
