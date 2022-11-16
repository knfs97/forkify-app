import View from './view.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2 (all asset that are no code)
import { icon } from 'leaflet';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

   /**
   * Change results view page prev/next depends on what button is clicked
   * the view is handled by the controller
   * @pattern Publisher(View) - Subscriber(Controller)
   * @param {Object} handler Async function in the controller which handles this event
   * @this {Object} View Instance
   */
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const gotoPage = +btn.dataset.goto;

      handler(gotoPage);
    });
  }
  /**
   * Generate the markup that contains the button to change page in the pagination
   * view, it will check in which page user is and how many page has left
   * @returns {string} either containing both buttons (e.g User is page 2 and has page 1 left and rest at the right), containing one button(e.g User is in first page with the rest on right or User is in last page with rest on left), empty string when there is only one page
   * @this {Object} View Instance
   */
  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return this._generateMarkupButton(currentPage, 'right', icons);
    }

    // Last page
    if (currentPage === numPages && numPages > 1) {
      return this._generateMarkupButton(currentPage, 'left', icons);
    }
    // Other page
    if (currentPage < numPages && currentPage !== 1) {
      return `
      ${this._generateMarkupButton(currentPage, 'left', icons)}
      ${this._generateMarkupButton(currentPage, 'right', icons)}
      `;
    }

    return '';
  }

  /**
   * Generate a string markup to print a button in the DOM 
   * @param {number} currentPage Current page in the search view
   * @param {string} direction Can be -left- | -right- depends on what direction wants the button to point
   * @param {string} icon URL where the icon image is
   * @returns 
   */
  _generateMarkupButton(currentPage, direction, icon) {
    const pageToGo = direction === 'left' ? currentPage - 1 : currentPage + 1;
    return `
    <button data-goto="${pageToGo}" class="btn--inline pagination__btn--${
      direction === 'left' ? 'prev' : 'next'
    }">
      <svg class="search__icon">
        <use href="${icon}#icon-arrow-${direction}"></use>
      </svg>
      <span>Page ${pageToGo}</span>
    </button>`;
  }
}

export default new PaginationView();
