var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('dev', ['browserSync'], function()  {
	gulp.watch('app/js/*.js', browserSync.reload);
	gulp.watch('app/index.html', browserSync.reload);
	gulp.watch('app/css/*.css', browserSync.reload);
})

gulp.task('browserSync', function()  {
	browserSync.init({
		server:  {
			baseDir: 'app'
		},
	})
})
