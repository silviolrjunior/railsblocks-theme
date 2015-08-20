var config = require('./')
var path = require('path')

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceAssets + "/stylesheets/global.less",
  watch: config.sourceAssets + "/stylesheets/**/*.less",
  dest: config.publicAssets + '/stylesheets',
  settings: {
    plugins: [],
    paths: ["bower_components/bootstrap/less"]
  }
}
