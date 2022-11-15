import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2 (all asset that are no code)

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';

  /**
   * Fills the View with all bookmarked recipes
   * @pattern Publisher(View) - Subscriber(Controller)
   * @param {Object} handler Async function in the controller which handles the when page loads show bookmarked recipe
   */
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  /**
   * PreviewView contains markup to display each bookmarked
   * recipe. This function use that markup to create a list
   * of all the bookmarked recipe to be displayed in the
   * parent element
   * @returns {String} markup to be inserted after in the DOM
   */
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new BookmarksView();
