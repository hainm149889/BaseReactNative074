module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-reanimated/plugin',
    'module-resolver',
    ['@babel/plugin-transform-private-methods', {loose: true}],
  ],
};
