// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   // ارتباط با بک‌اند اول
//   app.use(
//     '/api/backend1', // مسیری که می‌خواهید به بک‌اند اول ارتباط برقرار کنید
//     createProxyMiddleware({
//       target: 'https://back-portfolio-nine.vercel.app/', // آدرس بک‌اند اول
//       changeOrigin: true,
//     })
//   );

//   // ارتباط با بک‌اند دوم
//   app.use(
//     '/api/backend2', // مسیری که می‌خواهید به بک‌اند دوم ارتباط برقرار کنید
//     createProxyMiddleware({
//       target: 'http://localhost:5000', // آدرس بک‌اند دوم
//       changeOrigin: true,
//     })
//   );
// };


// 'https://younessheikhlar.vercel.app',