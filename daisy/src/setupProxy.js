const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
    target: '49.234.209.5:8080',
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    }
  })
  )
}