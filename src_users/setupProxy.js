const { createProxyMiddleware: proxy } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/api", {
      //请求路径中有/api就转发给target保存的服务器地址
      target: "http://localhost:5000",
      changeOrigin: true, //控制服务器收到的请求头中的host值，改为
      pathRewrite: { "^/api": "" }, //去除原来路径中的/api
    })
  );
};
