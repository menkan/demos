/**
 * @Created by xuTongze on 20200411
 * @Descript Gulp configs
*/
'use strict'

const { watch, series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const del = require('del')

sass.compiler = require('node-sass')

/* 清除无效|过期内容(html\css\javascript) */
async function clean(cd){
  await del(['./src/views/css/style/*.css'])
  cd()
}

/* handle css */
function handleCss(cd){
  return src('./src/views/css/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest('./src/views/css/style'))
}

exports.default = async function() {
  watch('./src/views/css/sass/*.scss', series(clean, handleCss))
}
