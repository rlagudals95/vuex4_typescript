module.exports = {
  devServer: {
    overlay: false,
    proxy: {
      "/": {
        target: "http://www.culture.go.kr/",
        pathRewrite: { "^/": "" },
        changeOrigin: true,
        secure: false
      }
    }
  },
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  runtimeCompiler: true
};
