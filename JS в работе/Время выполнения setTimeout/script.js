"use strict";

// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'hello');

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);
// btn.addEventListener('click', () => {
//     // const timerId = setInterval(logger, 2000,);
//     timerId = setInterval(logger, 500,); // Не учитывает время на выполнение функции.
// });

// // const timerId = setTimeout(logger, 2000,); // Вызов функции, 2 аргумет время в милисекундах
// // clearInterval(timerId); //остановка функции

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId); 
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log() { Рекурсивный вызов функции, ждет завершение функции и выполняется после 500мл.сек
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);