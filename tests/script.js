'use strict';

const box = document.getElementById('box'), //получает элемент со сотраницы по ID
      btns = document.getElementsByTagName('button'), // получает все елементы по тэгу
      circles = document.getElementsByClassName('circle'), // получает все элементы по классу
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), // получет все элементы по CSS селектору
      oneHeart = wrapper.querySelector(".heart"); // получает первый элемент по CSS селектору


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement('div');
// const text = document.createTextNode("it is I'm");

div.classList.add('black');

wrapper.append(div); //добавляет элемент div после элемента wrapper
// wrapper.appendChild(div); добавляет элемент div после элемента wrapper устар.

// wrapper.prepend(div); добавляет элемент div перед элементом wrapper

// hearts[0].before(div); добавляет элемент div перед элементом hearts[0]
// hearts[0].after(div); добавляет элемент div после элемента hearts[0]

// wrapper.insertBefore(div, hearts[1]); вставить div перед hearts[1] old

// circles[0].remove(); удаляет элемент circles[0] со страницы
// wrapper.removeChild(hearts[1]); удаляет дочерний элемент hearts[1] из родителя wrapper old

// hearts[0].replaceWith(circles[0]); заменяет элемент hearts[0] на circles[0]
// wrapper.replaceChild(circles[0], hearts[0]); в родитель элементе wrapper заменяет элемент hearts[0] на circles[0] old

// div.innerHTML = "<h1>Hello world</h1>"; выводит на страницу HTML структуру

// div.textContent = 'hello'; выводит на страницу ТЕКСТ

// div.insertAdjacentHTML('afterbegin', '<h2>hello</h2>'); вставить в начало элемента
// div.insertAdjacentHTML('afterend', '<h2>hello</h2>'); вставить после элемента
// div.insertAdjacentHTML('beforebegin', '<h2>hello</h2>'); вставить перед элементом
// div.insertAdjacentHTML('beforeend', '<h2>hello</h2>'); вставить перед концом (в конец) элемента 

