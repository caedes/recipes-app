import addSearchInput from "./addSearchInput";
import addRecipe from "./addRecipe";
import responseToJson from "./responseToJson";

export default function app() {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const recipesList = document.getElementById("recipes-list");

  addSearchInput(header);

  fetch("http://localhost:3000/recipes")
    .then(responseToJson)
    .then((recipes) => {
      recipes.map((recipe) => {
        addRecipe(recipesList, recipe);
      });
    });
}
