module.exports = {
  devServer: {
    overlay: false,
    proxy: "http://localhost:8080/"
  },
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  runtimeCompiler: true
};
