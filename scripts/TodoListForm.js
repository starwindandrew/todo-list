class TodoListForm {
    /**
     * Шаблон
     * @type {Element}
     * @private
     */
    static _template = document.querySelector('#todo-list-form').content;

    constructor(addItem) {
        this._addItem = addItem;
    }

    /**
     * Рендер
     * @param {Element} container
     */
    render(container) {
        const view = TodoListForm._template.cloneNode(true).children[0];

        this._view = view;

        // подписка на событие клика по кнопке Сохранить
        view.querySelector('.form__submit').addEventListener('click', (e) => {
            e.preventDefault();
            const value = view.querySelector('.form__input').value;
            this._addItem(value);
        });
        container.appendChild(view);
    }
}
