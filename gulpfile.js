var gulp = require('gulp'),
	concatCSS = require('gulp-concat-css'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer')

gulp.task('css', function () {
   gulp.src('scss/style.scss')
  		.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer('last 15 versions'))
  		.pipe(minifyCSS())
  		.pipe(rename('style.min.css'))
  		.pipe(gulp.dest('dist/css/'))
  		.pipe(notify('Done!'))

});

gulp.task('watch', function () {
			gulp.watch('scss/*.scss', ['css'])
})

gulp.task('default', ['watch', 'css']); 



