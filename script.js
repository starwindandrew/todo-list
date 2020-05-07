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

const state = {
    mode: 'add',
    index: null
}

formButton.addEventListener('click', addFunc);
render();

function render() {
    clean();
    todos.forEach(renderElement);
    setHandlers();
}

function reset() {
    state.mode = 'add';
    state.index = null;
}

function clean() {
    formButton.value = 'Добавить';
    list.innerHTML = '';
    reset();
}

function setHandlers() {
    list.querySelectorAll('.delete').forEach((button) => {
        button.addEventListener('click', deleteItem);
    });

    list.querySelectorAll('.duplicate').forEach((button) => {
        button.addEventListener('click', duplicateItem)
    });

    list.querySelectorAll('.edit').forEach((button) => {
        button.addEventListener('click', editItem)
    });
}

function renderElement(text, index) {
    const element = itemTemplate.cloneNode(true);

    element.querySelector('.item__text').innerText = text;
    element.querySelector('.list__item').setAttribute('id', index);
    list.appendChild(element);
}

function addFunc() {
    const text = formInput.value;
    if (state.mode === 'edit') {
        todos[state.index] = text;
    }
    if (state.mode === 'add') {
        todos.unshift(text);
    }
    formInput.value = '';
    render();
}

function editItem(e) {
    const index = e.target.parentNode.getAttribute('id');

    formInput.value = todos[index];
    formButton.value = 'Сохранить';
    state.mode = 'edit';
    state.index = index;
}

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

