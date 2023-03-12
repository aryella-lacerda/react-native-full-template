module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@services': './src/global/services',
          '@navigation': './src/global/navigation',
          '@features': './src/features',
        },
      },
    ],
    'react-native-reanimated/plugin', // Must be listed last
  ],
};
