const {
  override, addLessLoader, fixBabelImports, addWebpackAlias
} = require("customize-cra");
const path = require('path');

process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  addLessLoader({
    javascriptEnabled: true
  }),
  addWebpackAlias({
    "@": path.join(__dirname, './src')
  })
)