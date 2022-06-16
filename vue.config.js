const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === "production" ? "/docs/" : "/",
})


