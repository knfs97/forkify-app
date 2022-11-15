import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable'; // polyfilling everything else
import 'regenerator-runtime/runtime'; // polyfilling async/await

// if (module.hot) {
//   module.hot.accept();
// }
///////////////////////////////////////
// IMP: Recipe Control
const controlRecipe = async function () {
  try {
    // get id
    const id = window.location.hash.slice(1);

    if (!id) return;

    // 0) Update results view to mark selected search results
    resultsView.update(model.getSearchResultsPage());

    // 1) Updating Bookmarks View
    bookmarksView.update(model.state.bookmarks);

    // render spinner
    recipeView.renderSpinner();

    // 2) loading recipe
    await model.loadRecipe(id); // async function

    // 3) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};
//////////////////////
// IMP: Search Control
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // Get search query
    const query = searchView.getQuery();

    if (!query || query === '') {
      resultsView.renderError();
      return;
    }

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    // 4) render initial pagination view
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};
/////////////////////////////
// IMP: Pagination Control
const controlPagination = function (gotoPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(gotoPage));

  // 2) render NEW pagination buttons
  paginationView.render(model.state.search);
};
////////////////////////
// IMP: Serving Control
const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};
const controlAddBookmark = function () {
  // Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};
///////////////////////////
// IMP : Bookmarks Control
const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

//////////////////////////////
// IMP : Control add recipe
const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);

    // Render Recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmarks view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    // allows us to change the url without reload the page
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    addRecipeView.renderError(error.message);
  }
};
const newFeature = function () {
  console.log('welcome');
};
////////////////////////////////
// IMP: Here Starts the application
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks); // load (event)
  recipeView.addHandlerRender(controlRecipe); // hashchange or load (event)
  recipeView.addHandlerUpdateServings(controlServings); // click (event)
  recipeView.addHandlerAddBookmark(controlAddBookmark); // click (event)
  searchView.addHandlerSearch(controlSearchResults); // submit (event)
  paginationView.addHandlerClick(controlPagination); // click (event)
  addRecipeView._addHandlerUpload(controlAddRecipe); // submit (event)
  newFeature();
};
init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();
