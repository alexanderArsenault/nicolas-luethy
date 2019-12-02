module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/nicolasluethy/" : "/",
  publicPath: process.env.NODE_ENV === "production" ? "/nicolasluethy/" : "/",

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
