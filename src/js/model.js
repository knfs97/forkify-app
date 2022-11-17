import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config.js';
import { AJAX } from './helpers.js';

//////////////////////////////////////////////////////
// State Object -> retains all data for the app
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

/**
 * Creates a new Recipe from data
 * @param {Object} data Used to create a new Recipe
 * @returns {Object} Recipe created
 */
const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }), // IMP : add property to object dynamically
  };
};
////////////////////////////
// IMP: Show Recipe Feature
/**
 * Load recipe from Object state
 * @async
 * @param {string} id ID of the recipe
 */
export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}`);

    state.recipe = createRecipeObject(data);

    // set bookmark as mark once the recipe is loaded
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (error) {
    throw error;
  }
};
//////////////////////////////
// IMP : Search Feature
/**
 * Fill property results of Object state.search with the data from the API
 * @param {string} query Query to be used to retrieve all the recipes that match it
 */
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const { data } = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    state.search.results = data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1;
  } catch (error) {
    throw error;
  }
};
/**
 * From number of recipes per page returns on that amount of recipes from state.search.results array
 * @param {number} page Current page
 * @returns {Array} array with length that match number of recipe per page specify
 */
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 9

  return state.search.results.slice(start, end);
};

////////////////////
// IMP : Serving Feature
/**
 * Update ingredients quantity with the new servings amount
 * @param {number} newServings New amount of each ingredient to update servings
 */
export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings
  });

  state.recipe.servings = newServings;
};

///////////////////////////
// IMP : Bookmark Feature
/**
 * Stores in the local storage all bookmarked recipes
 */
const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
/**
 * Add a Recipe to bookmarks array
 * @param {Object} recipe
 */
export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};
/**
 * Remove a recipe from bookmarks array using its ID
 * @param {string} id Recipe ID
 */
export const deleteBookmark = function (id) {
  // delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as not bookmark
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

/**
 * Get all bookmarked recipes from local storage and save them in bookmarks array
 */
const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
  console.log(storage);
};
init();

///////////////////////////
// IMP: Add recipe Feature
/**
 * Upload a new recipe after being added from the user and add to bookmarks array
 * because all added recipe by user are automatically bookmarked
 * @async
 * @param {Object} newRecipe
 */
export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format :)'
          );
        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (error) {
    throw error;
  }
};
