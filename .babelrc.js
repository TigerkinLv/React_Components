module.exports = {
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd-mobile",
        "libraryDirectory": "es/components",
        "style": false
      }
    ]
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "49",
          "ios": "10"
        }
      }
    ]
  ]
}