/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv img"),
      promoBg = document.querySelector(".promo__bg"),
      promoGener = promoBg.querySelector(".promo__genre"),
      promoInterectivItem = document.querySelectorAll(".promo__interactive-item"),
      btnDelete = document.querySelectorAll(".delete");

adv.forEach(item => {
    item.remove();
});

promoGener.textContent = "ДРАМА"; //2
promoBg.style.backgroundImage = "url('img/bg.jpg')"; //3
movieDB.movies.sort();

promoInterectivItem.forEach(function(item, i) {
    item.innerHTML = `${i + 1}. ${movieDB.movies[i]} <div class="delete"></div>`;
    i++;
});



