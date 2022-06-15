const { defineConfig } = require('@vue/cli-service');
const VuePreloadWebpackPlugin = require('@vue/preload-webpack-plugin')

module.exports = defineConfig({
  chainWebpack(config) {
    config
      .plugin('preload')
      .use(VuePreloadWebpackPlugin, [{
        rel: 'preload',
        include: 'allChunks',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /^((?!first).)*$/],
        as(entry) {
          if (/\.css$/.test(entry)) return 'style';

          return 'script';
        }
      }]).after('html')
  },

  devServer: {
    allowedHosts: 'all',
    static: {
      publicPath: 'https://app.companies.dev.revelo.io/'
    }
  }
});
