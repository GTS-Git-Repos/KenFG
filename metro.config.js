/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  /* General options */
  resetCache:false,
  maxWorkers:10,
  transformer: {
    hermesParser:true,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        // inlineRequires: true,
      },
    }),
  },
};
