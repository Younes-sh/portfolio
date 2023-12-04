const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // ارتباط با بک‌اند اول
  app.use(
    '/api', // مسیری که می‌خواهید به بک‌اند اول ارتباط برقرار کنید
    createProxyMiddleware({
      target: 'https://portfolio-d-iota.vercel.app', // آدرس بک‌اند اول
      changeOrigin: true,
    })
  );

  // ارتباط با بک‌اند لوکال
  app.use(
    '/', // مسیری که می‌خواهید به بک‌اند لوکال ارتباط برقرار کنید
    createProxyMiddleware({
      target: 'http://localhost:5000', // آدرس بک‌اند لوکال
      changeOrigin: true,
    })
  );
};

