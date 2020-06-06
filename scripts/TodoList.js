class TodoList {

    /**
     * Статическое свойство - шаблон
     * @type {Element}
     * @private
     */
    static _template = document.querySelector('#todo-list').content;

    /**
     * Конструктор, вызывается при инстанцировании класса
     * @param {function} createTodoListForm
     * @param {string[]} todoItems
     * @param {function} createTodoListItem
     */
    constructor(createTodoListForm, todoItems, createTodoListItem) {
        this._todos = todoItems;
        this._createTodoListItem = createTodoListItem;
        this._createTodoListForm = createTodoListForm;
    }

    /**
     * Метод добавления элемента (дела)
     * @param {string} text
     * @private
     */
    _addItem = (text) => {
        this._createTodoListItem(text, this._addItem).render(this._view);
    }

    /**
     * Рендер элемента
     * @param {Element} container - контейнер элемента
     */
    render(container) {
        const view = TodoList._template.cloneNode(true).children[0];
        this._view = view;
        this._createTodoListForm(this._addItem).render(view);
        this._todos.forEach((text) => this._addItem(text));
        container.appendChild(view);
    }
}
