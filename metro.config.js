// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// module.exports = function (baseConfig) {
//   const defaultConfig = mergeConfig(baseConfig, getDefaultConfig(__dirname));
//   const {resolver: {assetExts, sourceExts}} = defaultConfig;

//   return mergeConfig(
//     defaultConfig,
//     {
//       resolver: {
//         assetExts: assetExts.filter(ext => ext !== 'svg'),
//         sourceExts: [...sourceExts, 'svg'],
//       },
//     },
//   );
// };

///////
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"]
  }
};

module.exports = mergeConfig(defaultConfig, config);