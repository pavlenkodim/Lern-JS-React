"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        gender: [],
        privat: false
    };

if (personalMovieDB.count <= 10) {
    alert("Просмотрено давольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман!");
} else {
    alert("Произошла ошибка");
}

for (let i = 0; i < 2; i++) {
    const lastFilmName = prompt('Один из недавно просмотренных фильмов?'),
          lastFilmRaiting = prompt('На сколько оцените его?');

    if (lastFilmName != null && lastFilmRaiting != null && lastFilmName != '' && lastFilmRaiting != '' && lastFilmName.length < 50) {
        personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}

console.log(personalMovieDB);