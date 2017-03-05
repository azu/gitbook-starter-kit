"use strict";
var gulp = require("gulp");
var path = require("path");
var textlint = require('gulp-textlint');
gulp.task('textlint', function () {
    return gulp.src('./book/ja/**/*.md')
        .pipe(textlint({
            formatterName: "pretty-error"
        }));
});