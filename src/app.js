import { all, includes } from "ramda";

import addSearchInput from "./addSearchInput";
import addRecipe from "./addRecipe";
import responseToJson from "./responseToJson";

export default function app() {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const recipesList = document.getElementById("recipes-list");

  addSearchInput(header);

  let recipes = [];
  let filteredIngedients = [];

  const displayRecipes = () => {
    while (recipesList.hasChildNodes()) {
      recipesList.removeChild(recipesList.firstChild);
    }

    const filteredRecipes = recipes.filter((recipe) => {
      const includesIngredients = (val) => includes(val, recipe.ingredients);

      return all(includesIngredients, filteredIngedients);
    });

    filteredRecipes.map((recipe) => {
      addRecipe(recipesList, recipe);
    });
  };

  const filterRecipes = (event) => {
    const searchInput = event.currentTarget;
    filteredIngedients = searchInput.value.split(" ");

    displayRecipes();
  };

  const searchInput = document.getElementById("ingredients");
  searchInput.addEventListener("keyup", filterRecipes);
  searchInput.addEventListener("change", filterRecipes);

  fetch("http://localhost:3000/recipes")
    .then(responseToJson)
    .then((fetchedRecipes) => {
      recipes = fetchedRecipes;
    })
    .then(displayRecipes);
}
