import addSearchInput from "./addSearchInput";
import addRecipe from "./addRecipe";
import db from "../db.json";

export default function app() {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const recipesList = document.getElementById("recipes-list");

  addSearchInput(header);

  db.recipes.map((recipe) => {
    addRecipe(recipesList, recipe);
  });
}
