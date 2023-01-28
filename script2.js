"use strict";

// Принципы ООП
let str = "some";
// let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function (){
        console.log("hello");
    }
};

const jonh = Object.create(soldier); // Создаем новый объект с унаследованным прототипом

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier; Устаревший формат записи присваивания прототипов.

// Object.setPrototypeOf(jonh, soldier); // Присваиваем отбекту jonh прототип soldier

// console.log(jonh.armor);
jonh.sayHello();

// Динамическая типизация

// To string
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) конкатенация
console.log(typeof(5 + ''));

const num = 5;
console.log("http://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To number
// 1)
console.log(typeof(Number('4')));
// 2)
console.log(typeof(+'5'));
// 3)
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// To boolean
// false - 0, '', null, undefined, NaN;
// 1)
let switcher = null;
if (switcher) {
    console.log('Working...');
}
// 2)
console.log(typeof(Boolean('4')));
// 3)
console.log(typeof(NaN));


function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});

let time = '';
5 > 3 || 2 ? time = 'Day' : time = 'Night';

console.log(time);

// Задачи с собеседований на понимание основ

let x = 5;
console.log(x++); //5

console.log(+"infinity");

const a = [1, 2, 3];
const b = [1, 2, 3];
if (a == b) {
    console.log("ok");
} else {
    console.log("no");
}
