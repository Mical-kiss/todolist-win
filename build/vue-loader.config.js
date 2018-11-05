module.exports = (isDev) => {
  return {
    preserveWhitespace: true,
    extractCSS: !isDev, // 抽取组件css
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: false, //自动设置
    // loaders: {
    //   docs: docsLoader, //自定义标签loader
    // },
    // preLoader: {
    //   ts: tsLoader
    // },
    // postLoader: {

    // }
  }
}
