'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;
const width = box.offsetWidth;
const height = box.offsetHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'; //Раскрывает текстовый блок целиком
    console.log(box.scrollTop); //Отслеживает прогресс прокрутки при нажатии на кнопку
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);

console.log('getcom',style.display);

console.log(document.documentElement.scrollTop);