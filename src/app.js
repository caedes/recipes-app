import addSearchInput from "./addSearchInput";
import addRecipe from "./addRecipe";

export default function app() {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const recipesList = document.getElementById("recipes-list");

  addSearchInput(header);

  addRecipe(recipesList);
  addRecipe(recipesList);
  addRecipe(recipesList);
  addRecipe(recipesList);
  addRecipe(recipesList);
  addRecipe(recipesList);
}
