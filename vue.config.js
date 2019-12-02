module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/nicolas-luethy/" : "/",

  devServer: {
    port: 8080
  },

  css: {
    loaderOptions: {
      sass: {
        data: "@import ./src/styles/util/util.sass"
      }
    }
  }
};
