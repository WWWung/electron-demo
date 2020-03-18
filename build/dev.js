const execa = require('execa');
const colors = require('colors');

//  注册颜色
colors.setTheme({
    green: 'green',
    red: 'red',
    blue: 'blue',
    yellow: 'yellow'
})


start();

function start() {
    const gulp = execa('gulp');
    let gulpFinished = false, //    判断gulp打包是否完成
        tscFinished = false;    //  判断ts打包是否完成
    gulp.stdout.on('data', function (data) {
        log(`gulp: ${data}`, 'green');
        if (/Finished/.test(data)) {
            gulpFinished = true;
        } else {
            gulpFinished = false;
        }
        //  
        if (tscFinished && gulpFinished) {
            log('all done', 'red');
        }
    });

    const tsc = execa('tsc');
    tsc.stdout.on('data', function (data) {
        log(`tsc: ${data}`, 'blue');
        if (/Found 0 errors/.test(data)) {
            tscFinished = true;
        } else {
            tscFinished = false;
        }
        if (tscFinished && gulpFinished) {
            log('all done', 'red');
        }
    });

    const ele = execa('electron .');
    ele.on('exit', function () {
        process.exit()
    })
}

function log(text, color = 'white') {
    console.log(text[color]);
}