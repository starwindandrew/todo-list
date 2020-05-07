const todos = [
    'Сделать проектную работу',
    'Полить цветы',
    'Пройти туториал по Реакту',
    'Сделать фронт для своего проекта',
    'Погулять с собакой',
    'Разобраться в замыканиях',
    'Решить задачу на Codewars',
];
const itemTemplate = document.querySelector('.item_template').content;
const list = document.querySelector('.list');
const formButton = document.querySelector('.form__submit');
const formInput = document.querySelector('.form__input');

 function render() {
    list.innerHTML = '';

    todos.forEach((item) => {
    });
 }

 render();
