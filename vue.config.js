module.exports = {
  devServer: {
    proxy: "http://localhost:8000"

    // overlay: false,
    // proxy: {
    //   "/": {
    //     target: "http://localhost:8000/",
    //     pathRewrite: { "^/": "" },
    //     changeOrigin: true,
    //     secure: false
    //   }
    // }
  }
  // lintOnSave: false,
  // transpileDependencies: ["vuetify"],
  // runtimeCompiler: true
};
