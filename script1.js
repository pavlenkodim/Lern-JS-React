"use strict";

for (let i = 1; i <= 10; i++){
    if (i % 2 === 0) {
        console.log(i);
    }   
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
let a = 2;
while (a <= 16) {
    if (a % 2 == 0) {
        a++;
        continue;
    } else {
        console.log(a);
        a++;
    }
}

const array = [];
for (let i = 5; i <= 10; i++) {
    array.push(i);
}
console.log(array);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(arr);
// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) == 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) == 'string') {
//         data[i] = data[i] + " - done";
//     }
// }
// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 0; i < data.length; i++) {
//     result.unshift(data[i]);
// }
// console.log(result);

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

function showFistMessege(text) {
    console.log(text);
    let num = 20;
}

showFistMessege("Hello wordl!");

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));

function ret() {
    let num = 50;


    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('hello');
};

logger();

const calc = (a, b) => a + b;

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));

function sayHello(name) {
    return "Привет, " + name + "!";
}
console.log(sayHello("anton"));

function returnNeighboringNumbers(num) {
    let arr = [];
    num--;
   for (let i = 0; i < 3; i++) {
        arr.push(num);
        num++;
   }
    return arr;
}
console.log(returnNeighboringNumbers(5));


function getMathResult(a, b) {
    if (b > 0 && typeof(b) === 'number') {
        let result = '';
        let count = 0;
        let countAny = --b;
        for (let i = 0; i <= b; i++) {
            count += a;
            result += count;
            if (i < countAny) {
                result += "---";
            }
        }
        return result;
    } else {
        return a;
    }
}
console.log(getMathResult(10, -1));

const str = "test";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world!";
console.log(logg.slice(6, 11));
console.log(logg.slice(6));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));


function calculateVolumeAndArea(num) {
    if (num > 0 && typeof(num) === 'number' && Number.isInteger(num)) {
        let v = num * num * num;
        let s = (num * num + num * num + num * num) * 2;
        return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
    } else {
        return "При вычислении произошла ошибка!";
    }
}
console.log(calculateVolumeAndArea(2));

function getCoupeNumber(numPlace) {
    if (Number.isInteger(numPlace) && numPlace > 0 && numPlace <= 36) {
        let numCoupe = numPlace / 4;
        return Math.ceil(numCoupe);
    } else if (Number.isInteger(numPlace) && numPlace === 0 || numPlace > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
}
console.log(getCoupeNumber(36));

function getTimeFromMinutes(minutes) {
    if (Number.isInteger(minutes) && minutes >= 0 && minutes <= 600) {
        let hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
        if (hours === 1) {
            return `Это ${hours} час и ${minutes} минут`;
        } else if (hours >= 2 && hours < 5) {
            return `Это ${hours} часа и ${minutes} минут`;
        } else {
            return `Это ${hours} часов и ${minutes} минут`;            
        }
    } else {
        return "Ошибка, проверьте данные";
    }
}
console.log(getTimeFromMinutes(0));

function findMaxNumber(a, b, c, d) {
    if ( typeof(a) === 'number' && typeof(b) === 'number' && typeof(c) === 'number' && typeof(d) === 'number') {
        return Math.max(a, b, c, d);
    } else {
        return 0;
    }
}
console.log(findMaxNumber(1, 5, "6.6", 11));

/*задача на числа Фибоначчи, создать функцию, которая будет принимать число и возвращать сроку с числами 
количество которых равно колличеству первого числа */

function fib(num) {
    if (Number.isInteger(num) && num > 0) {
        let counts = [0, 1];
        for (let i = 0; i < num; i++) {
            counts.push(counts[i] + counts[i + 1]);
        }
        counts.pop();
        counts.pop();
        return counts.join(" ");
    } else {
        return "";
    }
}
console.log(fib(7));