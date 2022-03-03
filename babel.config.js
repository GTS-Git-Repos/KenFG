module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@constants': './src/constants/appConstants',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
