const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://fwdarling2020.cn:8080',
      changeOrigin: true
    })
  )
}
