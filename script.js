const todos = [
    'Сделать проектную работу',
    'Полить цветы',
    'Пройти туториал по Реакту',
    'Сделать фронт для своего проекта',
    'Погулять с собакой',
    'Разобраться в замыканиях',
    'Решить задачу на Codewars'
];
const itemTemplate = document.querySelector('.item_template').content;
const list = document.querySelector('.list');
const formButton = document.querySelector('.form__submit');
const formInput = document.querySelector('.form__input');

function deleteItem(e) {
    const index = e.target.parentNode.getAttribute('id');
    todos.splice(index, 1);
    render();
}

function duplicateItem(e) {
    const index = e.target.parentNode.getAttribute('id');
    const text = todos[index];

    todos.splice(index, 0, text);
    render();
}

function render() {
    list.innerHTML = '';
    todos.forEach(renderElement);
    setHandlers();
}

function setHandlers() {
    list.querySelectorAll('.delete').forEach((button) => {
        button.addEventListener('click', deleteItem);
    })

    list.querySelectorAll('.duplicate').forEach((button) => {
        button.addEventListener('click', duplicateItem)
    })
}

function renderElement(text, index) {
    const element = itemTemplate.cloneNode(true);

    element.querySelector('.item__text').innerText = text;
    element.querySelector('.list__item').setAttribute('id', index);
    list.appendChild(element);
}

formButton.addEventListener('click', addFunc);

function addFunc() {
    const text = formInput.value;
    todos.unshift(text);
    formInput.value = '';
    render();
}

render();
