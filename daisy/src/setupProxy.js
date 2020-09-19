const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://daisydata.oss-cn-shanghai.aliyuncs.com',
      changeOrigin: true
    })
  )
}
