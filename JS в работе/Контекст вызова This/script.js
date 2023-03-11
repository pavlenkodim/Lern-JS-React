'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 15,
//     b: 20,
//     sum: function () {
//         console.log(this);
//     }
// };
// obj.sum();

// function User (name, id) { // Функция конструктор стандарт ES5
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`hello ${this.name}`);
//     };
// }
// // let ivan = new User('Ivan', 23);

// function sayName (surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith'); // устанавливает контекст у функции (разница в синтаксисе)
// sayName.apply(user, ['Smith']); // устанавливает контекст у функции (разница в синтаксисе)

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2); // bind cоздает новую функцию и подвязывает к ней контекст
// console.log(double(3));
// console.log(double(13));


// 1) Обычная фунция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', function (){ //контекст будет работать, кнопка поменяет цвет
    this.style.backgroundColor = 'red';
});

btn.addEventListener('click', () => { //контeкст будет потерян - undefined
    this.style.backgroundColor = 'red';
});



const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();

const double = (a) => {
    return a * 2;
};
const double2 = a => a * 2;