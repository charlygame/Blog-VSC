const compose = (plugins) => ({
    webpack(config, options) {
      return plugins.reduce((config, plugin) => {
        if (plugin instanceof Array) {
          const [_plugin, ...args] = plugin
          plugin = _plugin(...args)
        }
        if (plugin instanceof Function) {
          plugin = plugin()
        }
        if (plugin && plugin.webpack instanceof Function) {
          return plugin.webpack(config, options)
        }
        return config
      }, config)
    },
    webpackDevMiddleware(config) {
      return plugins.reduce((config, plugin) => {
        if (plugin instanceof Array) {
          const [_plugin, ...args] = plugin
          plugin = _plugin(...args)
        }
        if (plugin instanceof Function) {
          plugin = plugin()
        }
        if (plugin && plugin.webpackDevMiddleware instanceof Function) {
          return plugin.webpackDevMiddleware(config)
        }
        return config
      }, config)
    },
  })
  
  const withBundleAnalyzer = require('@next/bundle-analyzer')
  const withLess = require('@zeit/next-less');
  
  module.exports = compose([
    [
        withBundleAnalyzer,
        {
            enabled: process.env.ANALYZE === 'true',
        },
    ]
    // withLess({
    //     lessLoaderOptions: {
    //         javascriptEnabled: true
    //     },
    //     cssModules: true,
    //     cssLoaderOptions: {
    //         importLoaders: 1,
    //         localIdentName: "[local]___[hash:base64:5]",
    //     }
    // })
  ])