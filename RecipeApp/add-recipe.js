const form = document.getElementById("addRecipeForm");
const yourRecipeDiv = document.getElementById("yourRecipe");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("recipeName").value;
  const area = document.getElementById("recipeArea").value;
  const category = document.getElementById("recipeCategory").value;
  const ingredients = document.getElementById("ingredients").value;
  const instructions = document.getElementById("instructions").value;
  const youtube = document.getElementById("youtubeLink").value;

  const recipeHTML = `
    <h3>${name}</h3>
    <p><strong>Area:</strong> ${area}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Ingredients:</strong> ${ingredients}</p>
    <p><strong>Instructions:</strong> ${instructions}</p>
    ${youtube ? `<a href="${youtube}" target="_blank">Watch Tutorial</a>` : ""}
  `;

  yourRecipeDiv.innerHTML = `<h2>Your Submitted Recipe:</h2>` + recipeHTML;
  form.reset();
});
