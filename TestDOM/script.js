// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector("#current").parentNode);
// console.log(document.querySelector("#current").parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == "#text") {
//         continue;
//     }
//     console.log(node);
// }

// Рекурсия

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function pow(x, n) { // Рекурсия - функция запускает внутри саму себя, вызывает саму себя.
//     if (n === 1) { // база рекурсии - к чему вернется рекурсия.
//         return x;
//     } else {
//         return x * pow(x, n - 1); // шаг рекурсии n -1
//     } // глубина рекурсии - сколько раз она запускается
// }

// pow(2, 1); // 2
// pow(2, 2); // 4
// pow(2, 3); // 8
// pow(2, 4); // 16

let students = {
    js: [{
        name: 'john',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }], 
        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration (data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;
            
            for (let i = 0; i < course.length;i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length;i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length;i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArray = getTotalProgressByRecursion(subData);
            total[0] += subDataArray[0];
            total[1] += subDataArray[1];
        }

        return total;
    }
}

// const result = getTotalProgressByRecursion(students);
// console.log(result[0]/result[1]);

// Задание на рекурсию. Нахождение факториала
function factorial(num) {
    if (Number.isInteger(num)) {
        if (num < 1) {
            return 1;
        } else {
            if (num === 1) {
                return num;
            } else {
                return num * factorial(num - 1);
            } 
        }
    } else {
        return "NaN";
    }
}

console.log(factorial(6));