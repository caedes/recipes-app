export default function addRecipe(element, { id, name, ingredients = [] }) {
  const recipeLi = document.createElement("li");

  const article = document.createElement("article");
  article.classList.add("recipe");
  recipeLi.appendChild(article);

  const image = document.createElement("img");
  image.setAttribute("src", `https://picsum.photos/id/${id}/800/500`);
  image.setAttribute("alt", name);
  article.appendChild(image);

  const h2 = document.createElement("h2");
  const title = document.createTextNode(name);
  h2.appendChild(title);
  article.appendChild(h2);

  const h3 = document.createElement("h3");
  const ingredientsList = document.createTextNode(ingredients.join(", "));
  h3.appendChild(ingredientsList);
  article.appendChild(h3);

  element.appendChild(recipeLi);
}
