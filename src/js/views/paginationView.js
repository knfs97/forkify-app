import View from './view.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2 (all asset that are no code)
import { icon } from 'leaflet';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const gotoPage = +btn.dataset.goto;

      handler(gotoPage);
    });
  }
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
