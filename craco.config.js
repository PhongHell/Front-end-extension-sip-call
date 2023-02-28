const cracoAlias = require("craco-alias")

module.exports = {
  webpack: {
    configure: (webpackConfig, {env, paths}) => {
      return {
        ...webpackConfig,
        entry: {
          main: [env === 'development' &&
                    require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
          background: './src/chrome/background.js',
          contentScript: './src/chrome/contentScript.js',
        },
        output: {
          ...webpackConfig.output,
          filename: '[name].js',
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        }
      }
    }
  },
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: "./src",
        source: "jsconfig",
      }
    }
  ]
}
