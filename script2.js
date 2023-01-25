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

