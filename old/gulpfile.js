'use strict';

var gulp = require('gulp'),
	changed = require('gulp-changed'),
	watchify = require('watchify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	notify = require('gulp-notify'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	nodemon = require('gulp-nodemon'),
	concat = require('gulp-concat'),
	/* CSS */
	sass = require('gulp-sass'),
	csso = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer'),
	/* Images */
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	/* React and Browerify */
	browserify = require('browserify'),
	reactify = require('reactify'),
	uglify = require('gulp-uglify'),
	del = require('del'),
	p = {
	  html: './client/app/*.html',
	  jsx: './client/app/js/app.jsx',
	  component: './client/app/js/component.jsx',
	  scss: './client/app/styles/*.scss',
	  img: './client/app/img/**/*.{gif,jpg,png,svg}',
	  bundle: './app.js',
	  serverBundle: './component.js',
	  distJs: './client/dist/js',
	  distCss: './client/dist/styles',
	  distImg: './client/dist/img'
	};
// Clean
gulp.task('clean', function(cb) {
  del(['./client/dist'], cb);
});
// BrowserSync
gulp.task('browserSync', function() {
  browserSync({
	server: {
	  baseDir: './client'
	}
  })
});
gulp.task('serve', function () {
  nodemon({ script: 'server/index.js', ext: 'html js css' })
    .on('restart', function () {
      console.log('restarted!')
    })
});
// Browserify and React
gulp.task('watchify', function() {
  var bundler = watchify(browserify(p.jsx, watchify.args));

  function rebundle() {
	return bundler
	  .bundle()
	  .on('error', notify.onError())
	  .pipe(source(p.bundle))
	  .pipe(gulp.dest(p.distJs))
	  .pipe(reload({stream: true}));
  }

  bundler.transform(reactify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', function() {
  browserify(p.jsx)
	.transform(reactify)
	.bundle()
	.pipe(source(p.bundle))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest(p.distJs));
});
gulp.task('server-build', function() {
  browserify(p.component)
	.transform(reactify)
	.bundle()
	.pipe(source(p.serverBundle))
	.pipe(buffer())
	.pipe(gulp.dest(p.distJs));
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

gulp.task('watch', ['clean'], function() {
  gulp.start(['browserSync', 'watchTask', 'watchify', 'styles', 'img']);
});

gulp.task('build', ['clean'], function() {
  process.env.NODE_ENV = 'production';
  gulp.start(['browserify', 'server-build', 'styles', 'img']);
});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});