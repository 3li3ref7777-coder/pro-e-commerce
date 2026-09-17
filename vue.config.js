module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pro-e-commerce/' 
    : '/',
  configureWebpack: {
    performance: {
      hints: false
    }
  }
}