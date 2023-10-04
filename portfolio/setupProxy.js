const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // ارتباط با بک‌اند اول
  app.use(
    '/api/backend1', // مسیری که می‌خواهید به بک‌اند اول ارتباط برقرار کنید
    createProxyMiddleware({
      target: 'https://portfolio-b-rho.vercel.app/', // آدرس بک‌اند اول
      changeOrigin: true,
    })
  );
};

