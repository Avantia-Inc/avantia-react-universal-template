module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
