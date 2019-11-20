/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  // This causes Metro to even look outside the tree in
  // the first place.
  watchFolders: [
    path.resolve(__dirname, '../shared'),
    path.resolve(__dirname, '../shared/node_modules'),
  ],
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          return path.join(__dirname, `node_modules/${name}`);
        },
      }
    ),
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
  },
};
