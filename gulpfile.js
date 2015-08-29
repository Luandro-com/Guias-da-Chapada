'use strict';

var gulp = require('gulp'),
	changed = require('gulp-changed'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	notify = require('gulp-notify'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	concat = require('gulp-concat'),
  del = require('del'),
	/* CSS */
	sass = require('gulp-sass'),
	csso = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer'),
	/* Images */
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	p = {
	  scss: './src/assets/styles/*.scss',
	  img: './src/assets/imgs/**/*.{gif,jpg,png,svg}',
	  distCss: './static/dist',
	  distImg: './static/dist/imgs'
	};
// Clean
gulp.task('clean', function(cb) {
  del(['./static/dist'], cb);
});
// BrowserSync
gulp.task('browserSync', function() {
  browserSync({
	server: {
	  baseDir: './src'
	}
  })
});
// Styles
gulp.task('styles', function() {
  return gulp.src(p.scss)
	.pipe(sass({errLogToConsole: true}))
	.on('error', notify.onError())
	.pipe(autoprefixer('last 1 version'))
	.pipe(csso())
	.pipe(concat('main.css'))
	.pipe(gulp.dest(p.distCss))
	.pipe(reload({stream: true}));
});
// Image
gulp.task('img', function () {
	return gulp.src(p.img)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest(p.distImg));
});
// Watch
gulp.task('watchTask', function() {
  gulp.watch(p.scss, ['styles']);
  gulp.watch(p.img, ['img']);
});

gulp.task('watch', function() {
  gulp.start(['watchTask', 'styles', 'img']);
});

gulp.task('build', function() {
  process.env.NODE_ENV = 'production';
  gulp.start(['styles', 'img']);
});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});
