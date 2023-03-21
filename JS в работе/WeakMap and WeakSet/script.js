'use strict';

// let user = {name: 'Ivan'};

// let map = new WeakMap();
// map.set(user, 'data');
// user = null;

// console.log(user);
// console.log(map.has(user));

// WeakMap

let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name : 'Elena'};
let alex = {name : 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));

// WeakSet
// add, has, delete

let massages = [
    {text: 'Hello', from: 'Jonh'},
    {text: 'World', from: 'Jonh'},
    {text: 'Ok!', from: 'Alex'},
];

let readMasseges = new WeakSet();

readMasseges.add(massages[0]);
// readMasseges.add(massages[1]);

readMasseges.add(massages[0]);

massages.shift();

console.log(readMasseges.has(massages[0]));

