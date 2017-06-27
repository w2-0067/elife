var gulp = require('gulp'),
    browserSync = require('browser-sync'),
	concat = require('gulp-concat');
	reload = browserSync.reload;

gulp.task('concat', function () {
    return gulp.src('app/_css/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('app/css/'))
	.pipe(reload({stream:true}));
  });
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});
gulp.task('watch', function () {
  gulp.watch('app/_css/*.css', ['concat']);
  gulp.watch('app/*.html' , reload);
  gulp.watch('app/js/*.js' , reload);
});
gulp.task('default', ['watch', 'browser-sync']);