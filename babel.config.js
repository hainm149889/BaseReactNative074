module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-reanimated/plugin',
    'module-resolver',
    ['@babel/plugin-transform-private-methods', {loose: true}],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.base.env',
        blocklist: null,
        allowlist: null,
        safe: true,
      },
    ],
  ],
};
