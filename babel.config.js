module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@assets': './assets',
          '@src': './src',
          '@api': './src/api',
          '@app': './src/app',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@modules': './src/modules',
          '@services': './src/services',
          '@shared': './src/shared',
          '@theme': './src/theme',
          '@customTypes': './src/customTypes',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
