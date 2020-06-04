class TodoListItem {
    static _template = document.querySelector('#todo-list-item').content;

    constructor(text, addItem) {
       this._text = text;
       this._addItem = addItem;
    }

    /**
     * Метод удаления, обратите внимание на то, что он задан через стрелочную функцию
     * это позволяет сохранить контекст this при передаче в обработчик
     * @private
     */
    _onDeleteClick = () => {
        this._view.remove();
    }

    /**
     * Обработчик события дуплицирования
     * @private
     */
    _onDuplicateClick = () => {
        this._addItem(this._text);
    }

    /**
     * Рендер
     * @param {Element} container
     */
    render(container) {
        const view = TodoListItem._template.cloneNode(true).children[0];

        this._view = view;

        // вставляем текст и подписываемся на события
        view.querySelector('.item__text').innerText = this._text;
        view.querySelector('.delete').addEventListener('click', this._onDeleteClick);
        view.querySelector('.duplicate').addEventListener('click', this._onDuplicateClick);
        container.appendChild(view);
    }
}
