"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        gender: [],
        privat: false
    };

const lastFilmName1 = prompt('Один из недавно просмотренных фильмов?'),
      lastFilmRaiting1 = prompt('На сколько оцените его?'),
      lastFilmName2 = prompt('Один из недавно просмотренных фильмов?'),
      lastFilmRaiting2 = prompt('На сколько оцените его?');

personalMovieDB.movies[lastFilmName1] = lastFilmRaiting1;
personalMovieDB.movies[lastFilmName2] = lastFilmRaiting2;


console.log(personalMovieDB);