module.exports = {
  configureWebpack: {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 1024000, // 1MB
      maxAssetSize: 1024000      // 1MB
    }
  }
}