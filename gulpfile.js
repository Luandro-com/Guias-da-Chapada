'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	connect = require('gulp-connect'),
	nodemon = require('gulp-nodemon'),
	browserify = require('Browserify'),
	watchify = require('watchify'),
	source = require('vinyl-source-stream'),
 	csso = require('gulp-csso'),
 	uncss = require('gulp-uncss'),
 	concat = require('gulp-concat'),
 	imagemin = require('gulp-imagemin'),
 	pngquant = require('imagemin-pngquant');

 var paths = {
    app: ['./client/js/app.jsx'],
    js: ['./client/js/**/*.*'],
};

gulp.task('browserify', function() {
    // Browserify/bundle the JS.
    browserify(paths.app)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('../client/dist/js'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: 'client',
    port: 8000,
    livereload: true
  });
});

gulp.task('css', function() {
    return gulp.src(['./client/app/styles/main.css', './client/app/styles/guias.css', './client/app/styles/mediaqueries.css', './client/app/styles/animations.css'])
    	.pipe(concat('main.css'))
    	.pipe(uncss({
            html: ['./client/index.html']
        }))
        .pipe(gulp.dest('./client/dist/styles'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./client/*.html')
    .pipe(connect.reload());
});

gulp.task('nodemon', function(done){
    nodemon({ script: './server/app.js', env: { 'NODE_ENV': 'development'}})
    .on('restart');
});

gulp.task('img', function () {
    return gulp.src('./client/app/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./client/dist/img'));
});

gulp.task('watch', function () {
  gulp.watch(['./client/*.html'], ['html']);
  gulp.watch(['./client/app/styles/*.css'], ['css']);
  gulp.watch(['./client/app/img/*'], ['img']);
});

gulp.task('serve', ['connect', 'watch']);
