export default function addRecipe(element) {
  const recipeLi = document.createElement("li");

  const article = document.createElement("article");
  article.classList.add("recipe");
  recipeLi.appendChild(article);

  const image = document.createElement("img");
  image.setAttribute("src", "https://picsum.photos/id/163/800/500");
  image.setAttribute("alt", "recipe-titlz");
  article.appendChild(image);

  const h2 = document.createElement("h2");
  const title = document.createTextNode("Ma recette");
  h2.appendChild(title);
  article.appendChild(h2);

  const h3 = document.createElement("h3");
  const ingredients = document.createTextNode("Mes ingrédients");
  h3.appendChild(ingredients);
  article.appendChild(h3);

  element.appendChild(recipeLi);
}
