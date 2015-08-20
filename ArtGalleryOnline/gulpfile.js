var gulp = require('gulp');
var util = require('gulp-util');
var sass = require('gulp-sass');
var prefix = require ('gulp-autoprefixer');
var browserSync = require('browser-sync');

//Compile files from scss to css.
gulp.task('sass', function() {
    return gulp
        .src('sass/*.scss')
        .pipe(sass())
        .on('error', handleError)
        .pipe(prefix(['last 3 versions', '> 1%'], {cascade: true}))
        .pipe(gulp.dest('css/'))
});

// create a task that ensures the `sass` task is complete before
// reloading browsers
gulp.task('sass-watch', ['sass'], browserSync.reload());

// use default task to launch Browsersync and watch scss files
gulp.task('serve', ['sass'], function () {

    // Serve files from the root of this project
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("sass/*.scss", ['sass-watch']);
});

//Handle Errors
function handleError(err) {
    console.log(err.message.toString());
    this.emit('end');
};

gulp.task('files-watch', function(){
    gulp.watch(['*.html'], ['browser-reload']);
});

gulp.task('browser-reload', function(){
    browserSync.reload();
});


// Default task.
gulp.task('default', ['serve', 'files-watch']);