// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let square = 0;
//     data.shops.forEach(obj => {
//         square += obj.width * obj.length;
//     });
//     const result = (square * data.height) * data.moneyPer1m3;
//     if (result <= data.budget) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let newArr = [],
        st = [];
    arr.forEach((stud, count) => {
        if (!((count + 1) % 3)) {
            newArr[(count / 3).toFixed() - 1] = arr.slice(count - 2, count + 1);
        } else if (count > 8) {
             st.push(stud);
        }
    });
    newArr.push(`Оставшиеся студенты: ${st.length === 0 ? '-' : st.join(', ')}`);
    return newArr;
}

console.log(sortStudentsByGroups(students));