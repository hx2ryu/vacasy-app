module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@api': './src/api',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@storage': './src/storage',
          '@features': './src/features',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
