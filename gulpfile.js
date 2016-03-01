var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver',function(){
	gulp.src('public')
		.pipe(webserver({
			liveload:true,
			open:true
		}));

});

gulp.task('default',['webserver'])