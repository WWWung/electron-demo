const gulp = require('gulp');
const less = require('gulp-less');

//  打包
gulp.task('less', function start(done) {
    //  入口
    gulp.src('src/style/index.less')
        .pipe(less())
        //  出口
        .pipe(gulp.dest('dist/style/'));
    done();
})

//  监听
gulp.task('watch', function watch() {
    gulp.watch('src/**/*.less', gulp.series('less'));
})

gulp.task('default', gulp.parallel('less', 'watch'));