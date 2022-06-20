const { defineConfig } = require('@vue/cli-service');
const PreloadPlugin = require('@vue/preload-webpack-plugin')

module.exports = defineConfig({
  chainWebpack(config) {
    config
      .plugin('preload')
      .use(PreloadPlugin, [{
        rel: 'preload',
        include: 'allChunks',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /^((?!first).)*$/],
        as(entry) {
          if (/\.css$/.test(entry)) return 'style';

          return 'script';
        }
      }]).after('html')

    config
      .plugin('prefetch')
      .use(PreloadPlugin, [{
        rel: 'prefetch',
        include: 'asyncChunks'
      }]).after('html')
  }
});
