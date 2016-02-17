const compileSass = require('broccoli-sass')
const mergeTrees = require('broccoli-merge-trees')
const esTranspiler = require('broccoli-babel-transpiler')
const pickFiles = require('broccoli-static-compiler')

const sourceDir = 'src'

const scripts = esTranspiler(sourceDir, {
  compact: true
})

const statics = pickFiles(sourceDir, {
  srcDir: '/',
  files: ['*.html'],
  destDir: '/'
})

const styles = compileSass([sourceDir], 'styles.scss', 'styles.css', {
  outputStyle: 'compressed'
})

module.exports = mergeTrees([styles, scripts, statics], {
  overwrite: true
})
