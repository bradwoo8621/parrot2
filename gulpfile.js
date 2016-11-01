var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

gulp.task('uglify', function () {
	gulp.src('dist/nest-parrot2.js')
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(rename('nest-parrot2.min.js'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist'));
	gulp.src('dist/nest-parrot2.css')
		.pipe(sourcemaps.init())
		.pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});