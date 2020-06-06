const todos = [
    'Сделать проектную работу',
    'Полить цветы',
    'Пройти туториал по Реакту',
    'Сделать фронт для своего проекта',
    'Погулять с собакой',
    'Разобраться в замыканиях',
    'Решить задачу на Codewars'
];

// получаем элемент, в который всё вставляем
const list = document.querySelector('.todo');

// функция создания формы, мы передаём её и функцию ниже, чтобы не связывать классы
const createTodoListItem = (...args) => new TodoListItem(...args);

// функция создания TodoListItem
const createTodoListForm = (...args) => new TodoListForm(...args);

// создаём экземпляр класса TodoList
const todoList = new TodoList(createTodoListForm, todos, createTodoListItem);

todoList.render(list);
