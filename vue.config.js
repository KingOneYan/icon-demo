const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
      config.module
          .rule('svg')
          .exclude.add(path.resolve(__dirname, './src/assets/icon'))
          .end()
      config.module
          .rule('icons')
          .test(/\.svg$/)
          .include.add(path.resolve(__dirname, './src/assets/icon'))
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
    // const svgRule = config.module.rule('svg');
    //
    // svgRule.uses.clear();
    //
    // svgRule.use('svg-sprite-loader')
    //     .loader('svg-sprite-loader')
    //     .tap(options => {
    //         return {
    //             ...options,
    //             symbolId : '[name]'
    //         }
    //     })
  }
  // devServer: {
  //   open: true,  // npm run serve后自动打开页面
  //   host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
  //   port: 8989, // 开发服务器运行端口号
  //   // proxy: {
  //   //   '/api': {
  //   //     target: process.env.VUE_APP_BASE_URL, // 代理接口地址
  //   //     secure: false,  // 如果是https接口，需要配置这个参数
  //   //     changeOrigin: true, // 是否跨域
  //   //     pathRewrite: {
  //   //       '^/api': ''   //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
  //   //     }
  //   //   }
  //   // }
  // }
})
