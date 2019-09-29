/**
 * 本文件仅用于本地开发环境，用于存放一些常量
 */
module.exports = {
  // 代理
  proxy: {
  //  '/v3/assistant': 'http://restapi.amap.com/v3/',
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true
    }
  },
}
