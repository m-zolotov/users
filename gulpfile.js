var gulp = require('gulp');
var sass = require('gulp-sass');
var gcmq = require('gulp-group-css-media-queries');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('autopref', () =>
    gulp.src('app/css/*.css')
    .pipe(autoprefixer({
        browsers: ['IE 11', 'Opera 12', 'iOS 7', 'last 5 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('app/css'))
);

gulp.task('gcmq', function() {
    gulp.src('./app/css/**/*.css')
        .pipe(gcmq())
        .pipe(gulp.dest('app/dist/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./app/scss/**/*.scss', ['sass', 'gcmq']);
});
