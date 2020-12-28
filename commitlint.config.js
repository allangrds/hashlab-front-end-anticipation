module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', [
      'lower-case',
      'camel-case',
      'pascal-case',
      'kebab-case',
    ]],
    'scope-max-length': [2, 'always', 80],
  },
}
