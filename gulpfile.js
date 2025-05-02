// function myTask(callback) {
//     console.log('Hello Dima!')

//     callback();
// }

// async function myTask2() {
//     console.log('Task2: Hello Dima!')

// }

// exports.myTask = myTask;
// exports.myTask2 = myTask2;

// exports.myTask3 = async function myTask3() {
//     console.log('Task3: Hello Dima!');
// }

// exports.myTask4 = async () => {
//     console.log('Task4: Hello Dima!');
// }


const gulp = require('gulp');

exports.cloneHTML = async () => {
    return gulp.src('app/*.html') //копіювання всіх html файлів з папки app
    .pipe(gulp.dest('public')); //виведення в public
}

exports.cloneCSS = async () => {
    return gulp.src('app/**/*.css') //копіювання всіх css файлів з папки app
    .pipe(gulp.dest('public')); //виведення в public
}

exports.cloneJS = async () => {
    return gulp.src('app/**/*.js') 
    .pipe(gulp.dest('public')); //виведення в public
}

exports.minifyCSS = async () => {
    return gulp.src('app/**/*.css') //
    .pipe(cleanCSS()) //мінімізація css 
    .pipe(gulp.dest('public')); //виведення в public
}


exports.minifyJS = async () => {
    return gulp.src('app/**/*.js') //
    .pipe(uglify()) //мінімізація js
    .pipe(gulp.dest('public')); //виведення в public
}
const cleanCSS = require('gulp-clean-css'); //підключаємо clean-css
const uglify = require('gulp-uglify'); //підключаємо uglify