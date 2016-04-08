var gulp 			= require('gulp'),
	connect 		= require('gulp-connect'),
	mongoose 		= require('mongoose');

mongoose.connect('mongodb://localhost/simpleNotes');

gulp.task('connect', function() {
	connect.server({
		root: './',
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src('index.html')
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['*.html','css/**', 'js/**'], ['html']);
});

gulp.task('default', ['connect', 'watch']);