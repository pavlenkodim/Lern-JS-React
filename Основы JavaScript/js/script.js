"use strict";

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: true,
        start: function() {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?');
        
            while (this.count == '' || this.count == null || isNaN(this.count)) {
                this.count = +prompt('Сколько фильмов вы уже посмотрели?');
            }
        },
        rememberMyFilms: function() {
            for (let i = 0; i < 2; i++) {
                const a = prompt('Один из недавно просмотренных фильмов?').trim(),
                      b = prompt('На сколько оцените его?').trim();
            
                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log("done");
                } else {
                    console.log("error");
                    i--;
                }
            }
        },
        detectPersonalLevel: function() {
            if (personalMovieDB.count <= 10) {
                console.log("Просмотрено давольно мало фильмов");
            } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
                console.log("Вы классический зритель");
            } else if (personalMovieDB.count > 30) {
                console.log("Вы киноман!");
            } else {
                console.log("Произошла ошибка");
            }
        },
        showMyDB: function(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },
        writeYourGenres: function() {
            // for (let i = 0 ; i < 3; i++) {
            //     let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            //     if (genre != null && genre != '' && genre.length < 50) {
            //         personalMovieDB.genres[i] = genre;
            //     } else {
            //         i--;
            //     }
            // }

            for (let i = 0 ; i < 1; i++) {
                    let genres = prompt(`Ваш любимый жанр под номером ${i + 1}`).toLowerCase();
                    if (genres != null && genres != '' && genres.length < 50) {
                        personalMovieDB.genres = genres.split(', ');
                        personalMovieDB.genres.sort();
                    } else {
                        i--;
                        console.log('Вы ввели некоректные данные или не ввели их вовсе');
                    }
                }            

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        },
        toggleVisibleMeDB: function() {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        }
    };