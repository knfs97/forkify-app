import View from './view.js';

class SearchView extends View {
  _parentEl = document.querySelector('.search');

  /**
   * This function collect recipe to be search entered by the user in the search input tag 
   * @returns {string} Value of User input in the search input tag
   * @this {Object} View instance
   */
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
  /**
   * Clear parent element (search input tag)
   */
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  /**
   * Give to parent element (search input tag) functionality whenever is submitted
   * @param {Object} handler Async callback function in the controller what handles the input of the user
   * @this {Object} View instance 
   */
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();

      handler();
    });
  }
}

export default new SearchView();
