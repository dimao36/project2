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

exports.cloneFiles = async () => {
    return gulp.src('app/*.html') //копіювання всіх html файлів з папки app
    .pipe(gulp.dest('public')); //виведення в public
}