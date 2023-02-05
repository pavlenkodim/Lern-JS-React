"use strict";

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.remove();
//     // console.log('hover');
// });

let i = 0;
const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once : true});
});

const link = document.querySelector('a');

link.addEventListener('click', e => {
    e.preventDefault();

    console.log(e.target);
});

