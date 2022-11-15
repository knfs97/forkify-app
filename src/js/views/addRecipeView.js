import View from './view.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2 (all asset that are no code)
import { icon } from 'leaflet';
class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  /**
   * @Show-Hide modal to add new recipe
   * @Add-Remove overlay given focus to the modal
   * @this {Object} AddRecipeView instance
   */
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
  /**
   * Show modal
   * @this {Object} AddRecipeView instance
   */
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  /**
   * Hide modal
   * @this {Object} AddRecipeView instance
   */
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
  /**
   * Upload data receive in modal when add recipe is needed and pass to controller
   * @pattern Publisher(View) - Subscriber(Controller)
   * @param {Object} handler Async function in the controller which handles the information collected here
   */
  _addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr); // opposite of Object.entries()
      console.log(data);
      handler(data);
    });
  }
  // _generateMarkup() {}
}

export default new AddRecipeView();
