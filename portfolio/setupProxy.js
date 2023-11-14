const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // ارتباط با بک‌اند اول
  app.use(
    '/api', // مسیری که می‌خواهید به بک‌اند اول ارتباط برقرار کنید
    createProxyMiddleware({
      target: ['https://portfolio-d-iota.vercel.app','younessheikhlar.be'], // آدرس بک‌اند اول
      changeOrigin: true,
    })
  );
};

