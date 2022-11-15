import icons from 'url:../../img/icons.svg'; // Parcel 2 (all asset that are no code)

export default class View {
  _data;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup is returned if render=false
   * @this {Object} View instance
   * @author Kevin Fernandez
   * @todo Finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  /**
   * Update data in DOM without render all again.
   * It will only update changed elements in DOM
   * @param {Object | Object[]} data The new data to be updated (e.g recipe)
   * @this {Object} View instance
   */
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    // to convert html as string into real dom object
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, ind) => {
      const curEl = curElements[ind];

      // Updates changed text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      )
        curEl.textContent = newEl.textContent;

      // update changed attributes
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }
  /**
   * Clear HTML element contains the View ( parent element ) before new HTML is inserted.
   * @this {Object} View instance
   */
  _clear() {
    this._parentElement.innerHTML = '';
  }
  /**
   * Render a Spinner before display new HTML markup to make more user friendly
   * @this {Object} Instance of View's children classes (eg. RecipeView)
   */
  renderSpinner() {
    const markup = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Display an message with an icon, used mostly to show success message.
   * 
   * @param {String} message By default is equal to _message property inside each View's children class
   * @this {Object} View instance
   */
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

   /**
   * Display an message with an icon, used to show error message.
   * 
   * @param {String} message By default is equal to _errorMessage property inside each View's children class
   * @this {Object} View instance
   */
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
